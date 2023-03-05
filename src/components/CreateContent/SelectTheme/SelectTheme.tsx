import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import CustomImage from '@/assets/page/create/custom.png'
import { BasicButton } from '@/components/Button'
import { ButtonContent } from '@/components/Commons/Button'
import { MultiToggle, MultiToggleProps, MultiToggleRef, ToggleLabel } from '@/components/Commons/MultiToggle'
import { Text } from '@/layouts/common'

import { CanNextCreateContentProps, CreateForm, CreateHeader } from '..'
import { ThemeImage, ThemeImageCard } from './ThemeImageCard'

type SpaceThemeType = 'office' | 'conference' | 'event' | 'workshop' | 'custom'

type SpaceTheme = {
  [key in SpaceThemeType]: ReactNode
}

const themes: SpaceTheme = {
  office: (
    <ThemeImageCard
      key={'office-image'}
      name="Office"
      src="https://31e58c129a.cbaul-cdnwnd.com/b10995abef9b7109e0c8dd76841104e4/200000058-2a47f2a481/0042.jpg?ph=31e58c129a"
    ></ThemeImageCard>
  ),
  conference: (
    <ThemeImageCard
      key={'conference-image'}
      name="Conference"
      src="https://w0.peakpx.com/wallpaper/172/710/HD-wallpaper-anime-girl-purple-eyes-cyberpunk-anime-girl-anime-cyberpunk-artist-artwork-digital-art.jpg"
    ></ThemeImageCard>
  ),
  event: (
    <ThemeImageCard
      key={'event-image'}
      name="Event"
      src="https://wallpaperaccess.com/full/1761194.jpg"
    ></ThemeImageCard>
  ),
  workshop: (
    <ThemeImageCard
      key={'workshop-image'}
      name="Workshop"
      src="https://i.pinimg.com/originals/fd/09/ef/fd09ef6514db7fb0798f1f0c362bcab0.jpg"
    ></ThemeImageCard>
  ),
  custom: <ThemeImageCard key={'custom-image'} name="Custom" src={CustomImage}></ThemeImageCard>,
}

const themeOptions = [
  {
    value: 'office',
    display: themes['office'],
  },
  {
    value: 'conference',
    display: themes['conference'],
  },
  {
    value: 'event',
    display: themes['event'],
  },
  {
    value: 'workshop',
    display: themes['workshop'],
  },
]

export type SelectThemeProps = CanNextCreateContentProps & {
  onThemeSelected?: (value: any) => void
}

export const SelectTheme = ({ onThemeSelected, onCanNext }: SelectThemeProps) => {
  const { register, getValues, setValue } = useFormContext()
  const themeToggleRef = useRef<MultiToggleRef>(null)
  const [isCustom, setCustom] = useState(false)

  register('theme')

  useEffect(() => {
    setCustom(getValues('theme') === 'custom')
  }, [getValues])

  const handleThemeSelected = useCallback(
    (value: any) => {
      setValue('theme', value)
      onCanNext?.(true)
      onThemeSelected?.(themes[value as SpaceThemeType])
    },
    [setValue, onCanNext, onThemeSelected],
  )

  const handleThemeToggleSelected = useCallback(
    (value: any) => {
      setCustom(false)
      handleThemeSelected(value)
    },
    [handleThemeSelected],
  )

  const handleCustomSelected = useCallback(() => {
    setCustom(true)
    handleThemeSelected('custom')

    themeToggleRef.current?.uncheck()
  }, [handleThemeSelected])

  return (
    <CreateForm>
      <CreateHeader>
        <Text size="large" weight="normal">
          Select Theme
        </Text>
      </CreateHeader>
      <ThemeImageToogle
        ref={themeToggleRef}
        handleSelectedChange={handleThemeToggleSelected}
        options={themeOptions}
        selected={getValues('theme')}
      />
      <BuildOwnButton checked={isCustom} onClick={handleCustomSelected}>
        I’ll build my own
      </BuildOwnButton>
    </CreateForm>
  )
}

const BuildOwnButton = styled(BasicButton)<{ checked?: boolean }>`
  width: 100%;
  border: 1px solid hsla(261, 26%, 22%, 1);
  background: ${(props) => (props.checked ? 'hsla(284, 72%, 55%, 1)' : '')};

  &:hover:not(:disabled) {
    background: hsla(284, 72%, 55%, 1);
  }

  & ${ButtonContent} {
    color: ${(props) => (props.checked ? '#ffffff' : 'hsla(261, 16%, 45%, 1);')};
  }

  &:hover:not(:disabled) ${ButtonContent} {
    color: #ffffff;
  }
`

const ThemeImageToogle = styled(MultiToggle)<MultiToggleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;

  & ${ToggleLabel} {
    outline-width: 0;
    padding: 0;
    border-radius: 12px;
    outline: 2px solid transparent;

    transition: outline-color 0.5s ease;
    overflow: hidden;

    &.selected {
      outline-color: hsla(137, 72%, 55%, 1);
    }

    & ${ThemeImage} {
      transition: transform 0.5s ease;
      transform: scale(1);
    }

    &:hover ${ThemeImage} {
      transform: scale(1.2);
    }
  }
`
