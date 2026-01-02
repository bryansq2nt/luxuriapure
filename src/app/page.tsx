import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero_luxury_living_room_1767313966221.png"
                        alt="Clean, organized living room"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white fade-in">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-md text-white">
                        Professional Residential <span className="text-gold italic">Cleaning</span>.
                    </h1>
                    <p className="text-lg md:text-2xl mb-10 font-light tracking-wide text-gray-100">
                        Consistent, structured service for homeowners in Alexandria, Arlington, and DC.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/booking" variant="primary" className="bg-gold text-navy hover:bg-white hover:text-navy border-none min-w-[200px]">
                            Request Estimate
                        </Button>
                        <Button href="/services" variant="outline" className="text-white border-white hover:bg-white hover:text-navy min-w-[200px]">
                            View Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Brand Promise Section */}
            <Section background="white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">About Us</h2>
                    <h3 className="text-4xl font-serif text-navy mb-6">A Structured, Reliable Local Business.</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        We are a professional cleaning company, not a referral agency or a gig service.
                        We focus on providing a consistent, detailed clean that you can rely on, visit after visit.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {[
                        { title: "Consistent", desc: "Our teams follow a specific checklist to ensure the same high standard every time we visit." },
                        { title: "Professional", desc: "We are a fully insured business. Our staff is trained, vetted, and respectful of your home." },
                        { title: "Structured", desc: "Clear pricing, reliable scheduling, and defined scopes of work. No guesswork." }
                    ].map((item, i) => (
                        <div key={i} className="bg-off-white p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="font-serif text-xl text-navy mb-4">{item.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Services Preview */}
            <Section background="off-white">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Our Services</h2>
                    <h3 className="text-4xl font-serif text-navy">Clear, Simple Pricing</h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Essential */}
                    <div className="bg-white p-8 border border-gray-200 flex flex-col items-center text-center">
                        <h4 className="font-serif text-2xl text-navy mb-2">Essential Clean</h4>
                        <div className="text-gold text-3xl font-semibold mb-6">Starting at $150</div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">Up to 2,000 sqft</p>
                        <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left w-full pl-4">
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Kitchen & Bathrooms</li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Floors & Dusting</li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Light Switches & Outlets</li>
                        </ul>
                        <div className="mt-auto">
                            <Button href="/booking" variant="outline" className="w-full">Select</Button>
                        </div>
                    </div>

                    {/* Signature */}
                    <div className="bg-navy p-8 border border-navy text-white flex flex-col items-center text-center transform md:-translate-y-4 shadow-xl">
                        <div className="bg-gold text-navy text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-4">Most Popular</div>
                        <h4 className="font-serif text-2xl text-white mb-2">Signature Clean</h4>
                        <div className="text-gold text-3xl font-semibold mb-6">Starting at $210</div>
                        <p className="text-xs text-gray-300 uppercase tracking-wider mb-6">Up to 3,000 sqft</p>
                        <ul className="text-sm text-gray-300 space-y-3 mb-8 text-left w-full pl-4">
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> <strong>Everything in Essential</strong></li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Inside Fridge & Oven</li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Inside Windows</li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Detailed Kitchen Cleaning</li>
                        </ul>
                        <div className="mt-auto w-full">
                            <Button href="/booking" variant="primary" className="w-full bg-gold text-navy hover:bg-white">Select</Button>
                        </div>
                    </div>

                    {/* Luxuria Deep */}
                    <div className="bg-white p-8 border border-gray-200 flex flex-col items-center text-center">
                        <h4 className="font-serif text-2xl text-navy mb-2">Deep Clean</h4>
                        <div className="text-gold text-3xl font-semibold mb-6">Starting at $300</div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">Large Homes & Detailed Service</p>
                        <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left w-full pl-4">
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> <strong>Everything in Signature</strong></li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Baseboards (Hand Washed)</li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Blinds & Shades</li>
                            <li className="flex items-center"><span className="text-gold mr-2">•</span> Custom Requests</li>
                        </ul>
                        <div className="mt-auto">
                            <Button href="/booking" variant="outline" className="w-full">Get Quote</Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Service Areas */}
            <Section background="navy">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Service Areas</h2>
                        <h3 className="text-4xl font-serif text-white mb-6">Local & Focused.</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We focus on specific neighborhoods in the DMV to ensure our teams are punctual and not stuck in traffic across the city.
                        </p>
                        <Button href="/areas" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">View Neighborhoods</Button>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4 text-center">
                        {['Alexandria (Old Town)', 'Arlington', 'NW Washington DC', 'Bethesda / Chevy Chase'].map(area => (
                            <div key={area} className="p-4 border border-white/20 text-white font-serif text-lg">
                                {area}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    )
}
