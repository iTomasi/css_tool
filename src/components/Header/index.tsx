import Left from './Left'
import Right from './Right'

interface Props {
  className?: string
}

export default function Header ({
  className = ''
}: Props) {
  return (
    <header className={`bg-gray-100 border-b-2 border-gray-200 dark:bg-stone-900 dark:border-stone-800 h-16 px-8 flex justify-between items-center ${className}`}>
      <Left/>
      <Right/>
    </header>
  )
}
