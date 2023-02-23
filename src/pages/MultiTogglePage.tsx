import styled from 'styled-components'

import { MultiToggle } from '@/components/Commons/MultiToggle'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'

const DevContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #031d0a;
`

const handleChange = (data: any) => console.log(data)

export const MultiTogglePage = () => {
  return (
    <DevContainer>
      <MultiToggle
        handleSelectedChange={handleChange}
        options={[
          { value: 'all', display: 'All' },
          { value: 'type-1', display: 'Type 1' },
          { value: 'type-2', display: 'Type 2' },
        ]}
      ></MultiToggle>
      <br />
      <MultiToggle
        handleSelectedChange={handleChange}
        options={[
          { value: 'all', display: 'All' },
          { value: 'type-1', display: 'Type 1' },
          { value: 'type-2', display: 'Type 2' },
        ]}
        selected="all"
      ></MultiToggle>
      <br />
      <MultiToggle
        handleSelectedChange={handleChange}
        options={['All', 'Type 1', 'Type 2']}
        selected="Type 1"
      ></MultiToggle>
      <br />
      <SubCategoryToggle
        handleSelectedChange={handleChange}
        options={[
          { value: 'all', display: 'All' },
          { value: 'type-1', display: 'Type 1' },
          { value: 'type-2', display: 'Type 2' },
        ]}
        selected="type-2"
      ></SubCategoryToggle>
    </DevContainer>
  )
}
