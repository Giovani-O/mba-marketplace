'use client'

import {
  Mail02Icon,
  CallIcon,
  UserIcon,
  Search01Icon,
  LockPasswordIcon,
} from 'hugeicons-react'
import { useState } from 'react'

interface BaseInputProps {
  type?: 'text' | 'number' | 'password'
  label: string
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
  disabled?: boolean
  icon?: 'mail' | 'phone' | 'user' | 'search' | 'password' | 'none'
}

export default function BaseInput({
  type = 'text',
  placeholder,
  label,
  onChange,
  value,
  disabled = false,
  icon = 'none',
}: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  function renderIcon() {
    const iconColor = isFocused ? 'text-orange-base' : 'text-gray-200'
    const iconClasses = `${iconColor} transition-colors duration-300 ease-in-out`

    switch (icon) {
      case 'mail':
        return <Mail02Icon className={iconClasses} />
      case 'phone':
        return <CallIcon className={iconClasses} />
      case 'user':
        return <UserIcon className={iconClasses} />
      case 'search':
        return <Search01Icon className={iconClasses} />
      case 'password':
        return <LockPasswordIcon className={iconClasses} />
      default:
        return null
    }
  }

  return (
    <span className="border-b-[1px] border-gray-100 flex flex-col  ">
      <label
        className={`${
          isFocused ? 'text-orange-base' : 'text-gray-00'
        } text-sm font-medium transition-colors duration-300 ease-in-out`}
      >
        {label}
      </label>
      <span className=" flex gap-[10px] px-1 py-[14px]">
        {renderIcon()}
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          className="w-full outline-none font-body text-body-md font-regular"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </span>
    </span>
  )
}
