import * as RadixSwitch from '@radix-ui/react-switch'
import { SwitchProps } from '@radix-ui/react-switch'
import styled from 'styled-components'

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb />
    </SwitchRoot>
  )
}

export const SwitchRoot = styled(RadixSwitch.Root)`
  width: 32px;
  height: 20px;
  background-color: hsla(261, 19%, 40%, 1);
  border-radius: 9999px;
  border-width: 0px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background 0.25s ease 0s;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-state='checked'] {
    background-color: hsla(138, 50%, 31%, 1);
  }
`

export const SwitchThumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 14px;
  height: 14px;
  background-color: hsla(262, 30%, 15%, 1);
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--blackA7);
  transition: background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    background-color: hsla(138, 57%, 50%, 1);
    transform: translateX(16px);
  }
`
