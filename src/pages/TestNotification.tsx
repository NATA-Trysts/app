import { NotificationStack } from '@/components/Notification'
import { useNotification } from '@/hooks/useNotification'

const TestNotification = () => {
  const { addNotification } = useNotification()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '400px' }}>
      <button
        style={{ margin: '20px', padding: '10px' }}
        onClick={() => addNotification('notification', 'Notification')}
      >
        Notification
      </button>
      <button style={{ margin: '20px', padding: '10px' }} onClick={() => addNotification('warning', 'Warning')}>
        Warning
      </button>
      <button style={{ margin: '20px', padding: '10px' }} onClick={() => addNotification('error', 'Error')}>
        Error
      </button>
      <NotificationStack />
    </div>
  )
}

export default TestNotification
