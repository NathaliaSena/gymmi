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
      <header className="hero">
        <h1>
          Seu Personal Trainer! staging <br />
          <span>dentro do WhatsApp</span>
        </h1>
        <p>
          Treinos personalizados, GIFs de execução e contagem de calorias por foto. 
          Tudo simples, rápido e movido por IA.
        </p>
        
        <div className="hero-buttons">
          {/* Adicionei classes básicas para você estilizar no Sass depois se quiser */}
          <button className="btn-main">Começar Grátis</button>
        </div>
      </header>

      {/* CARD DE PREÇO / PAGAMENTO */}
      <section className="pricing-section">
        <div className="pricing-card">
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
            <h2>Dúvidas Frequentes</h2>

            <div className="faq-item">
              <h4>Como recebo meus treinos?</h4>
              <p>Tudo é enviado diretamente no seu WhatsApp. Sem precisar baixar apps pesados.</p>
            </div>

            <div className="faq-item">
              <h4>Posso cancelar quando quiser?</h4>
              <p>Sim! O plano é mensal e você pode interromper a renovação a qualquer momento pelo painel do Mercado Pago.</p>
            </div>
          </section>
        </div>
      </section>

    </div>
  )
}

export default App