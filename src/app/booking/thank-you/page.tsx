import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function ThankYouPage() {
    return (
        <main>
            <Section className="min-h-screen bg-off-white flex items-center">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-8">
                        <svg 
                            className="w-20 h-20 mx-auto text-gold mb-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-serif text-navy mb-6">
                        Thank You for Your Request!
                    </h1>
                    
                    <div className="bg-white p-8 border border-gray-200 rounded-sm mb-8">
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            We've received your appointment request and are excited to help make your home shine.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our team will review your request and follow up shortly to confirm your appointment details, discuss your specific needs, and finalize your service package.
                        </p>
                        <div className="border-t border-gray-200 pt-6">
                            <p className="text-sm text-gray-500 mb-2">What happens next?</p>
                            <ul className="text-left text-sm text-gray-600 space-y-2 max-w-md mx-auto">
                                <li className="flex items-start">
                                    <span className="text-gold mr-2 font-bold">1.</span>
                                    <span>We'll review your home and specific cleaning needs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-2 font-bold">2.</span>
                                    <span>Confirm pricing based on your home size and requirements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-2 font-bold">3.</span>
                                    <span>Schedule your service at your preferred date and time</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/" variant="primary">
                            Return to Home
                        </Button>
                        <Button href="/services" variant="outline">
                            View Our Services
                        </Button>
                    </div>
                </div>
            </Section>
        </main>
    )
}
