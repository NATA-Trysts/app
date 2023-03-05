import { ReactComponent as ShopIcon } from '@/assets/icons/shop.svg'
import { BasicButton, GradientButton } from '@/components/Button'
import { Header, HeaderButtons, HeaderSearchBar } from '@/components/Header'

export const HeaderPage = () => {
  const handleSearch = (search: string) => {
    console.log(search)
  }

  return (
    <div style={{ backgroundColor: '#121316' }}>
      <Header>
        <HeaderSearchBar key={'search-bar'} onSearch={handleSearch} />
        <HeaderButtons key={'button'}>
          <BasicButton color="dark">
            <ShopIcon stroke="#696969" />
            Shop
          </BasicButton>
          <GradientButton>Create Space</GradientButton>
        </HeaderButtons>
      </Header>

      <Header></Header>
    </div>
  )
}
