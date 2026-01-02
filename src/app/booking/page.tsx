import Script from 'next/script'
import Section from '@/components/ui/Section'

export default function BookingPage() {
    return (
        <main>
            <Section className="min-h-screen bg-off-white">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-navy mb-4">Request an Estimate</h1>
                    <p className="text-gray-600">
                        Please select a time below to schedule your consultation. We will discuss your specific needs and finalize your service package.
                    </p>
                </div>

                <div className="bg-white p-4 shadow-sm border border-gray-100 rounded-sm">
                    {/* TidyCal Embed Target */}
                    <div className="tidycal-embed" data-path="luxuriapure"></div>
                </div>

                {/* TidyCal Script */}
                <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="lazyOnload" />
            </Section>
        </main>
    )
}
