import { motion } from 'framer-motion'
import styled from 'styled-components'

const ToolbarContainer = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 16px;
  background: var(--color-5);
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`

const AnimatedToolbarContainer = styled(motion.div)`
  display: flex;
  border-radius: 16px;
  background: var(--color-5);
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  z-index: 2;
`

const ToolbarItem = styled.div`
  background: var(--color-4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CustomToolbarItem = styled(ToolbarItem)`
  margin-left: 8px;
`

const Seprator = styled.div`
  width: 1.25px;
  height: 16px;
  background: var(--color-2);
  border-radius: 1px;
`

export { AnimatedToolbarContainer, CustomToolbarItem, Seprator, ToolbarContainer, ToolbarItem }
