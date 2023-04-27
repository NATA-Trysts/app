import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ReactComponent as RandomIcon } from '@/assets/icons/random.svg'
import { useEditCharacterStore } from '@/stores'

import { dummyData } from './AvatarPanel/dummyData'

const RandomContainer = styled(motion.button)`
  width: 36px;
  height: 36px;
  background: var(--color-5);
  cursor: pointer;
  border-radius: 50%;

  position: absolute;
  bottom: 127px;
  left: 49%;
  pointer-events: auto;
  z-index: 0;

  border: none;

  :hover {
    background: var(--color-4);
  }
`

type RandomAvatarProps = {
  isEdit?: boolean
}

export const RandomAvatar = ({ isEdit = false }: RandomAvatarProps) => {
  const [setCategorySelectedFromApi] = useEditCharacterStore((state) => [state.setCategorySelectedFromApi])

  const handleRandom = () => {
    const randomAvatarMap = new Map([
      ['skin', []],
      ['hair', []],
      ['upper', []],
      ['lower', []],
      ['shoe', []],
      ['accessory', []],
      ['tattoo', []],
    ])

    Object.entries(dummyData).forEach((element) => {
      const category = element[0]
      const listSubCategory = Object.values(element[1])

      const lists = Object.entries(listSubCategory[0])

      const result: any = []

      lists.forEach((ele: any) => {
        const id = ele[0]
        let itemId = null
        const subList = Object.values(ele[1].list)

        subList.forEach((ele: any) => {
          const result: any = []

          result.push(ele.values)

          const randomIndex = Math.floor(Math.random() * result[0].length)

          itemId = result[0][randomIndex].id
        })

        result.push({ id, itemId })
      })

      randomAvatarMap.set(category, result)
    })

    setCategorySelectedFromApi(randomAvatarMap)
  }

  return (
    <RandomContainer
      animate={{
        y: isEdit ? 0 : 50,
        opacity: isEdit ? 1 : 0,
      }}
      id="random-avatar"
      onClick={handleRandom}
    >
      <RandomIcon />
    </RandomContainer>
  )
}
