import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { Text } from '@/components/Commons'
import { Slider } from '@/components/Commons/Slider'
import { Switch } from '@/components/Commons/Switch'
import { isOnlyWhitespace } from '@/libs/utils'

import { CanNextCreateContentProps, CreateField, CreateForm, CreateFormHeader, CreateInput, CreateLabel } from '..'

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

  const { register, getValues, setValue, formState, getFieldState, setFocus } = useFormContext()

  const nameField = register('name', {
    required: true,
    validate: { whitespace: isOnlyWhitespace },
    minLength: 2,
  })
  const passwordField = register('password', {
    required: true,
    disabled: !enablePassword,
    validate: { whitespace: isOnlyWhitespace },
  })
  const nameState = getFieldState('name', formState)
  const passwordState = getFieldState('password', formState)

  useEffect(() => {
    onCanNext(
      nameState.isDirty && !nameState.invalid && (!enablePassword || (passwordState.isDirty && !passwordState.invalid)),
    )
  }, [nameState, passwordState, onCanNext, enablePassword])

  register('max-member', { value: 10 })

  useEffect(() => {
    setFocus('name')
  }, [setFocus])

  useEffect(() => {
    if (enablePassword) setFocus('password')
  }, [enablePassword, setFocus])

  return (
    <CreateForm>
      <CreateFormHeader>
        <Text size="large" weight="normal">
          Your space information
        </Text>
      </CreateFormHeader>

      <CreateField>
        <CreateLabel htmlFor="name">
          <SpaceInfoText size="medium" weight="normal">
            SpaceName
          </SpaceInfoText>
        </CreateLabel>
        <CreateInput id="name" {...nameField} placeholder="Space Name" type="text" />
      </CreateField>

      <CreateField>
        <PasswordLabel htmlFor="password">
          <SpaceInfoText size="medium" weight="normal">
            Password protect
          </SpaceInfoText>
          <PasswordChipContainer>
            <DisableChip disabled={!enablePassword}>Disable</DisableChip>
            <EnableChip disabled={enablePassword}>Enable</EnableChip>
          </PasswordChipContainer>
          <PasswordSwitch
            checked={enablePassword}
            onCheckedChange={(checked) => {
              setPassword(checked)
            }}
          ></PasswordSwitch>
        </PasswordLabel>

        <PasswordInputContainer disabled={enablePassword}>
          <CreateInput id="password" {...passwordField} placeholder="Space Password" type="password" />
        </PasswordInputContainer>
      </CreateField>

      <CreateField>
        <CreateLabel htmlFor="space-member">
          <SpaceInfoText size="medium" weight="normal">
            Maximum Member
          </SpaceInfoText>
        </CreateLabel>
        <Slider
          defaultValue={[getValues('max-member')]}
          marks={sliderMarks}
          max={50}
          min={2}
          onValueCommit={(value) => {
            setValue('max-member', value)
          }}
        ></Slider>
      </CreateField>
    </CreateForm>
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
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const PasswordInputContainer = styled.div<{ disabled: boolean }>`
  overflow: hidden;
  transition: max-height 0.25s ease, opacity 0.25s ease;
  ${(props) => (props.disabled ? 'max-height: 44px; opacity: 1' : 'max-height: 0px; opacity: 0;')}
`

const PasswordSwitch = styled(Switch)`
  margin-left: auto;
`
