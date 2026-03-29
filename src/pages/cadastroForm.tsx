import React, { useState } from 'react';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '', cpf: '', email: '', telefone: '', cep: '', rua: '', cidade: '', uf: ''
  });

  const [errors, setErrors] = useState({ cpf: '', cep: '' });

  // --- MÁSCARAS ---
  const formatCPF = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatTelefone = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{4})\d+?$/, '$1');
  };

  // --- VALIDAÇÃO CPF ---
  const validarCPFReal = (cpf: string) => {
    const rawCpf = cpf.replace(/\D/g, '');
    if (rawCpf.length !== 11 || !!rawCpf.match(/(\d)\1{10}/)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(rawCpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(rawCpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(rawCpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    return resto === parseInt(rawCpf.substring(10, 11));
  };

  const handleCpfBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (!valor) { setErrors(p => ({ ...p, cpf: '' })); return; }
    setErrors(p => ({ ...p, cpf: validarCPFReal(valor) ? '' : 'CPF inválido ou inexistente.' }));
  };

  // --- VALIDAÇÃO CEP (CORRIGIDA) ---
  const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const rawCep = e.target.value.replace(/\D/g, ''); // Garante limpeza total
    
    if (!rawCep) {
      setErrors(p => ({ ...p, cep: '' }));
      return;
    }

    if (rawCep.length !== 8) {
      setErrors(p => ({ ...p, cep: 'O CEP deve ter 8 números.' }));
      setFormData(prev => ({ ...prev, rua: '', cidade: '', uf: '' }));
      return;
    }

    try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${rawCep}`);
      
      if (response.ok) {
        const data = await response.json();
        setErrors(p => ({ ...p, cep: '' }));
        setFormData(prev => ({
          ...prev,
          cep: rawCep,
          rua: data.street || data.logradouro || '',
          cidade: data.city || data.localidade || '',
          uf: data.state || data.uf || ''
        }));
      } else {
        setErrors(p => ({ ...p, cep: 'CEP não encontrado.' }));
        setFormData(prev => ({ ...prev, rua: '', cidade: '', uf: '' }));
      }
    } catch (err) {
      setErrors(p => ({ ...p, cep: 'Erro ao consultar CEP.' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.cpf || errors.cep || !formData.cpf || !formData.cep) {
      alert("Corrija os campos em vermelho antes de prosseguir.");
      return;
    }
    alert("Formulário validado com sucesso! Próximo passo: Banco de Dados.");
  };

  return (
    <section id="cadastro" className="split-container reverse">
      <div className="hero-content">
        <div className="cadastro-header">
          <h2>Finalize seu <span>Cadastro</span></h2>
        </div>

        <form className="gymmi-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label>Nome Completo <span className="required-star">*</span></label>
              <input type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>CPF <span className="required-star">*</span></label>
              <input type="text" value={formData.cpf} onChange={e => setFormData({...formData, cpf: formatCPF(e.target.value)})} onBlur={handleCpfBlur} maxLength={14} className={errors.cpf ? 'input-error' : ''} required />
              {errors.cpf && <span className="error-message">{errors.cpf}</span>}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>E-mail <span className="required-star">*</span></label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="input-group">
              <label>WhatsApp <span className="required-star">*</span></label>
              <input type="text" value={formData.telefone} onChange={e => setFormData({...formData, telefone: formatTelefone(e.target.value)})} maxLength={15} required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group" style={{ flex: '1' }}>
              <label>CEP <span className="required-star">*</span></label>
              <input 
                type="text" 
                value={formData.cep} 
                onChange={e => setFormData({...formData, cep: e.target.value.replace(/\D/g, '')})} 
                onBlur={handleCepBlur} 
                maxLength={8} 
                className={errors.cep ? 'input-error' : ''} 
                required 
              />
              {errors.cep && <span className="error-message">{errors.cep}</span>}
            </div>
            <div className="input-group" style={{ flex: '2' }}>
              <label>Endereço <span className="required-star">*</span></label>
              <input type="text" value={formData.rua} onChange={e => setFormData({...formData, rua: e.target.value})} required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group" style={{ flex: '2' }}>
              <label>Cidade <span className="required-star">*</span></label>
              <input type="text" value={formData.cidade} readOnly className="input-disabled" required />
            </div>
            <div className="input-group" style={{ flex: '1' }}>
              <label>UF <span className="required-star">*</span></label>
              <input type="text" value={formData.uf} readOnly className="input-disabled" required />
            </div>
          </div>

          <p className="form-footer-info"><span className="required-star">*</span> Campos obrigatórios.</p>
          <button type="submit" className="btn-main pulse">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default CadastroForm;