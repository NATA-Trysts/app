import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

export const Skeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <div>
        <SkeletonItem height={165} width={265} />
        <div style={{ paddingTop: '16px' }}>
          <SkeletonItem height={20} width={165} />
          <SkeletonItem height={12} width={100} />
        </div>
      </div>
    </SkeletonTheme>
  )
}
