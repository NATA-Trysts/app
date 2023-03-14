import styled from 'styled-components'

import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

const MyInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 8px 0 8px;
`

const TextSection = styled.div``

const Character = styled.div`
  margin-top: 12px;
  margin-bottom: 8px;
`

type SkeletonProps = {
  isExpanded: boolean
}

export const Skeleton = ({ isExpanded }: SkeletonProps) => {
  return (
    <>
      {isExpanded ? (
        <SkeletonTheme baseColor="#838383" highlightColor="#cac9c9">
          <MyInformation>
            <SkeletonItem circle height={40} width={40} />
            <TextSection>
              <SkeletonItem height={18} width={130} />
              <SkeletonItem height={12} width={90} />
            </TextSection>
          </MyInformation>
          <Character>
            <SkeletonItem height={184} width={184} />
          </Character>
        </SkeletonTheme>
      ) : (
        <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
          <SkeletonItem circle height={40} width={40} />
        </SkeletonTheme>
      )}
    </>
  )
}
