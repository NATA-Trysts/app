import { useEffect, useRef, useState } from 'react'

export function useDynamicSvgImport(iconName: IconName) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>()
  const [, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const importSvgIcon = async (): Promise<void> => {
      try {
        const path = `/src/assets/icons/${iconName}.svg`

        importedIconRef.current = (await import(/* @vite-ignore */ path)).ReactComponent
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    importSvgIcon()
  }, [iconName])

  return importedIconRef.current
}
