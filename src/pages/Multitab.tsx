import { useState } from 'react'

import { MultitabDetect } from '@/components/MultitabDetect'

const Warning = () => {
  return (
    <div>
      <h1>Multitab detect</h1>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  )
}

const Multitab = () => {
  const [counter, setCounter] = useState(0)

  return (
    <MultitabDetect fallback={<Warning />}>
      <div>
        <h1>New tab</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase {counter}</button>
      </div>
    </MultitabDetect>
  )
}

export default Multitab
