interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    background?: 'white' | 'off-white' | 'navy'
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
    const bgClasses = {
        'white': 'bg-white',
        'off-white': 'bg-off-white',
        'navy': 'bg-navy text-white'
    }

    return (
        <section id={id} className={`py-24 md:py-32 ${bgClasses[background]} ${className}`}>
            <div className="container mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    )
}
