import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Text } from '@/layouts/common'

const opacityViaStatus = new Map([
  ['hovered', 1],
  ['notHovered', 0.5],
  ['normal', 1],
])

const MailDirectContainer = styled(Link)<{ status: 'hovered' | 'notHovered' | 'normal' }>`
  background-color: #2f0c45;
  display: flex;
  margin: 0 8px;
  padding: 12px 20px;
  border-radius: 12px;
  color: white;
  text-decoration: none;
  box-shadow: none;
  opacity: ${({ status }) => opacityViaStatus.get(status)};
  transition: box-shadow, opacity 0.3s ease;

  svg {
    display: block;
    width: 16px;
    height: 16px;
  }

  span {
    margin-left: 8px;
  }

  :hover {
    box-shadow: 0px 0px 89px rgba(159, 159, 207, 0.5), 0px 0px 14.4625px rgba(159, 159, 207, 0.25);
  }
`

type MailDirectProps = {
  app: string
  icon: ReactNode
  title: string
  status: 'hovered' | 'notHovered' | 'normal'
  directLink: string
  onMouseEnter: (app: string) => void
  onMouseLeave: () => void
}

export const MailDirect = ({ app, directLink, icon, title, status, onMouseEnter, onMouseLeave }: MailDirectProps) => {
  return (
    <MailDirectContainer
      status={status}
      target="_blank"
      to={directLink}
      onMouseEnter={() => onMouseEnter(app)}
      onMouseLeave={onMouseLeave}
    >
      {icon}
      <Text size="medium" weight="normal">
        {title}
      </Text>
    </MailDirectContainer>
  )
}
