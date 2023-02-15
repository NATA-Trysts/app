import styled from 'styled-components'

export const basicButtonThemes: any = {
  dark: {
    background: '#191A1D',
    color: '#696969',
  },
}

export const gradientButtonThemes: any = {
  purple: {
    background:
      'linear-gradient(90deg,rgba(166, 123, 194, 1) 0%,rgba(199, 145, 221, 1) 50%,rgba(233, 168, 250, 1) 100%);',
    color: '#FFFFFF',
  },
}

export const ButtonContainer = styled.button`
  height: 42px;
  padding: 10px 24px;
  border-width: 0px;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:focus-visible {
    outline-width: 0px;
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 41px 89px rgba(234, 42, 210, 0.44), 0px 15.7926px 28.3481px rgba(234, 42, 210, 0.267259),
      0px 3.34074px 7.25185px rgba(234, 42, 210, 0.172741);
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`

export const ButtonContent = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
`
