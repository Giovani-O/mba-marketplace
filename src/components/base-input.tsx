'use client'

import {
  Mail02Icon,
  CallIcon,
  UserIcon,
  Search01Icon,
  LockPasswordIcon,
  AlertCircleIcon,
  ViewIcon,
  ViewOffIcon,
} from 'hugeicons-react'
import { useState } from 'react'

interface BaseInputProps {
  type?: 'text' | 'number' | 'password'
  label: string
  placeholder: string
  icon?: 'mail' | 'phone' | 'user' | 'search' | 'password' | 'none'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
  disabled?: boolean
  error?: string
  required?: boolean
}

export default function BaseInput({
  type = 'text',
  placeholder,
  label,
  icon = 'none',
  onChange,
  value,
  disabled = false,
  error = '',
  required = false,
}: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function renderIcon() {
    const iconColor = isFocused ? 'text-orange-base' : 'text-gray-200'
    const iconClasses = `${iconColor} transition-colors duration-100 ease-in-out`

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

  function viewPasswordIcon() {
    const iconClasses =
      'text-gray-200 transition-colors duration-100 ease-in-out'

    switch (isPasswordVisible) {
      case true:
        return <ViewOffIcon className={iconClasses} />
      case false:
        return <ViewIcon className={iconClasses} />
      default:
        return null
    }
  }

  function handlePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  return (
    <div>
      <span className="border-b-[1px] border-gray-100 flex flex-col">
        <label
          className={`${
            isFocused ? 'text-orange-base' : 'text-gray-100'
          } text-sm font-medium transition-colors duration-100 ease-in-out`}
        >
          {label}
        </label>
        <span className=" flex gap-[10px] px-1 py-[14px]">
          {renderIcon()}
          <input
            id="base-input"
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disabled}
            className="w-full outline-none font-body text-body-md font-regular"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={!!error}
            required={required}
          />
          {type === 'password' ? (
            <div className="cursor-pointer" onClick={handlePasswordVisibility}>
              {viewPasswordIcon()}
            </div>
          ) : (
            <></>
          )}
        </span>
      </span>
      {error !== '' ? (
        <span className="font-body text-body-xs font-regular text-semantic-danger flex gap-1 mt-2 h-[15px]">
          <AlertCircleIcon width={14} height={14} />
          {error}
        </span>
      ) : (
        <span className="flex gap-1 mt-2 h-[15px]" />
      )}
    </div>
  )
}
