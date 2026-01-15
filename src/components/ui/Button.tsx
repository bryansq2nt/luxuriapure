import Link from 'next/link'

interface ButtonProps {
    href?: string
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    className?: string
    type?: 'button' | 'submit'
    disabled?: boolean
    onClick?: () => void
}

export default function Button({ href, children, variant = 'primary', className = '', type = 'button', disabled = false, onClick }: ButtonProps) {
    const baseStyles = "inline-block px-8 py-3 uppercase tracking-wider text-sm font-semibold transition-all duration-300"

    const variants = {
        primary: "bg-navy text-white hover:bg-gold hover:text-navy border border-transparent",
        secondary: "bg-gold text-navy hover:bg-navy hover:text-white border border-transparent",
        outline: "bg-transparent border border-navy text-navy hover:bg-navy hover:text-white"
    }

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""

    const combinedClasses = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} className={combinedClasses} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}
