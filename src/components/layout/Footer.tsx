import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-navy text-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h3 className="font-serif text-2xl mb-4">Luxuria Pure</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Professional residential cleaning for Alexandria, Arlington, and DC. Fully insured and reliable.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Explore</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">Why We Exist</Link></li>
                        <li><Link href="/areas" className="hover:text-white transition-colors">Areas Served</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Contact</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>Alexandria, VA</li>
                        <li><a href="mailto:info@luxuryapure.com" className="hover:text-white">info@luxuriapure.com</a></li>
                        <li><a href="tel:+14435357785" className="hover:text-white">+1 (443) 535-7785</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} LuxuriaPure Cleaning. All rights reserved.
            </div>
        </footer>
    )
}
