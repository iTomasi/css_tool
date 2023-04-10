import type { ReactNode } from 'react'

interface Props {
  classNamePreview?: string
  childrenPreview: ReactNode
  children: ReactNode
}

export default function Wrapper ({
  classNamePreview = '',
  childrenPreview,
  children
}: Props) {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="min-w-[18rem] max-w-[18rem] bg-stone-800 py-4 pl-8 px-8 max-h-[calc(100vh-4rem)] overflow-y-scroll">
        {children}
      </div>

      <div className={`w-full px-8 py-4 ${classNamePreview}`}>
        {childrenPreview}
      </div>
    </div>
  )
}
