import styled from 'styled-components'

const Container = styled.div`
  width: 248px;
  height: 206px;
  background: #2d0634;
  border-radius: 12px;
`

const List = styled.div`
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
`

const Item = styled.div`
  width: 100%;
  height: 58px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
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

export const EmojiContent = () => {
  return (
    <Container>
      <List>
        {emojis.map((emoji, index) => (
          <Item key={emoji.id}>
            <ItemImage alt={emoji.name} loading="lazy" src={emoji.imgSrc} />
            <ItemName>{emoji.name}</ItemName>
            <ItemOrder>{index + 1}</ItemOrder>
          </Item>
        ))}
      </List>
    </Container>
  )
}
