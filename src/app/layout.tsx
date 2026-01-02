import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'LuxuriaPure Cleaning | Premium Residential Services',
    description: 'The premier cleaning service for discerning homeowners in Alexandria, Arlington, and DC. Consistent, professional, and discreet.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow pt-20">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
