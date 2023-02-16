import { IconContainer } from '../IconStyle'

export const ShopIcon = ({ size = 18, color = 'black' }: { size?: number; color?: string }) => {
  return (
    <IconContainer>
      <svg fill="none" height={size} viewBox="0 0 18 18" width={size} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.683 8.167V16.5H2.35V8.167"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M1.434 4.74c-.637 1.65.592 3.427 2.362 3.427 1.38 0 2.507-1.12 2.507-2.5a2.5 2.5 0 0 0 2.5 2.5h.425a2.5 2.5 0 0 0 2.5-2.5c0 1.38 1.127 2.5 2.508 2.5 1.77 0 3-1.777 2.363-3.429L15.347 1.5H2.687L1.434 4.74Z"
          stroke={color}
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </IconContainer>
  )
}
