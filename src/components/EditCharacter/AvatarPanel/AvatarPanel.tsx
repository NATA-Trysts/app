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
  overflow: hidden;
`

export const AvatarPanel = () => {
  return (
    <AvatarPanelContainer>
      <Category />
      <Content />
    </AvatarPanelContainer>
  )
}
