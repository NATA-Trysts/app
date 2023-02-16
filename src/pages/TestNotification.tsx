import { NotificationStack } from '@/components/Notification'
import { useAddNotification } from '@/hooks/useNotification'

const TestNotification = () => {
  const handleAddNotification = useAddNotification()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '400px' }}>
      <button
        style={{ margin: '20px', padding: '10px' }}
        onClick={() => handleAddNotification('notification', 'Notification')}
      >
        Notification
      </button>
      <button style={{ margin: '20px', padding: '10px' }} onClick={() => handleAddNotification('warning', 'Warning')}>
        Warning
      </button>
      <button style={{ margin: '20px', padding: '10px' }} onClick={() => handleAddNotification('error', 'Error')}>
        Error
      </button>
      <NotificationStack />
    </div>
  )
}

export default TestNotification
