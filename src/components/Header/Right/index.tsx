import DarkMode from './DarkMode'
import Repository from './Repository'

export default function Right () {
  return (
    <div className="flex gap-8">
      <Repository/>
      <DarkMode/>
    </div>
  )
}
