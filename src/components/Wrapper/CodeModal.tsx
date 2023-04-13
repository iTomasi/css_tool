import { useState } from 'react'
import { Modal } from 'components/modals'
import Code from 'components/Code'
import CodePicker from './CodePicker'

interface Props {
  show: boolean
  setShow: (value: boolean | ((prev: boolean) => boolean)) => void
  value: { css: string, tailwind: string }
}

export default function CodeModal ({
  show,
  setShow,
  value
}: Props) {
  const [syntax, setSyntax] = useState<string>('css')

  return (
    <Modal
      className="flex flex-col gap-4"
      show={show}
      setShow={setShow}
    >
      <CodePicker
        syntax={syntax}
        setSyntax={setSyntax}
      />

      <Code
        syntax={syntax as 'css' | 'tailwind'}
        value={value[syntax as 'css' | 'tailwind']}
      />
    </Modal>
  )
}
