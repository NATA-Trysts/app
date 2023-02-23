import { SpacePreviewCard } from '@/components/SpacePreviewCard'

const SpacePreview = () => {
  // temp data
  const imageUrl = 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg'
  const title = 'Nguyen Son Ha Wedding'
  const subtitle = 'Edited 14 hours ago'

  return (
    // temp div
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SpacePreviewCard imageUrl={imageUrl} subtitle={subtitle} title={title} />
    </div>
  )
}

export default SpacePreview
