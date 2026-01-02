import Image from 'next/image'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function ServicesPage() {
    return (
        <main>
            {/* Header */}
            <Section background="navy" className="py-20">
                <h1 className="text-5xl font-serif text-center text-white">Our Service Packages</h1>
                <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
                    Choose the level of detail that suits your lifestyle. No hidden fees. No surprises.
                </p>
            </Section>

            {/* Essential Clean */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-96 w-full">
                        <Image
                            src="/images/service_bathroom_spa_1767313993087.png"
                            alt="Pristine Bathroom"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-serif text-navy mb-2">Essential Clean</h2>
                        <div className="text-gold text-2xl font-semibold mb-6">Starting at $150</div>
                        <p className="text-gray-600 mb-6">
                            Consistent maintenance for your home. Covers all high-traffic areas with attention to detail.
                        </p>
                        <h3 className="font-bold text-sm uppercase tracking-widest text-navy mb-4">Includes:</h3>
                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 mb-8">
                            {['Kitchen & Cabinets (Exterior)', 'Bathrooms (Sanitized)', 'Bedrooms (Made & Dusted)', 'Floors (Vacuum & Mop)', 'Trash Cans (Washed)', 'Light Switches & Fans'].map(item => (
                                <li key={item} className="flex items-center"><span className="text-gold mr-3">✔</span> {item}</li>
                            ))}
                        </ul>
                        <Button href="/booking" variant="outline">Select Essential</Button>
                    </div>
                </div>
            </Section>

            {/* Signature Clean */}
            <Section background="off-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-gold text-white text-xs font-bold px-2 py-1 mb-2">RECOMMENDED</div>
                        <h2 className="text-3xl font-serif text-navy mb-2">Signature Clean</h2>
                        <div className="text-gold text-2xl font-semibold mb-6">Starting at $210</div>
                        <p className="text-gray-600 mb-6">
                            Our standard service for ongoing care. Includes detailed cleaning of the kitchen and appliances.
                        </p>
                        <h3 className="font-bold text-sm uppercase tracking-widest text-navy mb-4">Everything in Essential, Plus:</h3>
                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 mb-8">
                            {['Oven Interior Cleaning', 'Refrigerator Interior Cleaning', 'Interior Windows', 'Detailed Kitchen Care'].map(item => (
                                <li key={item} className="flex items-center"><span className="text-gold mr-3">✔</span> <strong>{item}</strong></li>
                            ))}
                        </ul>
                        <Button href="/booking" variant="primary">Select Signature</Button>
                    </div>
                    <div className="relative h-96 w-full">
                        <Image
                            src="/images/service_kitchen_pristine_1767313979233.png"
                            alt="Signature Kitchen"
                            fill
                            className="object-cover shadow-xl"
                        />
                    </div>
                </div>
            </Section>

            {/* Luxuria Deep Clean */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-96 w-full">
                        <Image
                            src="/images/service_bedroom_luxury_1767314006828.png"
                            alt="Luxury Bedroom"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-serif text-navy mb-2">Deep Clean</h2>
                        <div className="text-gold text-2xl font-semibold mb-6">Starting at $300</div>
                        <p className="text-gray-600 mb-6">
                            Recommended for initial visits or seasonal refreshing. A comprehensive reset for your home.
                        </p>
                        <h3 className="font-bold text-sm uppercase tracking-widest text-navy mb-4">Everything in Signature, Plus:</h3>
                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 mb-8">
                            {['Baseboards (Hand Washed)', 'Blinds & Shades (Dusted)', 'Porch (If applicable)', 'Custom Requests'].map(item => (
                                <li key={item} className="flex items-center"><span className="text-gold mr-3">✔</span> <strong>{item}</strong></li>
                            ))}
                        </ul>
                        <Button href="/booking" variant="outline">Get Custom Quote</Button>
                    </div>
                </div>
            </Section>

            {/* Add-ons */}
            <Section background="navy">
                <div className="text-center text-white max-w-2xl mx-auto">
                    <h3 className="text-2xl font-serif mb-6">Additional Services</h3>
                    <p className="mb-8 text-gray-300">
                        Need something extra? We offer add-ons billed at <strong>$35/hour</strong> or by custom quote.
                        <br />
                        <span className="text-xs opacity-70">(Porch cleaning, Patio, Organization assistance, etc.)</span>
                    </p>
                    <Button href="/booking" variant="primary" className="bg-gold text-navy hover:bg-white">Inquire About Add-ons</Button>
                </div>
            </Section>
        </main>
    )
}
