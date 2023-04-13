interface Props {
  value: string
}

export default function Tailwind ({
  value
}: Props) {
  return (
    <div className="text-white">
      {value}
    </div>
  )
}
