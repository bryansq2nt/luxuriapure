"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto flex justify-between items-center px-6">
                    <Link href="/" className="relative z-10 transition-transform duration-300 hover:scale-105 group">
                        <div className="flex flex-col items-center">
                            <span className={`font-serif text-4xl tracking-tight text-navy`}>
                                Luxuria<span className="text-gold"> Pure</span>
                            </span>
                            <div className={`flex items-center gap-2 text-xs tracking-[0.2em] font-medium text-navy opacity-90 group-hover:opacity-100 transition-opacity`}>
                                <span className={`h-[1px] w-4 bg-navy`}></span>
                                CLEANING
                                <span className={`h-[1px] w-4 bg-navy`}></span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Home</Link>
                        <Link href="/services" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Services</Link>
                        <Link href="/about" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Why Us</Link>
                        <Link href="/areas" className="text-sm font-medium uppercase tracking-wide text-navy hover:text-gold transition-colors">Areas Served</Link>
                        <Button href="/booking" variant="primary">Request Estimate</Button>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <button
                        className="md:hidden relative z-50 p-2 text-navy hover:text-gold transition-colors focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Link href="/" className="text-2xl font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/services" className="text-2xl font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/about" className="text-2xl font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Why Us</Link>
                    <Link href="/areas" className="text-2xl font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Areas Served</Link>
                    <div onClick={() => setIsOpen(false)}>
                        <Button href="/booking" variant="primary">Request Estimate</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
