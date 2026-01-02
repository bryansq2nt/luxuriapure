import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function AboutPage() {
    return (
        <main>
            <Section className="pt-24 pb-12 text-center">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-[1.1]">
                        About{" "}
                        <span className="inline-flex items-baseline gap-[2px]">
                            <span className="text-navy">Luxuria</span>
                            <span className="text-gold"> Pure</span>
                        </span>{" "}
                        Cleaning
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
                        Many cleaning services vary from visit to visit.
                        <br className="hidden sm:block" />
                        <strong className="font-semibold text-navy">
                            We’re built for consistent, reliable results.
                        </strong>
                    </p>
                </div>
            </Section>




            <Section background="off-white">
                <div className="max-w-4xl mx-auto grid gap-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="text-6xl text-gold font-serif opacity-50">01</div>
                        <div>
                            <h3 className="text-2xl font-serif text-navy mb-3">Consistent Standards</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every visit follows a clear checklist and a repeatable process.
                                When possible, we send the same crew so your home is cleaned the way you expect—each time.
                                If something is missed, we’ll come back and make it right.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="text-6xl text-gold font-serif opacity-50">02</div>
                        <div>
                            <h3 className="text-2xl font-serif text-navy mb-3">A Structured Cleaning Company</h3>
                            <p className="text-gray-600 leading-relaxed">
                                LuxuriaPure operates as a residential cleaning company with clear processes and defined standards. Our work is organized, scheduled, and handled professionally from start to finish.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="text-6xl text-gold font-serif opacity-50">03</div>
                        <div>
                            <h3 className="text-2xl font-serif text-navy mb-3">Respect for Your Home</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We work carefully in occupied homes and understand privacy matters.
                                Our team is professional, efficient, and mindful of your space—every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section background="navy" className="text-center">
                <h2 className="text-3xl font-serif text-white mb-6">A Cleaning Service You Can Count On</h2>
                <Button href="/booking" variant="primary" className="bg-gold text-navy hover:bg-white hover:text-navy">
                    Schedule Your First Clean
                </Button>
            </Section>
        </main>
    )
}
