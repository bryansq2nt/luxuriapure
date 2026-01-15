'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

interface Service {
    id: string
    name: string
    duration: string
    price: string
    description: string
    includes: string[]
}

const services: Service[] = [
    {
        id: 'essential',
        name: 'Essential Clean',
        duration: '2 hours',
        price: 'Starting at $150',
        description: 'This service is ideal for smaller homes or apartments that are regularly maintained.',
        includes: [
            'Kitchen and bathroom cleaning',
            'Dusting and wiping surfaces',
            'Floor cleaning',
            'General tidying of living areas'
        ]
    },
    {
        id: 'signature',
        name: 'Signature Clean',
        duration: '3 hours',
        price: 'Starting at $210',
        description: 'Designed for medium-sized homes or clients looking for a more detailed clean.',
        includes: [
            'Everything in the Essential Clean, plus:',
            'Extra attention to high-touch areas',
            'More detailed kitchen and bathroom cleaning',
            'Expanded coverage for bedrooms and common areas'
        ]
    },
    {
        id: 'deep',
        name: 'Deep Clean',
        duration: '4 hours',
        price: 'Starting at $300',
        description: 'Best for larger homes or homes that require a more thorough, top-to-bottom cleaning.',
        includes: [
            'Detailed cleaning of kitchens and bathrooms',
            'Baseboards, fans, and hard-to-reach areas',
            'Interior appliance cleaning (as applicable)',
            'Extra time and attention throughout the home'
        ]
    }
]

const timeSlots = [
    '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM',
    '5:00 PM'
]

export default function AppointmentBooking() {
    const router = useRouter()
    const [selectedService, setSelectedService] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<string>('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    })
    const [showForm, setShowForm] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    // Generate calendar dates (next 60 days, starting from tomorrow)
    const generateCalendarDates = () => {
        const dates: Date[] = []
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        
        // Start from tomorrow (i = 1) - minimum date is always tomorrow
        for (let i = 1; i <= 60; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() + i)
            // Skip Sundays (day 0)
            if (date.getDay() !== 0) {
                dates.push(date)
            }
        }
        return dates
    }

    const calendarDates = generateCalendarDates()

    const handleServiceSelect = (serviceId: string) => {
        setSelectedService(serviceId)
        setSelectedDate(null)
        setSelectedTime('')
        setShowForm(false)
    }

    const handleChangeService = () => {
        setSelectedService('')
        setSelectedDate(null)
        setSelectedTime('')
        setShowForm(false)
    }

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date)
        setSelectedTime('')
        setShowForm(true)
    }

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time)
    }

    const handleBackToDates = () => {
        setSelectedDate(null)
        setSelectedTime('')
        setShowForm(false)
    }

    const handleBackToTimes = () => {
        setSelectedTime('')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const formatDateForDisplay = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone || !formData.address) {
            setSubmitStatus('error')
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service: selectedService,
                    date: selectedDate.toISOString(),
                    time: selectedTime,
                    ...formData
                }),
            })

            if (response.ok) {
                // Redirect to thank you page
                router.push('/booking/thank-you')
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting appointment:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const selectedServiceDetails = services.find(s => s.id === selectedService)

    return (
        <div className="max-w-6xl mx-auto">
            {/* Error Messages */}
            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded">
                    <p className="font-semibold">Error submitting appointment request.</p>
                    <p className="text-sm mt-1">Please check all required fields and try again.</p>
                </div>
            )}

            {/* Service Selection - Show only when no service selected */}
            {!selectedService && (
                <div>
                    <div className="bg-white p-6 border border-gray-200 rounded-sm mb-6">
                        <h3 className="text-2xl font-serif text-navy mb-4">Select a Service</h3>
                        <p className="text-gray-600 mb-6">
                            Fill out the form below and we'll follow up to review your home, confirm pricing, and schedule your service.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white p-6 border-2 border-gray-200 rounded-sm cursor-pointer transition-all hover:border-navy hover:shadow-md"
                                onClick={() => handleServiceSelect(service.id)}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="text-xl font-serif text-navy">{service.name}</h4>
                                    <div className="text-right">
                                        <div className="text-gold text-lg font-semibold">{service.price}</div>
                                        <div className="text-sm text-gray-500 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {service.duration}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    {service.includes.slice(0, 2).map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-gold mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Calendar and Form - Show when service is selected */}
            {selectedService && (
                <div>
                    {/* Service Header with Change Service Button */}
                    <div className="bg-white p-6 border border-gray-200 rounded-sm mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-serif text-navy mb-2">{selectedServiceDetails?.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="text-gold font-semibold">{selectedServiceDetails?.price}</span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {selectedServiceDetails?.duration}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleChangeService}
                                className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all uppercase tracking-wider text-xs font-semibold whitespace-nowrap"
                            >
                                Change Service
                            </button>
                        </div>
                    </div>

                    {/* Date Selection */}
                    {!selectedDate && (
                        <div className="bg-white p-6 border border-gray-200 rounded-sm">
                            <h3 className="text-2xl font-serif text-navy mb-4">Select a Date</h3>
                            <div className="flex flex-wrap gap-2 max-h-[500px] overflow-y-auto">
                                {calendarDates.map((date, idx) => {
                                    const day = date.getDate()
                                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
                                    // Since we start from tomorrow, we don't need to check for today
                                    
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleDateSelect(date)}
                                            className="p-4 rounded text-sm transition-all text-left min-w-[120px] bg-gray-50 text-gray-700 hover:bg-navy hover:text-white border border-gray-200"
                                        >
                                            <div className="font-semibold">{dayName}</div>
                                            <div className="text-lg font-bold">{day}</div>
                                            <div className="text-xs opacity-75">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* Time Selection */}
                    {selectedDate && !selectedTime && (
                        <div className="bg-white p-6 border border-gray-200 rounded-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-serif text-navy mb-2">Select a Time</h3>
                                    <p className="text-gray-600">{formatDateForDisplay(selectedDate)}</p>
                                </div>
                                <button
                                    onClick={handleBackToDates}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all uppercase tracking-wider text-xs font-semibold whitespace-nowrap"
                                >
                                    Back to Dates
                                </button>
                            </div>
                            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-sm">
                                <p className="text-sm text-navy font-semibold">
                                    Operating Hours: 8:00 AM - 5:00 PM
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[400px] overflow-y-auto">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelect(time)}
                                        className="p-3 bg-gray-50 text-gray-700 rounded hover:bg-navy hover:text-white transition-all text-sm"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact Form */}
                    {selectedDate && selectedTime && (
                        <form onSubmit={handleSubmit} className="bg-white p-6 border border-gray-200 rounded-sm space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-serif text-navy mb-2">Complete Your Request</h3>
                                    <div className="text-sm text-gray-600">
                                        <p><strong>Service:</strong> {selectedServiceDetails?.name}</p>
                                        <p><strong>Date:</strong> {formatDateForDisplay(selectedDate)}</p>
                                        <p><strong>Time:</strong> {selectedTime}</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleBackToTimes}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all uppercase tracking-wider text-xs font-semibold whitespace-nowrap"
                                >
                                    Back to Times
                                </button>
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    autoComplete="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-semibold text-navy mb-2">
                                    Full Address <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    required
                                    rows={3}
                                    placeholder="Street address, City, State, ZIP code"
                                    autoComplete="street-address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-y"
                                />
                                <p className="text-xs text-gray-500 mt-1">Please include street address, city, state, and ZIP code</p>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                                    Email (Optional)
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                                    Additional Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={handleBackToTimes}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all uppercase tracking-wider text-sm font-semibold"
                                >
                                    Back
                                </button>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="flex-1"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </div>
    )
}
