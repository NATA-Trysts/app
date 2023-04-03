import { isEmpty } from 'lodash-es'

import { generateNumberCode } from '@/libs/utils'
import { useAnonymousStore } from '@/stores'

export const useAnonymous = () => {
  const anonymousStore = useAnonymousStore((state) => state)

  const generateAnonymous = () => {
    console.log('anonymous')

    if (isEmpty(anonymousStore.anonymous)) {
      const name = `Anonymous_${generateNumberCode()}`

      anonymousStore.setAnonymous({
        _id: `anonymous_${generateNumberCode(8)}`,
        username: name,
        handler: `${name}#${generateNumberCode()}`,
        avatar: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      })
    }
  }

  return { ...anonymousStore, generateAnonymous }
}
