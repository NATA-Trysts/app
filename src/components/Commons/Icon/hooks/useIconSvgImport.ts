import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'

export function useIconSvgImport(iconName: IconName): React.FC<React.SVGProps<SVGElement>> | undefined {
  const SvgIcon = useDynamicSvgImport(iconName, 'icons')

  return SvgIcon
}
