import Left from './Left'
import Right from './Right'

interface Props {
  className?: string
}

export default function Header ({
  className = ''
}: Props) {
  return (
    <header className={`bg-stone-900 h-16 px-8 flex justify-between items-center ${className}`}>
      <Left/>
      <Right/>
    </header>
  )
}
