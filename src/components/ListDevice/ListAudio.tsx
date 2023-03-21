import styled from 'styled-components'

import { customColorHueMapping } from '@/components/Commons'
import { Option } from '@/components/Popover'
import { useAppStore } from '@/stores'

const Container = styled.div<{ backgroundColor: string }>`
  padding: 8px;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor};
  border-radius: 12px;
`

const MicrophoneSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:first-child {
    margin-bottom: 12px;
  }
`

const SpeakerSection = styled(MicrophoneSection)``

const SectionTitle = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #fff;
`

const List = styled.div``

const CustomOption = styled(Option)<{ textColor: string }>`
  width: 100%;
  height: 34px;
  background: transparent;

  span {
    color: ${(props) => props.textColor};
  }

  svg {
    position: absolute;
    right: 12px;
    path {
      stroke: ${(props) => props.textColor};
    }
    rect {
      stroke: ${(props) => props.textColor};
    }
    ellipse {
      stroke: ${(props) => props.textColor};
    }
  }

  &:hover {
    svg {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(154deg) brightness(108%)
        contrast(101%);
    }
  }
`

let microphones: MediaDeviceInfo[] = []
let audios: MediaDeviceInfo[] = []

navigator.mediaDevices.enumerateDevices().then((devices) => {
  microphones = devices.filter((device) => device.kind === 'audioinput')
  audios = devices.filter((device) => device.kind === 'audiooutput')
})

export const ListAudio = () => {
  const color = useAppStore((state) => state.customColor)

  return (
    <Container backgroundColor={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
      <MicrophoneSection>
        <SectionTitle>Microphone</SectionTitle>
        <List>
          {microphones.map((microphone) => (
            <CustomOption
              key={microphone.deviceId}
              hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
              textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
              title={microphone.label}
            />
          ))}
        </List>
      </MicrophoneSection>
      <SpeakerSection>
        <SectionTitle>Speaker</SectionTitle>
        <List>
          {audios.map((audio) => (
            <CustomOption
              key={audio.deviceId}
              hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
              textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
              title={audio.label}
            />
          ))}
        </List>
      </SpeakerSection>
    </Container>
  )
}
