import { useDynamicSvgImport } from './hooks/useDynamicSvgImport'

type IconProps = {
  height?: number
  name: IconName
  width?: number
}

export const Icon = ({ name, width = 16, height = 16 }: IconProps) => {
  const { loading, iconRef: SvgIcon } = useDynamicSvgImport(name)

  return (
    <>
      {!loading && SvgIcon ? (
        <SvgIcon height={height} width={width} />
      ) : (
        <div
          style={{
            width,
            height,
          }}
        ></div>
      )}
    </>
  )
}
