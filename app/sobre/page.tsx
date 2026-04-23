import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre o Finovra',
  description: 'Conheça o Finovra, um site de educação financeira focado em ensinar pessoas a organizarem melhor seu dinheiro.',
}

export default function SobrePage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-[#0A1F44] mb-8">Sobre o Finovra</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
        <p className="text-lg mb-4">
          Finovra é um site de educação financeira focado em ensinar pessoas a organizarem melhor seu dinheiro, 
          evitarem dívidas e aprenderem conceitos básicos de finanças pessoais.
        </p>
        
        <p className="text-lg mb-4">
          Nosso objetivo é tornar o conhecimento financeiro acessível para todos, com linguagem simples 
          e exemplos práticos do dia a dia.
        </p>
        
        <p className="text-lg mb-4">
          Acreditamos que com informação de qualidade e hábitos corretos, qualquer pessoa pode alcançar 
          sua liberdade financeira.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <p className="text-sm text-gray-600">
            ⚠️ O conteúdo é informativo e não substitui aconselhamento financeiro profissional.
          </p>
        </div>
      </div>
    </div>
  )
}
