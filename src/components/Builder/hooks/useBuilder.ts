import { usePoker } from '@/hooks'
import { ModelUUID } from '@/libs/constants'
import { generateRandomNumber } from '@/libs/utils'
import { CategoryType, SpaceModel, SubCategoryItem, useBuilderStore } from '@/stores'

const useBuilder = () => {
  const setSubCategoryItems = useBuilderStore((state) => state.setSubCategoryItems)
  const setSelectedSubCategoryItems = useBuilderStore((state) => state.setSelectedSubCategoryItems)
  const updateSelectedSubCategoryItems = useBuilderStore((state) => state.updateSelectedSubCategoryItems)
  const addModel = useBuilderStore((state) => state.addModel)
  const deleteModel = useBuilderStore((state) => state.deleteModel)
  const models = useBuilderStore((state) => state.models)
  const poker = usePoker()
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

  const clickSubCategory = async (item: SubCategoryItem) => {
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
      iframeId: await getIframeId(item.uuid as ModelUUID),
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

  const getIframeId = async (uuid: ModelUUID): Promise<string | undefined> => {
    let id: string | undefined = undefined

    switch (uuid) {
      case 'desk-d61cf1db-b68e-4e4e-9bbd-797962b63dbf':
        id = await poker.createPoker()
        break
      case 'decoration-b186a8a9-9e0e-483e-9779-18abfe477fa3':
        id = generateRandomNumber(8)
        break
      case 'desk-58d0bc2c-871f-45ae-a73d-178c0ad41f31':
        id = generateRandomNumber(8)
        break
      default:
        break
    }

    return id
  }

  return { clickSubCategory, convertValuesToOptions, deleteModelBuilder, updateHistory, mappingData, removeLeadingZero }
}

export { useBuilder }
