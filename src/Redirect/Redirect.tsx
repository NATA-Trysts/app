import { useSearchParams } from 'react-router-dom'

export const Redirect = () => {
  const [searchParams] = useSearchParams()

  const url = searchParams.get('url')

  if (url !== null) window.open(url, '_self')
  else window.location.href = '/'

  return null
}
