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

let cameras: MediaDeviceInfo[] = []

navigator.mediaDevices.enumerateDevices().then((devices) => {
  cameras = devices.filter((device) => device.kind === 'videoinput')
})

export const ListCamera = () => {
  const color = useAppStore((state) => state.customColor)

  return (
    <Container backgroundColor={`hsla(${customColorHueMapping[color]}, 79%, 11%, 1)`}>
      {cameras.map((camera) => (
        <CustomOption
          key={camera.deviceId}
          hoverBackground={`hsla(${customColorHueMapping[color]}, 65%, 66%, 1)`}
          textColor={`hsla(${customColorHueMapping[color]},  25%, 66%, 1)`}
          title={camera.label}
        />
      ))}
    </Container>
  )
}
