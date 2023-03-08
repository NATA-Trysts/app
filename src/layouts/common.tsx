import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const SVGClickable = styled.button<{ customHoverColor?: string; active?: boolean }>`
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background: ${(props) => (props.active ? 'var(--color-3)' : 'var(--color-4)')};
  pointer-events: auto;
  display: flex;
  gap: 8px;

  svg {
    path {
      stroke: ${(props) => (props.active ? '#fff' : 'var(--color-3)')};
    }
    rect {
      stroke: ${(props) => (props.active ? '#fff' : 'var(--color-3)')};
    }

    ellipse {
      stroke: ${(props) => (props.active ? '#fff' : 'var(--color-3)')};
    }
  }

  :hover {
    svg {
      path {
        stroke: #fff;
      }
      rect {
        stroke: #fff;
      }

      ellipse {
        stroke: #fff;
      }
    }

    background: ${(props) => (props.customHoverColor ? props.customHoverColor : `var(--color-3)`)};
  }
`

export { Container, SVGClickable }
