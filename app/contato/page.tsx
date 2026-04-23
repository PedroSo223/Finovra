import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o Finovra. Tire suas dúvidas ou dê sugestões.',
}

export default function ContatoPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-[#0A1F44] mb-8">Contato</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-lg mb-6">
          Tem alguma dúvida, sugestão ou quer falar conosco? Envie um email para:
        </p>
        
        <div className="text-center py-8">
          <a 
            href="mailto:contato@finovra.com" 
            className="text-2xl text-[#00C27A] hover:text-[#0A1F44] transition font-semibold"
          >
            contato@finovra.com
          </a>
        </div>
        
        <p className="text-gray-600 text-center">
          Responderemos o mais breve possível.
        </p>
      </div>
    </div>
  )
}
