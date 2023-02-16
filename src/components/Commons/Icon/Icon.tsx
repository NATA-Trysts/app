import { useDynamicSvgImport } from './hooks/useDynamicSvgImport'

type IconProps = {
  height?: number
  name: IconName
  width?: number
}

export const Icon = ({ name, width = 16, height = 16 }: IconProps) => {
  const SvgIcon = useDynamicSvgImport(name)

  return (
    <>
      {SvgIcon && (
        <div
          style={{
            display: 'flex',
          }}
        >
          <SvgIcon height={height} width={width} />
        </div>
      )}
    </>
  )
}
