import { useState } from 'react'

import { MultitabDetect, MultiTabWarning } from '@/components/MultitabDetect'
import { CustomableContainer } from '@/layouts/common'
import { useAppStore } from '@/stores'

const Warning = () => {
  return <MultiTabWarning></MultiTabWarning>
}

const Multitab = () => {
  const [counter, setCounter] = useState(0)
  const customColor = useAppStore((state) => state.customColor)

  return (
    <CustomableContainer customColor={customColor}>
      <MultitabDetect fallback={<Warning />}>
        <div>
          <h1>New tab</h1>
          <button onClick={() => setCounter(counter + 1)}>Increase {counter}</button>
        </div>
      </MultitabDetect>
    </CustomableContainer>
  )
}

export default Multitab
