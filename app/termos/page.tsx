import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do Finovra. Leia as condições para utilizar nosso site.',
}

export default function TermosPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-[#0A1F44] mb-8">Termos de Uso</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
        <p className="text-lg mb-4">
          Ao acessar o site Finovra, você concorda com estes termos de uso.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-4 text-[#0A1F44]">Conteúdo Informativo</h2>
        <p className="text-lg mb-4">
          Todo o conteúdo deste site é meramente informativo e não constitui aconselhamento financeiro profissional.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-4 text-[#0A1F44]">Responsabilidade do Usuário</h2>
        <p className="text-lg mb-4">
          As decisões financeiras tomadas com base no conteúdo do site são de inteira responsabilidade do usuário.
          Recomendamos sempre buscar orientação de profissionais qualificados.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-4 text-[#0A1F44]">Precisão das Informações</h2>
        <p className="text-lg mb-4">
          Não garantimos que todas as informações estejam sempre atualizadas ou isentas de erros.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <p className="text-sm text-gray-600">
            Ao continuar usando o site, você concorda com estes termos.
          </p>
        </div>
      </div>
    </div>
  )
}
