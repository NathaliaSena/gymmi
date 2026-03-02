import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* HEADER / NAVBAR */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-green-400">GYMMI</div>
        <a 
          href="https://wa.me/SEU_NUMERO_AQUI" 
          target="_blank" 
          className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
        >
          Falar no WhatsApp
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-4xl mx-auto text-center mt-20 px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          Seu Personal Trainer <br />
          <span className="text-green-400">dentro do WhatsApp</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Treinos personalizados, GIFs de execução e contagem de calorias por foto. Simples, rápido e IA.
        </p>
        
        {/* BOTÃO PRINCIPAL */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black font-bold text-lg py-4 px-10 rounded-2xl hover:bg-gray-200 transition-all w-full md:w-auto">
            Começar Grátis
          </button>
          <a 
            href="#precos" 
            className="border border-gray-700 text-white font-bold text-lg py-4 px-10 rounded-2xl hover:bg-gray-900 transition-all w-full md:w-auto"
          >
            Ver Planos
          </a>
        </div>
      </header>

      {/* SEÇÃO DE RECURSOS (FEATURES) */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-32 px-6">
        <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
          <div className="text-4xl mb-4">🏋️‍♂️</div>
          <h3 className="text-xl font-bold mb-2">Treinos Customizados</h3>
          <p className="text-gray-400">A IA monta sua ficha baseada no seu objetivo e equipamentos.</p>
        </div>
        <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
          <div className="text-4xl mb-4">🎬</div>
          <h3 className="text-xl font-bold mb-2">Aprenda com GIFs</h3>
          <p className="text-gray-400">Não sabe o exercício? O Gymmi te envia o GIF na hora.</p>
        </div>
        <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
          <div className="text-4xl mb-4">📸</div>
          <h3 className="text-xl font-bold mb-2">Foto das Refeições</h3>
          <p className="text-gray-400">Mande uma foto do prato e receba o cálculo de calorias e macros.</p>
        </div>
      </section>

      {/* SEÇÃO DE PAGAMENTO (CHECKOUT) */}
      <section id="precos" className="max-w-4xl mx-auto mt-40 pb-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-400">Vire Premium agora</h2>
        <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 p-1 rounded-[40px]">
          <div className="bg-black rounded-[38px] p-10 md:p-16">
            <span className="bg-green-500 text-black font-black px-4 py-1 rounded-full text-sm uppercase">Oferta de Lançamento</span>
            <h3 className="text-5xl font-black mt-6 mb-4">R$ 29,90<span className="text-xl text-gray-500 font-normal">/mês</span></h3>
            <ul className="text-gray-300 text-left max-w-xs mx-auto space-y-4 mb-10">
              <li>✅ Consultas ilimitadas com a IA</li>
              <li>✅ Planos de treino avançados</li>
              <li>✅ Suporte prioritário no WhatsApp</li>
            </ul>
            
            {/* LINK DO MERCADO PAGO AQUI */}
            <a 
              href="SEU_LINK_DO_MERCADO_PAGO_AQUI" 
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold text-2xl py-5 px-12 rounded-3xl block transition-all shadow-lg shadow-blue-500/20"
            >
              Assinar via Mercado Pago
            </a>
            <p className="text-gray-500 mt-6 text-sm">Cancelamento simples a qualquer momento.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App