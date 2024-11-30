import { ReactNode } from 'react'
import clsx from 'clsx'

interface BaseButtonProps {
  type?: 'button' | 'submit'
  text: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  iconLeft?: ReactNode | null
  iconRight?: ReactNode | null
  onClick?: () => void
}

export default function BaseButton({
  type = 'button',
  text,
  variant = 'primary',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick = () => {},
}: BaseButtonProps) {
  const buttonClasses = clsx(
    'px-5 py-[18px] rounded-[10px] font-body text-action-md font-medium w-full transition-colors duration-100 ease-in-out flex items-center',
    variant === 'primary'
      ? disabled
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
        : 'bg-orange-base text-shape-white hover:bg-orange-dark'
      : disabled
      ? 'border-gray-100 text-gray-400 cursor-not-allowed'
      : 'border-[1px] border-orange-base text-orange-base hover:border-orange-dark hover:text-orange-dark',
    {
      'justify-center': !iconLeft && !iconRight,
      'justify-between gap-[10px]': iconLeft || iconRight,
    },
  )

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {iconLeft}
      {text}
      {iconRight}
    </button>
  )
}
