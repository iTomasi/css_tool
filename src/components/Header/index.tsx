import Navigation from './Navigation'

interface Props {
  className?: string
}

export default function Header ({
  className = ''
}: Props) {
  return (
    <header className={`bg-stone-900 h-16 px-8 flex items-center ${className}`}>
      <Navigation/>
    </header>
  )
}
