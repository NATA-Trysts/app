import styled from 'styled-components'

import { ReactComponent as ThreeDot } from '@/assets/icons/three-dot.svg'
import { Option, Popover } from '@/components/Popover'

const MemberContainer = styled.div`
  padding: 8px;
  border-radius: 12px;
  background: #212225;
  width: 164px;
`

export type CardOptions = {
  customHoverBackgroundColor: string
  title: string
  onClick: () => void
}

export type Owner = 'owner' | 'guest'

// type CardOptionsProps = {
//   spaceAuthorId: string
//   spaceId: string
//   spaceCode: string
//   onClickThreeDots: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
// }

// export const CardOptions = ({ spaceAuthorId, spaceId, spaceCode, onClickThreeDots }: CardOptionsProps) => {
//   const navigate = useNavigate()
//   const { copy } = useCopyToClipboard()
//   const [user] = useMemberStore((state) => [state.user])

//   const handleHostClick = () => {
//     navigate(`/${spaceCode}`)
//   }

//   const handleOpenInNewTabClick = () => {
//     window.open(`/${spaceCode}`, '_blank')
//   }

//   const handleEditSpaceClick = () => {
//     navigate(`/files/${spaceId}`)
//   }

//   const handleCopyUrlClick = () => {
//     // temp local host url
//     copy(`http://127.0.0.1:5173/${spaceCode}`)
//   }

//   const optionsMap = new Map<Owner, CardOptions[]>([
//     [
//       'owner',
//       [
//         { customHoverBackgroundColor: '#C771E1', title: 'Host', onClick: handleHostClick },
//         { customHoverBackgroundColor: '#C771E1', title: 'Open in new tab', onClick: handleOpenInNewTabClick },
//         { customHoverBackgroundColor: '#C771E1', title: 'Edit space', onClick: handleEditSpaceClick },
//         { customHoverBackgroundColor: '#C771E1', title: 'Copy URL', onClick: handleCopyUrlClick },
//         { customHoverBackgroundColor: '#FC677B', title: 'Delete space', onClick: () => {} },
//       ],
//     ],
//     [
//       'guest',
//       [
//         { customHoverBackgroundColor: '#C771E1', title: 'Open in new tab', onClick: handleOpenInNewTabClick },
//         { customHoverBackgroundColor: '#C771E1', title: 'Duplicate', onClick: () => {} },
//         { customHoverBackgroundColor: '#C771E1', title: 'Copy URL', onClick: handleCopyUrlClick },
//       ],
//     ],
//   ])
//   const [ownerStatus, setOwnerStatus] = useState<Owner>('owner')

//   useEffect(() => {
//     setOwnerStatus(spaceAuthorId === user._id ? 'owner' : 'guest')
//   }, [spaceAuthorId])

//   return (
//     <Popover
//       align="center"
//       content={
//         <MemberContainer>
//           {optionsMap.get(ownerStatus)?.map((option) => (
//             <Option
//               key={option.title}
//               customHoverBackgroundColor={option.customHoverBackgroundColor}
//               title={option.title}
//               onClick={option.onClick}
//             />
//           ))}
//         </MemberContainer>
//       }
//       side="right"
//       sideOffset={28}
//     >
//       <div onClick={(e) => onClickThreeDots(e)}>
//         <ThreeDot />
//       </div>
//     </Popover>
//   )
// }

type CardOptionsProps = {
  options?: CardOptions[]
  onClickThreeDots: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const CardOptions = ({ options, onClickThreeDots }: CardOptionsProps) => {
  return (
    <Popover
      align="center"
      content={
        <MemberContainer>
          {options?.map((option) => (
            <Option
              key={option.title}
              customHoverBackgroundColor={option.customHoverBackgroundColor}
              title={option.title}
              onClick={option.onClick}
            />
          ))}
        </MemberContainer>
      }
      side="right"
      sideOffset={28}
    >
      <div onClick={(e) => onClickThreeDots(e)} onDoubleClick={(e) => e.stopPropagation()}>
        <ThreeDot />
      </div>
    </Popover>
  )
}
