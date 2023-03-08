import styled from 'styled-components'

import { MultiToggle, MultiToggleProps } from '@/components/Commons/MultiToggle'
import { ToggleLabel, ToggleLableContent } from '@/components/Commons/MultiToggle/MultiToggleItem'

export const SubCategoryToggle = ({ ...props }: MultiToggleProps) => {
  return <SubCategoryStyledToggle {...props}></SubCategoryStyledToggle>
}

const SubCategoryStyledToggle = styled(MultiToggle)`
  ${ToggleLabel} {
    z-index: 1;

    &.selected ${ToggleLableContent} {
      color: #ffffff;
    }

    &:before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: linear-gradient(90deg, #ff958a -1.56%, #ff6e88 50.54%, #ff93a7 101.56%);
      border-radius: 8px;
      background-color: #212121;
      color: #ffffff;
      opacity: 0;
      z-index: -1;

      transition: opacity 0.5s ease;
    }

    &.selected:before {
      opacity: 1;
    }
  }
`
