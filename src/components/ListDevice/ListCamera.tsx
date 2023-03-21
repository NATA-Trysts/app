import { DeviceType, useDevices } from '@100mslive/react-sdk'
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

type ListCameraProps = {
  setIsPopoverOpen: (value: boolean) => void
}

export const ListCamera = ({ setIsPopoverOpen }: ListCameraProps) => {
  const color = useAppStore((state) => state.customColor)
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices()

  const handleClick = (deviceId: string) => {
    updateDevice({ deviceId, deviceType: DeviceType.videoInput })
    setIsPopoverOpen(false)
  }

  return (
    <Container backgroundColor={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
      {allDevices.videoInput &&
        allDevices.videoInput.map((camera) => (
          <CustomOption
            key={camera.deviceId}
            activeBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
            hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
            isActive={selectedDeviceIDs.videoInput === camera.deviceId}
            textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
            title={camera.label}
            onClick={() => {
              handleClick(camera.deviceId)
            }}
          />
        ))}
    </Container>
  )
}
