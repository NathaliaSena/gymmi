import React, { useState } from 'react';

const CadastroForm = () => {
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState({
        cep: '',
        rua: '',
        cidade: '',
        uf: ''
    });

    const formatCPF = (value: string) => {
        return value
            .replace(/\D/g, '') // Remove tudo o que não é número
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o primeiro ponto
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o segundo ponto
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca o hífen
            .replace(/(-\d{2})\d+?$/, '$1'); // Limita o tamanho final
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCpf = formatCPF(e.target.value);
        setCpf(formattedCpf);
    };

    const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, '');

        if (cep.length !== 8) return;

        console.log("Iniciando busca para o CEP:", cep);

        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        const data = await response.json();

        if (response.ok) {
            setEndereco(prev => ({
                ...prev,
                rua: data.street || '',        // Na BrasilAPI é 'street' em vez de 'logradouro'
                cidade: data.city || '',       // Na BrasilAPI é 'city' em vez de 'localidade'
                uf: data.state || ''           // Na BrasilAPI é 'state' em vez de 'uf'
            }));
        } else {
            alert("CEP não encontrado na base de dados.");
        }
    };

    return (
        <section id="cadastro" className="split-container reverse reveal">
            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=1000" alt="Cadastro" />
            </div>

            <div className="hero-content">
                <div className="cadastro-header">
                    <h2>Finalize seu <span>Cadastro</span></h2>
                    <p>Preencha os dados para liberar seu acesso.</p>
                </div>

                <form className="gymmi-form">
                    {/* Nome e CPF */}
                    <div className="input-row">
                        <div className="input-group">
                            <label>Nome Completo</label>
                            <input type="text" required />
                        </div>
                        <div className="input-group">
                            <label>CPF</label>
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={handleCpfChange}
                                maxLength={14} // O CPF com pontos e traço tem 14 caracteres
                                required
                            />
                        </div>
                    </div>

                    {/* CEP e Endereço */}
                    <div className="input-row">
                        <div className="input-group" style={{ flex: '1' }}>
                            <label>CEP</label>
                            <input
                                type="text"
                                maxLength={8}
                                placeholder="00000000"
                                value={endereco.cep}
                                onChange={(e) => setEndereco({ ...endereco, cep: e.target.value })}
                                onBlur={handleCepBlur}
                                required
                            />
                        </div>
                        <div className="input-group" style={{ flex: '2' }}>
                            <label>Rua e Número</label>
                            <input
                                type="text"
                                value={endereco.rua}
                                onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })}
                                placeholder="Ex: Av. Paulista, 123"
                                required
                            />
                        </div>
                    </div>

                    {/* Cidade e Estado (Campos que a API preenche) */}
                    <div className="input-row">
                        <div className="input-group" style={{ flex: '2' }}>
                            <label>Cidade</label>
                            <input type="text" value={endereco.cidade} readOnly className="input-disabled" />
                        </div>
                        <div className="input-group" style={{ flex: '1' }}>
                            <label>UF</label>
                            <input type="text" value={endereco.uf} readOnly className="input-disabled" />
                        </div>
                    </div>

                    <button type="submit" className="btn-main pulse" style={{ width: '100%', marginTop: '1.5rem' }}>
                        Confirmar Treino
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CadastroForm;