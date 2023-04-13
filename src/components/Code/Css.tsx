interface Props {
  value: string
}

const colors = {
  key: '#0ea5e9',
  value: '#FFFFFF'
}

export default function Css ({
  value
}: Props) {
  const split = value.split(';')

  return (
    <div className="text-white">
      {
        split.map((property, index) => {
          const [key, value] = property
            .trim()
            .split(':')

          return (
            <div key={index}>
              <span style={{ color: colors.key }}>{key.trim()}</span>: {' '}
              <span style={{ color: colors.value }}>{value.trim()}</span>{index !== split.length - 1 && ';'}
            </div>
          )
        })
      }
    </div>
  )
}
