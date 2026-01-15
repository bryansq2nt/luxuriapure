import Section from '@/components/ui/Section'
import AppointmentBooking from '@/components/booking/AppointmentBooking'

export default function BookingPage() {
    return (
        <main>
            <Section className="min-h-screen bg-off-white">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-navy mb-4">Request an Estimate</h1>
                    <p className="text-gray-600">
                        Please select a service and time below to schedule your consultation. We will discuss your specific needs and finalize your service package.
                    </p>
                </div>

                <AppointmentBooking />
            </Section>
        </main>
    )
}
