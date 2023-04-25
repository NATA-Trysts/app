import styled from 'styled-components'

import { CloseButton, Dialog } from '@/components/Commons/Dialog'

export const IframeDiaglog = styled(Dialog)`
  padding: 0;
  max-width: unset;
  max-height: unset;

  ${CloseButton} {
    top: -12px;
    right: -12px;
  }
`
