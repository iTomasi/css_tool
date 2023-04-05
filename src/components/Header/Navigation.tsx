import Link from 'next/link'

interface INavigation {
  name: string
  href: string
}

const navigations: INavigation[] = [
  { name: 'Box Shadow', href: '/' }
]

export default function Navigation () {
  return (
    <nav>
      <ul className="flex gap-4">
        {
          navigations.map((navigation, index) => (
            <li key={index}>
              <Link className="hover:underline text-lg" href={navigation.href}>
                {navigation.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
