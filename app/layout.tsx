import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://finovra.com'),
  title: {
    default: 'Finovra - Educação Financeira Simples e Acessível',
    template: '%s | Finovra'
  },
  description: 'Aprenda a organizar suas finanças, sair das dívidas e começar a investir com conteúdo simples e prático.',
  keywords: ['finanças pessoais', 'educação financeira', 'investimentos', 'economizar dinheiro', 'sair das dívidas'],
  authors: [{ name: 'Finovra' }],
  creator: 'Finovra',
  publisher: 'Finovra',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://finovra.com',
  },
  openGraph: {
    title: 'Finovra - Educação Financeira',
    description: 'Aprenda a organizar suas finanças de forma simples e prática',
    url: 'https://finovra.com',
    siteName: 'Finovra',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finovra - Educação Financeira',
    description: 'Aprenda a organizar suas finanças de forma simples e prática',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        <header className="bg-[#0A1F44] text-white sticky top-0 z-50">
          <div className="container-custom py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                Finovra
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="hover:text-[#00C27A] transition">Início</Link>
                <Link href="/sobre" className="hover:text-[#00C27A] transition">Sobre</Link>
                <Link href="/contato" className="hover:text-[#00C27A] transition">Contato</Link>
                <Link href="/admin" className="hover:text-[#00C27A] transition">Admin</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-[#0A1F44] text-white mt-16">
          <div className="container-custom py-8 text-center">
            <p>&copy; 2024 Finovra. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="/privacidade" className="text-sm hover:text-[#00C27A] transition">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-sm hover:text-[#00C27A] transition">
                Termos de Uso
              </Link>
              <Link href="/sobre" className="text-sm hover:text-[#00C27A] transition">
                Sobre
              </Link>
              <Link href="/contato" className="text-sm hover:text-[#00C27A] transition">
                Contato
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Conteúdo meramente informativo. Não substitui aconselhamento financeiro profissional.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
