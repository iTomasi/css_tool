import { Modal } from 'components/modals'
import Code from 'components/Code'

interface Props {
  show: boolean
  setShow: (value: boolean | ((prev: boolean) => boolean)) => void
  value: string
}

export default function CodeModal ({
  show,
  setShow,
  value
}: Props) {
  return (
    <Modal
      show={show}
      setShow={setShow}
    >
      <Code
        value={value}
      />
    </Modal>
  )
}
