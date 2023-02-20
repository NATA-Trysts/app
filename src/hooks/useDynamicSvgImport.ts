import { useEffect, useRef, useState } from 'react'

export function useDynamicSvgImport(
  name: string,
  assetsFolder: AssetsFolder,
): React.FC<React.SVGProps<SVGElement>> | undefined {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>()
  const [, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const importSvgIcon = async (): Promise<void> => {
      try {
        const path = `/src/assets/${assetsFolder}/${name}.svg`

        importedIconRef.current = (await import(/* @vite-ignore */ path)).ReactComponent
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    importSvgIcon()
  }, [name])

  return importedIconRef.current
}
