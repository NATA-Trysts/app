import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { Slider } from '@/components/Commons/Slider'
import { Switch } from '@/components/Commons/Switch'
import { Text } from '@/layouts/common'

import { CanNextCreateContentProps, CreateField, CreateFormContainer, CreateHeader, CreateInput, CreateLabel } from '..'

export type SpaceInfoProps = CanNextCreateContentProps

const sliderMarks = {
  2: 2,
  10: 10,
  20: 20,
  30: 30,
  50: 50,
}

export const SpaceInfo = ({ onCanNext = () => {} }: SpaceInfoProps) => {
  const [enablePassword, setPassword] = useState(false)

  const { register, getValues, setValue, formState, getFieldState } = useFormContext()

  const nameField = register('space-name', { required: true })
  const passwordField = register('space-password', { required: true, disabled: !enablePassword })
  const nameState = getFieldState('space-name', formState)
  const passwordState = getFieldState('space-password', formState)

  useEffect(() => {
    onCanNext(
      nameState.isDirty && !nameState.invalid && (!enablePassword || (passwordState.isDirty && !passwordState.invalid)),
    )
  }, [nameState, passwordState, onCanNext, enablePassword])

  register('max-member', { value: 5 })

  return (
    <CreateFormContainer>
      <CreateHeader>
        <Text size="large" weight="normal">
          Your space information
        </Text>
      </CreateHeader>

      <CreateField>
        <CreateLabel htmlFor="space-name">
          <SpaceInfoText size="medium" weight="normal">
            SpaceName
          </SpaceInfoText>
        </CreateLabel>
        <CreateInput id="space-name" {...nameField} placeholder="Space Name" type="text" />
      </CreateField>

      <CreateField>
        <PasswordLabel htmlFor="space-password">
          <SpaceInfoText size="medium" weight="normal">
            Password protect
          </SpaceInfoText>
          <PasswordChipContainer>
            <DisableChip disabled={!enablePassword}>Disable</DisableChip>
            <EnableChip disabled={enablePassword}>Enable</EnableChip>
          </PasswordChipContainer>
          <PasswordSwitch checked={enablePassword} onCheckedChange={(checked) => setPassword(checked)}></PasswordSwitch>
        </PasswordLabel>

        <PasswordInputContainer disabled={enablePassword}>
          <CreateInput id="space-password" {...passwordField} placeholder="Space Password" type="password" />
        </PasswordInputContainer>
      </CreateField>

      <CreateField>
        <CreateLabel htmlFor="space-member">
          <SpaceInfoText size="medium" weight="normal">
            Maximum Member
          </SpaceInfoText>
        </CreateLabel>
        <MemberSlider
          defaultValue={getValues('max-member')}
          marks={sliderMarks}
          max={50}
          min={2}
          onChangeEnd={(value) => setValue('max-member', value)}
        ></MemberSlider>
      </CreateField>
    </CreateFormContainer>
  )
}

const SpaceInfoText = styled(Text)`
  color: hsla(261, 23%, 78%, 1) !important;
`

const PasswordChipContainer = styled.div`
  position: relative;
`
const PasswordChip = styled.span<{ disabled: boolean }>`
  height: 20px;
  padding: 3px 8px;
  border-radius: 50px;
  ${(props) => (props.disabled ? 'opacity: 1' : 'opacity: 0')};

  display: inline-block;
  position: absolute;
  overflow: hidden;

  font-weight: 500;
  font-size: 10px;
  line-height: 14px;

  vertical-align: middle;

  transition: width 0.5s ease, opacity 0.5s ease, border-color 0.5s ease-in, color 0.5s ease-in;
`

const EnableChip = styled(PasswordChip)`
  width: ${(props) => (props.disabled ? '48px' : '52px')};
  border: 1px solid ${(props) => (props.disabled ? 'hsla(137, 72%, 55%, 1)' : 'hsla(261, 22%, 65%, 1)')};
  color: ${(props) => (props.disabled ? 'hsla(137, 72%, 55%, 1)' : 'hsla(261, 22%, 65%, 1)')};
`

const DisableChip = styled(PasswordChip)`
  width: ${(props) => (props.disabled ? '52px' : '48px')};
  border: 1px solid ${(props) => (props.disabled ? 'hsla(261, 22%, 65%, 1)' : 'hsla(137, 72%, 55%, 1)')};
  color: ${(props) => (props.disabled ? 'hsla(261, 22%, 65%, 1)' : 'hsla(137, 72%, 55%, 1)')};
`

const PasswordLabel = styled(CreateLabel)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const PasswordInputContainer = styled.div<{ disabled: boolean }>`
  overflow: hidden;
  transition: max-height 1s ease, opacity 1s ease;
  ${(props) => (props.disabled ? 'max-height: 44px; opacity: 1' : 'max-height: 0px; opacity: 0;')}
`

const PasswordSwitch = styled(Switch)`
  margin-left: auto;
`

const MemberSlider = styled(Slider)`
  margin-left: 4px;
  margin-right: 4px;
`
