import React from 'react'

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <div className="logo">Gymmi<span>: O Futuro do Treino</span></div>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          className="btn-whatsapp"
        >
          Falar no WhatsApp
        </a>
      </nav>

      <header className="hero split-container reveal">
        <div className="hero-content">
          <h1>
            Seu Personal Trainer <br />
            <span>dentro do WhatsApp</span>
          </h1>
          <p>
            Treinos personalizados, GIFs de execução e contagem de calorias por foto.
            Tudo simples, rápido e movido por IA.
          </p>
          <div className="hero-buttons">
            <a href="#checkout" className="btn-main">Começar</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000" alt="Gymmi App" />
        </div>

        <div className="scroll-indicator">
          <span></span>
        </div>
      </header>

      <section id="checkout" className="pricing-section split-container reveal">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1000"
            alt="Treino no Celular"
          />
        </div>

        <div className="pricing-card reveal delay-1">
          <span className="badge">Plano Premium</span>
          <div className="price">R$ 29,90<span>/mês</span></div>

          <ul className="features-list">
            <li>✅ Consultas ilimitadas</li>
            <li>✅ Planos de treino avançados</li>
            <li>✅ Suporte prioritário</li>
          </ul>

          <a
            href="https://mpago.la/1WJgXGz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pay reveal delay-2 pulse"
          >
            Começar meu treino agora
          </a>
        </div>
      </section>
      {/* SEÇÃO DE CADASTRO - ACIMA DO FAQ */}
      {/* SEÇÃO DE CADASTRO REFINADA */}
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
            {/* NOME E CPF */}
            <div className="input-row">
              <div className="input-group">
                <label>Nome Completo</label>
                <input type="text" name="nome" placeholder="Nome Sobrenome" required />
              </div>
              <div className="input-group">
                <label>CPF</label>
                <input type="text" name="cpf" placeholder="000.000.000-00" required />
              </div>
            </div>

            {/* EMAIL E TELEFONE */}
            <div className="input-row">
              <div className="input-group">
                <label>E-mail</label>
                <input type="email" name="email" placeholder="seu@email.com" required />
              </div>
              <div className="input-group">
                <label>WhatsApp</label>
                <input type="tel" name="telefone" placeholder="(11) 99999-9999" required />
              </div>
            </div>

            {/* BLOCO DE ENDEREÇO (CEP PRIMEIRO) */}
            <div className="input-row">
              <div className="input-group" style={{ flex: '1' }}>
                <label>CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="00000-000"
                  maxLength="9"
                  required
                />
              </div>
              <div className="input-group" style={{ flex: '2' }}>
                <label>Endereço (Rua e Número)</label>
                <input type="text" id="rua" name="rua" placeholder="Aguardando CEP..." required />
              </div>
            </div>

            {/* CIDADE E ESTADO */}
            <div className="input-row">
              <div className="input-group" style={{ flex: '2' }}>
                <label>Cidade</label>
                <input type="text" id="cidade" name="cidade" placeholder="Cidade" required />
              </div>
              <div className="input-group" style={{ flex: '1' }}>
                <label>Estado</label>
                <input type="text" id="uf" name="uf" placeholder="UF" maxLength="2" required />
              </div>
            </div>

            <button type="submit" className="btn-main pulse" style={{ width: '100%', marginTop: '1rem' }}>
              Confirmar e Gerar Treino
            </button>
          </form>        </div>
      </section>
      {/* FAQ FORA DO CARD DE PREÇO */}
      <section className="faq-section">
        <h2 className='reveal delay-2'>Dúvidas Frequentes</h2>
        <div className="faq-grid">
          <div className="faq-item reveal delay-3">
            <h4>Como recebo meus treinos?</h4>
            <p>Tudo é enviado diretamente no seu WhatsApp. Sem precisar baixar apps pesados.</p>
          </div>

          <div className="faq-item reveal delay-3">
            <h4>Posso cancelar quando quiser?</h4>
            <p>Sim! O plano é mensal e você pode interromper a renovação a qualquer momento pelo painel do Mercado Pago.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer reveal delay-3">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Gymmi<span>.ia</span></h3>
            <p>Seu treino inteligente via WhatsApp.</p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#faq">Dúvidas</a></li>
              <li><a href="#contato">Suporte</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Comunidade</h4>
            <div className="social-icons">
              <span>📸 Instagram</span><br />
              <span>🐦 Twitter</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Gymmi - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App