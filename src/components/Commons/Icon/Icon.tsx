import { useIconSvgImport } from './hooks/useIconSvgImport'

type IconProps = {
  color?: string
  height?: number
  name: IconName
  width?: number
}

export const Icon = ({ name, width = 18, height = 18, color = '#696969' }: IconProps) => {
  const SvgIcon = useIconSvgImport(name)

  return <>{SvgIcon && <SvgIcon height={height} stroke={color} width={width} />}</>
}
