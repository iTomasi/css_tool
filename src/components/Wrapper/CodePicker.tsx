import type { MouseEventHandler } from 'react'

interface Props {
  syntax: string
  setSyntax: (value: string | ((prev: string) => string)) => void
}

interface PickerButtonProps {
  image: string
  active: boolean
  value: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const syntaxs = [
  { value: 'css', image: '/css.png' },
  { value: 'tailwind', image: '/tailwindcss.png' }
]

function PickerButton ({
  image,
  active,
  value,
  onClick
}: PickerButtonProps) {
  return (
    <button
      className={`w-10 h-10 grid place-items-center rounded-md ${active ? 'bg-sky-600' : 'bg-gray-300 dark:bg-stone-700'}`}
      type="button"
      onClick={onClick}
    >
      <img
        className="w-7 h-7"
        src={image}
        alt={`css tool - ${value}`}
      />
    </button>
  )
}

export default function CodePicker ({
  syntax,
  setSyntax
}: Props) {
  return (
    <div className="flex gap-2">
      {
        syntaxs.map((theSyntax, index) => (
          <PickerButton
            key={index}
            active={syntax === theSyntax.value}
            onClick={() => {
              setSyntax(theSyntax.value)
            }}
            {...theSyntax}
          />
        ))
      }
    </div>
  )
}
