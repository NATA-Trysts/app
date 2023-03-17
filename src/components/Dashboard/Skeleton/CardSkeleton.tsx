import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

export const CardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <div style={{ width: '100%' }}>
        <SkeletonItem height={168} width="100%" />
        <div style={{ padding: '16px 0' }}>
          <SkeletonItem height={20} width={200} />
          <SkeletonItem height={16} width={100} />
        </div>
      </div>
    </SkeletonTheme>
  )
}
