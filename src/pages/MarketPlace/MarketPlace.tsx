import { useCallback, useMemo, useRef, useState } from 'react'

import ItemImageWebp from '@/assets/marketplace-item.webp'
import PreviewItemImageWebp from '@/assets/marketplace-preview-item.webp'
import { GradientButton } from '@/components/Button'
import { Text } from '@/components/Commons'
import { Chip } from '@/components/Commons/Chip'
import { Dialog, DialogRef } from '@/components/Commons/Dialog'
import { MultiToggleOption } from '@/components/Commons/MultiToggle'
import { Header } from '@/components/Header'
import { SubCategoryToggle } from '@/components/SubcategoryToggle'
import { Model } from '@/models/Model'

import {
  BuyButton,
  Content,
  ContentBody,
  ContentHeader,
  EyeIcon,
  ItemCard,
  ItemChipGroup,
  ItemContainer,
  ItemDescription,
  ItemImage,
  ItemImageContainer,
  ItemImageMask,
  ItemImageOverlay,
  ItemPrice,
  MarketDialogDescription,
  MarketDialogText,
  MarketDialogTitle,
  MarketPlacePage,
  MarketPlaceText,
  PreviewIcon,
  PreviewItemCard,
  PreviewItemColumn,
  PreviewItemContainer,
  PreviewItemDescription,
  PreviewItemImage,
  PreviewItemInfo,
  PreviewItemText,
  PreviewItemTitle,
  PreviewText,
  ToogleContainer,
} from './MarketPlaceItem'

type PreviewItem = {
  title: string
  description: string
}

function createModels(modelCollections: Array<{ amount: number; collection: string }>): Model[] {
  let currentIndex = 0

  return modelCollections.reduce<Model[]>((models, current) => {
    const collectionModels = [...Array(current.amount)].map<Model>(() => {
      currentIndex++

      return {
        id: currentIndex,
        name: `${current.collection} inspiration`,
        category: 'category 1',
        collection: current.collection,
        description: 'Very nice item, please trust me bro',
        customable: { primary: 'primary', secondary: 'secondary' },
        materials: { primary: null, secondary: null },
        resolutions: { low: 'low', medium: 'medium' },
        thumbnail: ItemImageWebp,
      }
    })

    return [...models, ...collectionModels]
  }, [])
}

const models: Model[] = createModels([
  { amount: 3, collection: 'Nha Trang' },
  { amount: 5, collection: 'Hoi An' },
  { amount: 7, collection: 'Da Lat' },
  { amount: 2, collection: 'Da Nang' },
])

const previewItems: PreviewItem[] = [
  { title: 'Duma Chair', description: 'The perfect blend of comfort and ' },
  {
    title: 'Duma Chair',
    description:
      'Elevate your dining experience with our elegant and sturdy wooden dining chairs, designed to complement any decor',
  },
  { title: 'Duma Chair', description: 'Make a statement with our bold and vibrant accent chairs' },
  {
    title: 'Duma Chair',
    description:
      'The perfect blend of comfort and style, our modern lounge chair will be your go-to spot for relaxation',
  },
  {
    title: 'Duma Chair',
    description:
      'The perfect blend of comfort and style, our modern lounge chair will be your go-to spot for relaxation',
  },
  {
    title: 'Duma Chair',
    description:
      'Elevate your dining experience with our elegant and sturdy wooden dining chairs, designed to complement any decor',
  },
  {
    title: 'Duma Chair',
    description:
      'Make a statement with our bold and vibrant accent chairs, available in a range of colors and patterns to suit your personality.',
  },
  {
    title: 'Duma Chair',
    description:
      'The perfect blend of comfort and style, our modern lounge chair will be your go-to spot for relaxation',
  },
]

function convertItemsToMansonryColumn(items: any[], columnLength: number): PreviewItem[][] {
  const initiateColumns: PreviewItem[][] = [...Array<PreviewItem[]>(columnLength)].map(() => [])

  return items.reduce<PreviewItem[][]>((columns, current, index) => {
    const remainder = (index + 1) % columnLength
    const columnIndex = remainder === 0 ? columnLength - 1 : remainder - 1

    columns[columnIndex].push(current)

    return columns
  }, initiateColumns)
}

const MarketPlace = () => {
  const [filter, setFilter] = useState('All')
  const dialogRef = useRef<DialogRef>(null)

  const handleItemPreview = useCallback(() => {
    const columnElements = convertItemsToMansonryColumn(previewItems, 4).map((col, colIndex) => {
      return (
        <PreviewItemColumn key={`preview-col-${colIndex}`}>
          {col.map((item, index) => {
            return (
              <PreviewItemCard key={`preview-col-${colIndex}-${index}`}>
                <PreviewItemImage src={PreviewItemImageWebp} />
                <PreviewItemInfo>
                  <PreviewItemTitle>
                    <PreviewItemText size="medium" weight="normal">
                      {item.title}
                    </PreviewItemText>
                  </PreviewItemTitle>
                  <PreviewItemDescription>
                    <PreviewItemText size="small" weight="lighter">
                      {item.description}
                    </PreviewItemText>
                  </PreviewItemDescription>
                </PreviewItemInfo>
              </PreviewItemCard>
            )
          })}
        </PreviewItemColumn>
      )
    })

    dialogRef.current?.open(
      <>
        <MarketDialogTitle>
          <MarketDialogText>Nha Trang inspiration</MarketDialogText>
          <Chip color="hsla(68, 41%, 79%, 1)">Popular</Chip>
        </MarketDialogTitle>
        <MarketDialogDescription>
          <MarketDialogText>$100</MarketDialogText>
          <GradientButton>Buy</GradientButton>
        </MarketDialogDescription>
        <PreviewItemContainer>{columnElements}</PreviewItemContainer>
      </>,
    )
  }, [])

  const collectionToogleOptions = useMemo(() => {
    //use Set to remove duplicate collections
    const collections = [...new Set(models.map((model) => model.collection))]
    const collectionOptions = collections.map<MultiToggleOption>((collection) => {
      return { value: collection, display: collection }
    })

    return [{ value: 'All', display: 'All' }, ...collectionOptions]
  }, [])

  const items = useMemo(() => {
    return models
      .filter((model) => filter === 'All' || model.collection === filter)
      .map((model) => {
        return (
          <ItemCard key={`item-${model.id}`}>
            <ItemImageContainer>
              <ItemImage src={ItemImageWebp} />
              <ItemImageOverlay>
                <ItemChipGroup>
                  <Chip color="hsla(0, 82%, 59%, 1)">Hot 🔥</Chip>
                  <Chip color="hsla(0, 32%, 71%, 1)">-25%</Chip>
                </ItemChipGroup>
                <BuyButton>Buy</BuyButton>
                <ItemImageMask onClick={handleItemPreview}>
                  <PreviewIcon>
                    <EyeIcon />
                    <PreviewText size="small" weight="normal">
                      Preview
                    </PreviewText>
                  </PreviewIcon>
                </ItemImageMask>
              </ItemImageOverlay>

              <ItemDescription>
                <MarketPlaceText size="medium" weight="normal">
                  {model.name}
                </MarketPlaceText>
                <ItemPrice>
                  <MarketPlaceText size="medium" weight="normal">
                    $20
                  </MarketPlaceText>
                </ItemPrice>
              </ItemDescription>
            </ItemImageContainer>
          </ItemCard>
        )
      })
  }, [handleItemPreview, filter])

  return (
    <MarketPlacePage>
      <Header></Header>
      <Content>
        <ContentHeader>
          <Text size="x-large" weight="normal">
            Summer is coming 🌊 Explore awesome furnitures, bring to your space
          </Text>
        </ContentHeader>
        <ContentBody>
          <ToogleContainer>
            <SubCategoryToggle
              handleSelectedChange={(value) => setFilter(value)}
              options={collectionToogleOptions}
              selected={collectionToogleOptions[0].value}
            ></SubCategoryToggle>
          </ToogleContainer>
          <ItemContainer>{items}</ItemContainer>
        </ContentBody>
      </Content>

      <Dialog ref={dialogRef}></Dialog>
    </MarketPlacePage>
  )
}

export default MarketPlace
