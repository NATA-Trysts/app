import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as PasswordCloseIcon } from '@/assets/icons/preview-close.svg'
import { ReactComponent as PasswordOpenIcon } from '@/assets/icons/preview-open.svg'
import { Text } from '@/layouts/common'
import { useBuilderStore } from '@/stores'

import { BuilderTextInput } from './BuilderTextInput'

const ItemTitle = styled(Text)`
  color: #727272;
`

const PasswordItem = styled.div<{ isProtected: boolean }>`
  display: ${({ isProtected }) => (isProtected ? 'flex' : 'none')};
  width: 100%;
  margin: 8px 0;
  justify-content: space-between;
  align-items: center;
`

const PasswordInputWrapper = styled.div`
  position: relative;

  input {
    padding-right: 24px;
  }
`

const PasswordIconWrapper = styled.div`
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
    cursor: pointer;
  }
`

export const PasswordField = () => {
  const [spaceInformation, setSpaceInformation] = useBuilderStore((state) => [
    state.spaceInformation,
    state.setSpaceInformation,
  ])
  const [passwordShown, setPasswordShown] = useState<boolean>(false)

  const handleChangePassword = (value: string) => {
    setSpaceInformation({ ...spaceInformation, password: value })
  }

  return (
    <PasswordItem isProtected={spaceInformation.isProtected}>
      <ItemTitle size="small" weight="lighter">
        Password
      </ItemTitle>
      <PasswordInputWrapper>
        <BuilderTextInput
          setValue={handleChangePassword}
          type={passwordShown ? 'text' : 'password'}
          value={spaceInformation.password}
        />
        <PasswordIconWrapper onClick={() => setPasswordShown((prev) => !prev)}>
          {passwordShown ? <PasswordOpenIcon /> : <PasswordCloseIcon />}
        </PasswordIconWrapper>
      </PasswordInputWrapper>
    </PasswordItem>
  )
}
