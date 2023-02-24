import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

const MailDirectContainer = styled(Link)`
  background-color: #2f0c45;
  display: flex;
  margin: 0 8px;
  padding: 12px 20px;
  border-radius: 12px;
  color: white;
  text-decoration: none;

  svg {
    display: block;
    width: 16px;
    height: 16px;
  }

  span {
    margin-left: 8px;
  }
`

type MailDirectProps = {
  app: string
  icon: ReactNode
  title: string
}

export const MailDirect = ({ icon, title }: MailDirectProps) => {
  return (
    <MailDirectContainer to="">
      {icon}
      <Text size="medium" weight="normal">
        {title}
      </Text>
    </MailDirectContainer>
  )
}
