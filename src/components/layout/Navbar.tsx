"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto flex justify-between items-center px-6">
                <Link href="/" className="relative z-10 transition-transform duration-300 hover:scale-105 group">
                    <div className="flex flex-col items-center">
                        <span className={`font-serif text-3xl tracking-tight text-navy`}>
                            Luxuria<span className="text-gold"> Pure</span>
                        </span>
                        <div className={`flex items-center gap-2 text-[10px] tracking-[0.2em] font-medium text-navy opacity-90 group-hover:opacity-100 transition-opacity`}>
                            <span className={`h-[1px] w-3 bg-navy`}></span>
                            CLEANING
                            <span className={`h-[1px] w-3 bg-navy`}></span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/services" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Services</Link>
                    <Link href="/about" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Why Us</Link>
                    <Link href="/areas" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Areas Served</Link>
                    <Button href="/booking" variant="primary">Request Estimate</Button>
                </div>

                {/* Mobile Menu Button (Hamburger) - Implementation skipped for brevity in this step, to be added later if requested */}
            </div>
        </nav>
    )
}
