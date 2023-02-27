import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as GmailIcon } from '@/assets/icons/gmail.svg'
import { ReactComponent as OutlookIcon } from '@/assets/icons/outlook.svg'
import { Text } from '@/layouts/common'
import { TRYSTS_EMAIL_LOGIN } from '@/libs/constants'
import { useLoginStore } from '@/stores/login'

import { CodeField } from './CodeField'
import { MailDirect } from './MailDirect'

const LoginCodeInputContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DirectLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const CodeSection = styled.div<{ isCompleted: boolean }>`
  width: 400px;
  height: 200px;
  display: flex;
  background-color: #13042f;
  border-radius: 20px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  transition: height 0.3s ease;
`

const CompletedSection = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 52px);
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const CheckingText = styled(Text)<{ isChecking: boolean }>`
  color: #9c8bba;
  opacity: ${({ isChecking }) => (isChecking ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const CancelButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 28px;
  border-radius: 12px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2f0c45;
  }

  span {
    font-size: 16px;
  }
`

type DirectLink = {
  app: string
  icon: ReactNode
  title: string
  status: 'hovered' | 'notHovered' | 'normal'
  directTo: string
}

export const LoginCodeInput = () => {
  const [directLinks, setDirectLinks] = useState<DirectLink[]>([
    {
      app: 'Gmail',
      icon: <GmailIcon />,
      title: 'Open Gmail',
      status: 'normal',
      directTo: `https://mail.google.com/mail/u/0/#search/from:${TRYSTS_EMAIL_LOGIN}`,
    },
    {
      app: 'Outlook',
      icon: <OutlookIcon />,
      title: 'Open Outlook',
      status: 'normal',
      directTo: `https://outlook.office.com/mail/search/from:${TRYSTS_EMAIL_LOGIN}/newmessage`,
    },
  ])
  const [isCompleted, setIsCompleted] = useState(false)
  const setStep = useLoginStore((state) => state.setStep)

  const handleCancel = () => {
    setStep(1)
  }

  const handleHoverDirectLink = (app: string) => {
    const newDirectLinks: DirectLink[] = directLinks.map((link) => {
      if (link.app === app) {
        return { ...link, status: 'hovered' }
      }

      return { ...link, status: 'notHovered' }
    })

    setDirectLinks(newDirectLinks)
  }

  const handleLeaveDirectLink = () => {
    const newDirectLinks: DirectLink[] = directLinks.map((link) => {
      return { ...link, status: 'normal' }
    })

    setDirectLinks(newDirectLinks)
  }

  return (
    <LoginCodeInputContainer>
      <DirectLinks>
        {directLinks.map((link) => (
          <MailDirect
            key={link.app}
            app={link.app}
            directLink={link.directTo}
            icon={link.icon}
            status={link.status}
            title={link.title}
            onMouseEnter={handleHoverDirectLink}
            onMouseLeave={handleLeaveDirectLink}
          />
        ))}
      </DirectLinks>
      <CodeSection isCompleted={isCompleted}>
        <CodeField setIsCompleted={setIsCompleted} />
        <CompletedSection>
          <CheckingText isChecking={isCompleted} size="medium" weight="lighter">
            Checking
          </CheckingText>
          <CancelButton onClick={handleCancel}>
            <Text size="medium" weight="normal">
              Cancel
            </Text>
          </CancelButton>
        </CompletedSection>
      </CodeSection>
    </LoginCodeInputContainer>
  )
}