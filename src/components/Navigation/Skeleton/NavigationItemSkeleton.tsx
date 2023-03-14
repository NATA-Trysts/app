import { SkeletonItem, SkeletonTheme } from '@/components/Skeleton'

export const Skeleton = () => {
  return (
    <SkeletonTheme baseColor="#838383" borderRadius={8} highlightColor="#cac9c9">
      <SkeletonItem height={32} width={196} />
    </SkeletonTheme>
  )
}
