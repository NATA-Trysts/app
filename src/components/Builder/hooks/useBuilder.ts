import { CategoryType, SubCategoryItem, useBuilderStore } from '@/stores/builder'

const useBuilder = () => {
  const setSubCategoryItems = useBuilderStore((state) => state.setSubCategoryItems)
  const setSelectedSubCategoryItems = useBuilderStore((state) => state.setSelectedSubCategoryItems)
  const updateSelectedSubCategoryItems = useBuilderStore((state) => state.updateSelectedSubCategoryItems)

  // mapping data from api to map object
  const mappingData = async (listFromApi: SubCategoryItem[]) => {
    const newSubCategoryItems = new Map<CategoryType, SubCategoryItem[]>()

    listFromApi.forEach((item) => {
      const category = item.category
      const list = newSubCategoryItems.get(category) || []

      list.push(item)
      newSubCategoryItems.set(category, list)
    })

    // set default selected item
    const newSelectedSubCategoryItems = new Map<CategoryType, SubCategoryItem>()

    newSubCategoryItems.forEach((value, key) => {
      newSelectedSubCategoryItems.set(key, value[0])
    })

    setSubCategoryItems(newSubCategoryItems)
    setSelectedSubCategoryItems(newSelectedSubCategoryItems)
  }

  const clickSubCategory = (item: SubCategoryItem) => {
    updateSelectedSubCategoryItems(item.category, item)
  }

  return { clickSubCategory, mappingData }
}

export { useBuilder }
