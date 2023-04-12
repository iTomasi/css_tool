import { Modal } from 'components/modals'

interface Props {
  show: boolean
  setShow: (value: boolean | ((prev: boolean) => boolean)) => void
}

export default function CodeModal ({
  show,
  setShow
}: Props) {
  return (
    <Modal
      show={show}
      setShow={setShow}
    >
      Hola
    </Modal>
  )
}
