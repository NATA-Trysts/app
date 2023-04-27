import { CategoryType, SpaceModel, SubCategoryItem, useBuilderStore } from '@/stores'

const useBuilder = () => {
  const setSubCategoryItems = useBuilderStore((state) => state.setSubCategoryItems)
  const setSelectedSubCategoryItems = useBuilderStore((state) => state.setSelectedSubCategoryItems)
  const updateSelectedSubCategoryItems = useBuilderStore((state) => state.updateSelectedSubCategoryItems)
  const addModel = useBuilderStore((state) => state.addModel)
  const deleteModel = useBuilderStore((state) => state.deleteModel)
  const models = useBuilderStore((state) => state.models)
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

  // undo redo
  const updateHistory = (action: (models: SpaceModel[]) => void) => {
    const history = JSON.parse(sessionStorage.getItem('history') || '[]')
    const historyIndex = JSON.parse(sessionStorage.getItem('historyIndex') || '0')

    if (historyIndex < history.length) {
      // delete all of the element from historyIndex + 1 to the end
      history.splice(historyIndex + 1, history.length - historyIndex)
    }

    const newModels = action(models)

    history.push(newModels)

    sessionStorage.setItem('history', JSON.stringify(history))
    sessionStorage.setItem('historyIndex', JSON.stringify(historyIndex + 1))
  }

  const deleteModelBuilder = (uuid: string) => {
    deleteModel(uuid)
    updateHistory((models) => {
      return models.filter((model) => model.uuid !== uuid)
    })
  }

  const clickSubCategory = (item: SubCategoryItem) => {
    updateSelectedSubCategoryItems(item.category, item)

    addModel({
      uuid: item.uuid,
      name: item.name,
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      color: '#ff00ff',
      roughness: 1,
      metalness: 0,
      type: item.category,
    })

    updateHistory((models) => {
      return [
        ...models,
        {
          uuid: item.uuid,
          name: item.name,
          position: { x: 0, y: 0, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          color: '#ff00ff',
          roughness: 1,
          metalness: 0,
          type: item.category,
        },
      ]
    })
  }

  const removeLeadingZero = (value: string) => {
    if (value[0] === '0') {
      return value.slice(1)
    }

    return value
  }

  const convertValuesToOptions = (values: string[] | boolean[]) => {
    return values.map((value) => {
      return {
        value,
        display: value === true ? 'Yes' : value === false ? 'No' : value,
      }
    })
  }

  return { clickSubCategory, convertValuesToOptions, deleteModelBuilder, updateHistory, mappingData, removeLeadingZero }
}

export { useBuilder }
