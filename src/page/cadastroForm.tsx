import React, { useState } from 'react';

const CadastroForm = () => {
  const [endereco, setEndereco] = useState({
    cep: '',
    rua: '',
    cidade: '',
    uf: ''
  });

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setEndereco({
            cep: cep,
            rua: data.logradouro,
            cidade: data.localidade,
            uf: data.uf
          });
        } else {
          alert("CEP não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  return (
    <section id="cadastro" className="split-container reverse reveal">
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=1000" 
          alt="Cadastro Gymmi" 
        />
      </div>

      <div className="hero-content">
        <div className="cadastro-header">
          <h2>Finalize seu <span>Cadastro</span></h2>
          <p>Preencha seus dados oficiais para emissão do plano.</p>
        </div>

        <form className="gymmi-form">
          <div className="input-row">
            <div className="input-group">
              <label>Nome Completo</label>
              <input type="text" placeholder="Nome Sobrenome" required />
            </div>
            <div className="input-group">
              <label>CPF</label>
              <input type="text" placeholder="000.000.000-00" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>E-mail</label>
              <input type="email" placeholder="seu@email.com" required />
            </div>
            <div className="input-group">
              <label>WhatsApp</label>
              <input type="tel" placeholder="(11) 99999-9999" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group" style={{ flex: '1' }}>
              <label>CEP</label>
              <input 
                type="text" 
                maxLength="8"
                onBlur={handleCepBlur}
                onChange={(e) => setEndereco({...endereco, cep: e.target.value})}
                value={endereco.cep}
                placeholder="00000000" 
                required 
              />
            </div>
            <div className="input-group" style={{ flex: '2' }}>
              <label>Endereço</label>
              <input 
                type="text" 
                value={endereco.rua}
                onChange={(e) => setEndereco({...endereco, rua: e.target.value})}
                placeholder="Rua e número" 
                required 
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group" style={{ flex: '2' }}>
              <label>Cidade</label>
              <input type="text" value={endereco.cidade} readOnly required />
            </div>
            <div className="input-group" style={{ flex: '1' }}>
              <label>Estado</label>
              <input type="text" value={endereco.uf} readOnly required />
            </div>
          </div>

          <button type="submit" className="btn-main pulse" style={{ width: '100%', marginTop: '1rem' }}>
            Confirmar e Gerar Treino
          </button>
        </form>
      </div>
    </section>
  );
};

export default CadastroForm;