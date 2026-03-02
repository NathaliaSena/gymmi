import React from 'react'

function App() {
  return (
    <div className="container">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Gymmi: O Futuro do Treino</div>
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          className="btn-whatsapp"
        >
          Falar no WhatsApp
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="hero reveal">
        <h1>
          Seu Personal Trainer <br />
          <span>dentro do WhatsApp</span>
        </h1>
        <p>
          Treinos personalizados, GIFs de execução e contagem de calorias por foto. 
          Tudo simples, rápido e movido por IA.
        </p>
        
        <div className="hero-buttons">
          {/* Adicionei classes básicas para você estilizar no Sass depois se quiser */}
          <button className="btn-main">Começar</button>
        </div>
      </header>

      {/* CARD DE PREÇO / PAGAMENTO */}
      <section className="pricing-section">
        <div className="pricing-card reveal delay-1">
          <span className="badge">Plano Premium</span>
          <div className="price">R$ 29,90<span>/mês</span></div>
          
          <ul className="features-list">
            <li>✅ Consultas ilimitadas</li>
            <li>✅ Planos de treino avançados</li>
            <li>✅ Suporte prioritário</li>
          </ul>

          <a 
            href="SEU_LINK_DO_MERCADO_PAGO_AQUI" 
            className="btn-pay"
          >
            Pagar com Mercado Pago
          </a>
          <section className="faq-section">
            <h2 className='reveal delay-2'>Dúvidas Frequentes</h2>

            <div className="faq-item reveal delay-3">
              <h4>Como recebo meus treinos?</h4>
              <p>Tudo é enviado diretamente no seu WhatsApp. Sem precisar baixar apps pesados.</p>
            </div>

            <div className="faq-item reveal delay-3">
              <h4>Posso cancelar quando quiser?</h4>
              <p>Sim! O plano é mensal e você pode interromper a renovação a qualquer momento pelo painel do Mercado Pago.</p>
            </div>
          </section>
        </div>
      </section>
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
              {/* Aqui você pode colocar links reais depois */}
              <span>📸 Instagram</span>
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