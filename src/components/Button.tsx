import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:shadow-[0_30px_70px_-45px_hsl(var(--accent)/0.5)]',
  secondary: 'bg-bg-soft text-text border border-border hover:border-accent/40',
  ghost: 'bg-transparent text-text hover:bg-bg-soft',
}

const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
      variantClasses[variant]
    } ${className ?? ''}`}
    {...props}
  />
)

export default Button
