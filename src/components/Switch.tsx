import type { MouseEventHandler } from 'react'

interface Props {
  title: string
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Switch ({
  title,
  active,
  onClick
}: Props) {
  return (
    <div className="flex justify-between gap-4 items-center">
      <label className="font-medium">{title}</label>

      <button
        className={`h-8 rounded-full min-w-[4rem] max-w-[4rem] relative flex items-center ${active ? 'bg-green-500' : 'bg-gray-300 dark:bg-stone-700'}`}
        type="button"
        onClick={onClick}
      >
        <div className={`absolute h-6 w-6 rounded-full transition-all bg-white ${active ? 'left-[calc(100%-1.75rem)]' : 'left-1'}`}></div>
      </button>
    </div>
  )
}
