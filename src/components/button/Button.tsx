import type { ReactNode, MouseEventHandler } from 'react'

interface Props {
  className?: string
  type?: 'button' | 'submit'
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button ({
  className = '',
  type = 'submit',
  children,
  onClick
}: Props) {
  if (type !== 'button' && onClick !== undefined) throw new Error(`<Button type="${type}" /> can not use onClick prop, only for "button" type`)

  return (
    <button
      className={`min-h-[2.5rem] px-4 bg-sky-500 rounded-md hover:bg-sky-600 text-white ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
