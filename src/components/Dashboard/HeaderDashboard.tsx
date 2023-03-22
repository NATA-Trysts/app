import { ReactComponent as ShopIcon } from '@/assets/icons/shop.svg'

import { BasicButton, GradientButton } from '../Button'
import { Header, HeaderButtons, HeaderSearchBar } from '../Header'

export const HeaderDashboard = () => {
  const handleSearch = (value: string) => {
    // temp
    return value
  }

  return (
    <Header>
      <HeaderSearchBar onSearch={handleSearch} />
      <HeaderButtons>
        <BasicButton color="dark">
          <ShopIcon stroke="#696969" />
          Market Place
        </BasicButton>
        <GradientButton>Create Space</GradientButton>
      </HeaderButtons>
    </Header>
  )
}
