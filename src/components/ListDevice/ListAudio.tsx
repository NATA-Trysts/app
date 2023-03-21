import { DeviceType, useDevices } from '@100mslive/react-sdk'
import { useEffect, useRef } from 'react'
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

const CustomOption = styled(Option)<{ activeBackground: string; textColor: string; isActive: boolean }>`
  width: 100%;
  height: 34px;
  background: transparent;

  span {
    color: ${(props) => props.textColor};
  }

  ${(props) =>
    props.isActive &&
    `
    background: ${props.activeBackground};
    
    span {
    color: white
    }
      `}
`

export const ListAudio = () => {
  const color = useAppStore((state) => state.customColor)
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices()

  const handleClick = async (deviceId: string, deviceType: DeviceType) => {
    updateDevice({ deviceId, deviceType })
  }

  return (
    <Container backgroundColor={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
      <MicrophoneSection>
        <SectionTitle>Microphone</SectionTitle>
        <List>
          {allDevices.audioInput &&
            allDevices.audioInput.map((microphone) => (
              <CustomOption
                key={microphone.deviceId}
                activeBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
                hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
                isActive={selectedDeviceIDs.audioInput === microphone.deviceId}
                textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
                title={microphone.label}
                onClick={() => {
                  handleClick(microphone.deviceId, DeviceType.audioInput)
                }}
              />
            ))}
        </List>
      </MicrophoneSection>
      <SpeakerSection>
        <SectionTitle>Speaker</SectionTitle>
        <List>
          {allDevices.audioOutput &&
            allDevices.audioOutput.map((audio) => (
              <CustomOption
                key={audio.deviceId}
                activeBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
                hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
                isActive={selectedDeviceIDs.audioOutput === audio.deviceId}
                textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
                title={audio.label}
                onClick={() => {
                  handleClick(audio.deviceId, DeviceType.audioOutput)
                }}
              />
            ))}
        </List>
        <TestAudio id={selectedDeviceIDs.audioOutput} />
      </SpeakerSection>
    </Container>
  )
}

const TEST_AUDIO_URL = 'https://100ms.live/test-audio.wav'

const TestAudio = ({ id }: any) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current && id) {
      try {
        if (typeof (audioRef.current as any).setSinkId !== 'undefined') {
          ;(audioRef.current as any).setSinkId(id)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [id])

  return (
    <>
      <button onClick={() => (audioRef.current as any).play()}>test audio</button>
      <audio ref={audioRef} src={TEST_AUDIO_URL} />
    </>
  )
}
