import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

import { CreateFormProps } from '.'

export const CreateSpace = ({ onValidate, doValidate, name, value }: CreateFormProps) => {
  const { register, trigger } = useFormContext()

  useEffect(() => {
    trigger(name).then((valid) => onValidate?.(valid))
  }, [])

  const handleOnchange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onValidate?.(doValidate?.(evt.target.value) ?? true)
  }

  return (
    <CreateSpaceContainer>
      <CreateSpaceLabel>
        <Text size="small" weight="normal">
          SpaceName
        </Text>
        <CreateSpaceInput
          {...register(name, { onChange: handleOnchange, value: value, validate: doValidate })}
          type="text"
        />
      </CreateSpaceLabel>
    </CreateSpaceContainer>
  )
}

const CreateSpaceContainer = styled.div`
  & ${Text} {
    padding: 8px;
    display: block;
    color: #ffffff;
  }
`

const CreateSpaceInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: hsla(262, 26%, 22%, 1);
  padding: 10px 16px;
  border-radius: 12px;
  border-width: 0px;
  color: #ffffff;

  font-weight: 500;
  font-size: 16px;

  &:focus,
  &:focus-visible {
    outline-width: 0px;
  }
`
const CreateSpaceLabel = styled.label``
