import React from 'react'
import { ITooltip, Tooltip as ReactTooltip } from 'react-tooltip'
import styled from 'styled-components'

const CustomTooltip = styled(ReactTooltip)`
  background: var(--color-5);
  border-radius: 8px;
  padding: 6px 8px;

  .no-arrow {
    display: none;
  }
`

export const Tooltip = (props: ITooltip) => {
  return <CustomTooltip {...props} classNameArrow="no-arrow" delayShow={300} />
}
