import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function AreasPage() {
    const areas = [
        {
            city: "Alexandria, VA",
            neighborhoods: ["Old Town", "Del Ray", "Rosemont", "Potomac Yard", "Eisenhower Valley"]
        },
        {
            city: "Arlington, VA",
            neighborhoods: ["Clarendon", "Ballston", "Rosslyn", "Crystal City", "Pentagon City"]
        },
        {
            city: "Washington, DC",
            neighborhoods: ["Georgetown", "Dupont Circle", "Kalorama", "Cleveland Park", "Tenleytown", "Friendship Heights"]
        },
        {
            city: "Maryland",
            neighborhoods: ["Bethesda", "Chevy Chase"]
        }
    ]

    return (
        <main>
            <Section className="py-20 text-center">
                <h1 className="text-5xl font-serif text-navy mb-6">Areas Served</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We strictly limit our service area to ensure our teams are never rushed and always punctual.
                    If you live in one of the following neighborhoods, you are in our dedicated zone.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-6xl mx-auto">
                    {areas.map((area) => (
                        <div key={area.city} className="bg-off-white p-6 border-t-4 border-gold shadow-sm">
                            <h3 className="text-xl font-bold text-navy mb-4 font-serif">{area.city}</h3>
                            <ul className="space-y-2">
                                {area.neighborhoods.map(hood => (
                                    <li key={hood} className="text-gray-600 text-sm flex items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                                        {hood}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="navy">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-serif text-white">Live in our area?</h2>
                        <p className="text-gray-400">Let's get your home on our schedule.</p>
                    </div>
                    <Button href="/booking" variant="primary" className="bg-gold text-navy hover:bg-white">Check Availability</Button>
                </div>
            </Section>
        </main>
    )
}
