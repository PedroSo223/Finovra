import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do Finovra. Saiba como seus dados são tratados.',
}

export default function PrivacidadePage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold text-[#0A1F44] mb-8">Política de Privacidade</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
        <p className="text-lg mb-4">
          Este site utiliza cookies e serviços de terceiros como o Google AdSense para exibição de anúncios personalizados.
        </p>
        
        <p className="text-lg mb-4">
          Podemos coletar dados anônimos para melhorar a experiência do usuário, como:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li>Páginas mais visitadas</li>
          <li>Tempo de permanência no site</li>
          <li>Interações com os conteúdos</li>
        </ul>
        
        <p className="text-lg mb-4">
          Não coletamos informações pessoais sensíveis sem consentimento explícito do usuário.
        </p>
        
        <p className="text-lg mb-4">
          O Google AdSense pode usar cookies para exibir anúncios baseados em visitas anteriores a este site.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <p className="text-sm text-gray-600">
            Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente.
          </p>
        </div>
      </div>
    </div>
  )
}
