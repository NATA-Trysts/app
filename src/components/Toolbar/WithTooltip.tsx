import { ReactNode } from 'react'
import { ITooltip } from 'react-tooltip'

import { Tooltip } from '@/components/Tooltip'
import { SVGClickable } from '@/layouts/common'

type WithTooltipProps = {
  children: ReactNode
  id: string
  customHoverColor?: string
  active?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
} & ITooltip

export const WithTooltip = (props: WithTooltipProps) => {
  return (
    <>
      <SVGClickable
        active={props.active}
        customHoverColor={props.customHoverColor}
        id={props.id}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
      >
        {props.children}
      </SVGClickable>
      <Tooltip anchorSelect={`#${props.id}`} {...props} />
    </>
  )
}
