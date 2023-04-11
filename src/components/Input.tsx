import type { ChangeEventHandler } from 'react'

interface Props {
  className?: string
  placeholder: string
  labelTitle?: string
  name: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function Input ({
  className = '',
  placeholder,
  labelTitle,
  name,
  value,
  onChange
}: Props) {
  return (
    <label className={`block ${className}`}>
      {
        typeof labelTitle === 'string' && <span className="block mb-1 font-medium">{labelTitle}</span>
      }

      <input
        className="w-full h-10 px-3 focus:outline-none rounded-md bg-white dark:bg-stone-700 focus:ring-2 focus:ring-sky-500"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
