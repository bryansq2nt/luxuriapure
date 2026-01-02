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
    title: 'LuxuriaPure Cleaning | Residential Cleaning Services',
    description: 'Professional residential cleaning services in Alexandria, Arlington, and NW Washington DC. Reliable, well-structured service with clear expectations.',
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
