import { useRef } from 'react'
import styled from 'styled-components'

import { customColorHueMapping } from '@/components/Commons'
import { useAppStore } from '@/stores'

const Container = styled.div`
  width: 248px;
  height: 206px;
  background: #2d0634;
  border-radius: 12px;
`

const List = styled.div<{ borderColor: string }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(3, 72px);
  grid-gap: 8px;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  > div {
    opacity: 1;
  }

  &:hover > div:not(:hover) {
    opacity: 0.85;
  }

  > div:hover {
    opacity: 1;
    border: 2px solid ${(props) => props.borderColor};
  }
`

const Item = styled.div`
  width: 100%;
  height: 58px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid transparent;
  transition: opacity, border 0.2s ease;
`

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ItemName = styled.div`
  font-weight: 600;
  font-size: 8px;
  color: #ffffff;
  background: #2d0634;
  border-radius: 4px;
  padding: 2px 4px;
  text-transform: capitalize;

  position: absolute;
  bottom: 2px;
  left: 2px;
`

const ItemOrder = styled.div`
  width: 14px;
  height: 14px;
  font-weight: 600;
  font-size: 8px;
  background: #2d0634;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 2px;
  right: 2px;
`

const imgSrc =
  'https://s3-alpha-sig.figma.com/img/5d50/deab/a5ace97d54656828bccc536e130f3836?Expires=1680480000&Signature=h6glbbIQzSy5TUQYfbw2FdFa4C2uezx~s3PRYWxx294IeJd9BqCMi~2LPDycy4pY~IkortPe24Myz2g9rD5yBWs0hRjmG-5ZTxmO9xYgkl~3sv9H4~Uyxmf94zcPwv-4st4FZsmLUMN4lDk958UnECSt1gaLq9UrtZIVrdgwcjhRlzvoLzJXp3HwF1D~2sDg86niwFxDtH2WYHubhsAEFBSoUz3x5SuXcvtL6cv2MOpEpGAtyekQvzQeQJwJ8Sc~DZ5myR-7IoLPwogVVlOfsu9RfcFi6ZxnGOLtA72KWwKS0R6gd7pQiGbYaQsd-KqAFrJXh6vj~ZQajzcJZCnvfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

const emojis = [
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
  {
    id: Math.random(),
    name: 'dance',
    imgSrc,
  },
]

type EmojiContentProps = {
  setIsPopoverOpen: (value: boolean) => void
}

export const EmojiContent = ({ setIsPopoverOpen }: EmojiContentProps) => {
  const color = useAppStore((state) => state.customColor)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleItemClick = (index: number) => {
    if (index) {
      setIsPopoverOpen(false)
    }
  }

  return (
    <Container ref={modalRef}>
      <List borderColor={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}>
        {emojis.map((emoji, index) => (
          <Item key={emoji.id} onClick={() => handleItemClick(index)}>
            <ItemImage alt={emoji.name} loading="lazy" src={emoji.imgSrc} />
            <ItemName>{emoji.name}</ItemName>
            <ItemOrder>{index + 1}</ItemOrder>
          </Item>
        ))}
      </List>
    </Container>
  )
}
