import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import CustomImage from '@/assets/page/create/custom.png'
import { BasicButton } from '@/components/Button'
import { Text } from '@/components/Commons'
import { ButtonContent } from '@/components/Commons/Button'
import { MultiToggle, MultiToggleProps, MultiToggleRef, ToggleLabel } from '@/components/Commons/MultiToggle'
import { CustomableTheme } from '@/models/Space'

import { CanNextCreateContentProps, CreateForm, CreateFormHeader } from '..'
import { ThemeImage, ThemeImageCard } from './ThemeImageCard'

export type CreateSpaceTheme = CustomableTheme

type CreateSpaceThemes = {
  [key in CreateSpaceTheme]: ReactNode
}

const themes: CreateSpaceThemes = {
  home: <ThemeImageCard key={'home-image'} name="Home" src="/theme-home.webp"></ThemeImageCard>,
  forest: <ThemeImageCard key={'forest-image'} name="Forest" src="/theme-forest.webp"></ThemeImageCard>,
  city: <ThemeImageCard key={'city-image'} name="City" src="/theme-city.webp"></ThemeImageCard>,
  kidsplayground: (
    <ThemeImageCard key={'kidsplayground-image'} name="Kids Playground" src="/theme-kid.webp"></ThemeImageCard>
  ),
  custom: <ThemeImageCard key={'custom-image'} name="Custom" src={CustomImage}></ThemeImageCard>,
}

type ThemeOptionType = {
  value: CreateSpaceTheme
  display: CreateSpaceThemes[keyof CreateSpaceThemes]
}

const themeOptions: ThemeOptionType[] = [
  {
    value: 'home',
    display: themes['home'],
  },
  {
    value: 'forest',
    display: themes['forest'],
  },
  {
    value: 'city',
    display: themes['city'],
  },
  {
    value: 'kidsplayground',
    display: themes['kidsplayground'],
  },
]

export type SelectThemeProps = CanNextCreateContentProps & {
  defaultTheme?: CustomableTheme
  onThemeSelected?: (value: any) => void
}

export const SelectTheme = ({ onThemeSelected, onCanNext, defaultTheme }: SelectThemeProps) => {
  const { register, getValues, setValue } = useFormContext()
  const themeToggleRef = useRef<MultiToggleRef>(null)
  const [isCustom, setCustom] = useState(false)

  register('theme', { value: defaultTheme })

  useEffect(() => {
    setCustom(getValues('theme') === 'custom')
  }, [getValues])

  const handleThemeSelected = useCallback(
    (value: any) => {
      setValue('theme', value)
      onCanNext?.(true)
      onThemeSelected?.(themes[value as CreateSpaceTheme])
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
      <CreateFormHeader>
        <Text size="large" weight="normal">
          Select Theme
        </Text>
      </CreateFormHeader>
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

    transition: outline-color 0.25s ease;
    overflow: hidden;

    &.selected {
      outline-color: hsla(137, 72%, 55%, 1);
    }

    & ${ThemeImage} {
      transition: transform 0.25s ease;
      transform: scale(1);
    }

    &:hover ${ThemeImage} {
      transform: scale(1.1);
    }
  }
`
