import styled from 'styled-components'

import { Category } from './Category'
import { Content } from './Content'

const AvatarPanelContainer = styled.div`
  position: absolute;
  top: 96px;
  left: 120px;

  width: 300px;
  height: 580px;
  background-color: #191a1d;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 72px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'category content';
`

export const AvatarPanel = () => {
  return (
    <AvatarPanelContainer>
      <Category />
      <Content />
    </AvatarPanelContainer>
  )
}
