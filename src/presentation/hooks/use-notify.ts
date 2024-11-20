import { toast } from "react-toastify"

type NotifyProps = {
  show: (message: string, type?: 'success' | 'error') => void
}

const useNotify  = (): NotifyProps => {
  const show = (message: string, type?: 'success' | 'error'): void => {
    toast(message, { type: type || 'info', theme: 'colored' })
  }

  return { show }
}

export default useNotify
