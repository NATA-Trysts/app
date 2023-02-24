import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as GmailIcon } from '@/assets/icons/gmail.svg'
import { ReactComponent as OutlookIcon } from '@/assets/icons/outlook.svg'
import { Text } from '@/layouts/common'
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

export const LoginCodeInput = () => {
  // fixed
  const directLinks = [
    {
      app: 'Gmail',
      icon: <GmailIcon />,
      title: 'Open Gmail',
    },
    {
      app: 'Outlook',
      icon: <OutlookIcon />,
      title: 'Open Outlook',
    },
  ]

  const [isCompleted, setIsCompleted] = useState(false)
  const setStep = useLoginStore((state) => state.setStep)

  const handleCancel = () => {
    setStep(1)
  }

  return (
    <LoginCodeInputContainer>
      <DirectLinks>
        {directLinks.map((link) => (
          <MailDirect key={link.app} app={link.app} icon={link.icon} title={link.title} />
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
