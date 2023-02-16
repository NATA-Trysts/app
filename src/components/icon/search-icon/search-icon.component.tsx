export const SearchIcon = ({ size = 32, color = 'black' }: { size?: number; color?: string }) => {
  return (
    <svg
      fill="none"
      height={size}
      stroke={color}
      viewBox={`-${size / 4} -${size / 4} ${size} ${size}`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00016 12.6667C10.1298 12.6667 12.6668 10.1296 12.6668 7C12.6668 3.87039 10.1298 1.33333 7.00016 1.33333C3.87055 1.33333 1.3335 3.87039 1.3335 7C1.3335 10.1296 3.87055 12.6667 7.00016 12.6667Z"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.88549 4.78105C8.40292 4.29848 7.73626 4 6.99988 4C6.2635 4 5.59683 4.29848 5.11426 4.78105"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M11.074 11.0739L13.9025 13.9024" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}
