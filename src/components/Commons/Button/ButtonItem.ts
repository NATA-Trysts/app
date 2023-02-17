import styled from 'styled-components'

type ButtonTheme = {
  background: string
  backgroundHover?: string
  color: string
  colorHover?: string
}

export const ButtonThemes: { [key: string]: { [key: string]: ButtonTheme } } = {
  basic: {
    dark: {
      background: '#191A1D',
      color: '#696969',
      colorHover: '#FFFFFF',
    },
  },
  gradient: {
    purple: {
      background: 'linear-gradient(85.46deg, #A67BC2 0%, #C771E1 50.52%, #E9A8FA 100%);',
      backgroundHover: 'linear-gradient(85.46deg, #B481D5 0%, #CE67ED 50.52%, #E88FFF 100%);',
      color: '#FFFFFF',
    },
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
  cursor: pointer;

  &:focus,
  &:focus-visible {
    outline-width: 0px;
  }

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.backgroundHover};
    box-shadow: 0px 41px 89px rgba(234, 42, 210, 0.44), 0px 15.7926px 28.3481px rgba(234, 42, 210, 0.267259),
      0px 3.34074px 7.25185px rgba(234, 42, 210, 0.172741);
  }

  &:hover:not(:disabled) .button-content {
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ButtonContent = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.color};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
