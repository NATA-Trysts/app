import React, { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

import { Text } from '@/components/Commons'

const Title = styled(Text)`
  color: #696969;
`

const Container = styled.button<{
  hoverBackground?: string
  customHoverBackgroundColor?: string
}>`
  padding: 8px 12px;
  border-radius: 8px;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  background: #212225;

  &:hover {
    background: ${(props) =>
      props.customHoverBackgroundColor ? props.customHoverBackgroundColor : props.hoverBackground};

    ${Title} {
      color: #fff;
    }
  }
`

type OptionProps = {
  title: string
  hoverBackground?: string
  customHoverBackgroundColor?: string
} & ComponentPropsWithoutRef<'button'>

export const Option = (props: OptionProps) => {
  return (
    <Container {...props}>
      <Title color={props.color} size="medium" weight="normal">
        {props.title}
      </Title>
    </Container>
  )
}
