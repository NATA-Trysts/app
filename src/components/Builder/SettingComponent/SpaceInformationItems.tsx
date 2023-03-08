import * as Switch from '@radix-ui/react-switch'
import styled from 'styled-components'

import { Text } from '@/layouts/common'
import { useBuilderStore } from '@/stores'

import { BuilderTextInput } from './BuilderTextInput'
import { MusicUpload } from './MusicUpload'
import { PasswordField } from './PasswordField'
import { ThumbnailUpload } from './ThumbnailUpload'

const Container = styled.div`
  width: 100%;
`

const Item = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemTitle = styled(Text)`
  color: #727272;
`

const SwitchRoot = styled(Switch.Root)`
  width: 21px;
  height: 13px;
  background-color: #575960;
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;

  &[data-state='checked'] {
    border: none;
    background-color: #27763e;
  }
`

const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 9px;
  height: 9px;
  background-color: #d8d8d8;
  border-radius: 50%;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(10px);
    background-color: #37c661;
  }
`

export const SpaceInformationItems = () => {
  const [spaceInformation, setSpaceInformation] = useBuilderStore((state) => [
    state.spaceInformation,
    state.setSpaceInformation,
  ])

  const handleChangeName = (value: string) => {
    setSpaceInformation({ ...spaceInformation, name: value })
  }

  const handleChangeIsProtected = (checked: boolean) => {
    setSpaceInformation({ ...spaceInformation, isProtected: checked })
  }

  return (
    <Container>
      <Item>
        <ItemTitle size="small" weight="lighter">
          Name
        </ItemTitle>
        <BuilderTextInput setValue={handleChangeName} type="text" value={spaceInformation.name} />
      </Item>
      <Item>
        <ItemTitle size="small" weight="lighter">
          Space protection
        </ItemTitle>
        <SwitchRoot
          checked={spaceInformation.isProtected}
          onCheckedChange={(checked: boolean) => handleChangeIsProtected(checked)}
        >
          <SwitchThumb />
        </SwitchRoot>
      </Item>
      <PasswordField />
      <ThumbnailUpload />
      <MusicUpload />
    </Container>
  )
}
