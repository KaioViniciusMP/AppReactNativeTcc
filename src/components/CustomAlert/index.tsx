import { useEffect } from 'react'
import { Alert, Dimensions } from 'react-native'

interface CustomAlertProps {
  title: string
  message: string
  onLogout?: () => void
  onClose: () => void
}

export default function CustomAlert({ title, message, onLogout, onClose }: CustomAlertProps) {
  useEffect(() => {
    const { width } = Dimensions.get('window')
    
    const adjustedMessage = width < 360 ? message.substring(0, 100) + '...' : message

    const buttons = onLogout
      ? [{ text: 'CANCELAR', onPress: () => onClose() }, { text: 'SAIR', onPress: () => onLogout() }]
      : [{ text: 'OK', onPress: () => onClose() }]
    
    Alert.alert(title, adjustedMessage, buttons)
  }, [title, message, onLogout, onClose])

  return null
}
