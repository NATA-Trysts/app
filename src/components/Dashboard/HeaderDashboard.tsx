import { Link } from 'react-router-dom'

import { ReactComponent as ShopIcon } from '@/assets/icons/shop.svg'

import { BasicButton, GradientButton } from '../Button'
import { Header, HeaderButtons, HeaderSearchBar } from '../Commons/Header'

export const HeaderDashboard = () => {
  const handleSearch = (value: string) => {
    // temp
    return value
  }

  return (
    <Header>
      <HeaderSearchBar onSearch={handleSearch} />
      <HeaderButtons>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/marketplace'}>
          <BasicButton color="dark">
            <ShopIcon stroke="#696969" />
            Market Place
          </BasicButton>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/create'}>
          <GradientButton>Create Space</GradientButton>
        </Link>
      </HeaderButtons>
    </Header>
  )
}
