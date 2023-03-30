import axios, { AxiosResponse } from 'axios'
import { motion } from 'framer-motion'
import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { Text } from '@/components/Commons'
import { Popover } from '@/components/Popover'
import { convertCustomFormatedResponseToObject } from '@/libs/utils'
import { useBuilderStore } from '@/stores'

//#region
const GeneratorButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 8px;
`

const Generator = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  background: linear-gradient(88.23deg, #2e74d4 0%, #7988d6 100%);
  color: #fff;
  transition: scale 0.25s ease;

  :active {
    scale: 0.95;
  }
`

const GPTInteractionContainer = styled.div`
  width: 320px;
  height: 220px;
  background: #191a1d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const IllustrationWrapper = styled.div`
  padding: 16px;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Illustration = styled.img`
  width: auto;
  height: 100%;
  border-radius: 12px;
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 46px;
  text-align: center;
`
const Description = styled(Text)`
  color: #8e8e8e;
  text-align: center;
  font-size: 12px;
  line-height: 5px;
`

const PromptContainer = styled.form`
  width: 100%;
  height: 52px;
  padding: 8px;
`

const PromptInput = styled(motion.input)`
  background: #212225;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 9px 12px 8px;
  width: 304px;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  z-index: 1;
`

const PromptSubmitButton = styled(motion.button)`
  outline: none;
  border: none;
  border-radius: 8px;
  background: linear-gradient(88.23deg, #2e74d4 0%, #7988d6 100%);
  width: 36px;
  height: 36px;
  position: absolute;
  right: 8px;
  z-index: 0;
  transition: scale 0.2s ease;

  :hover {
    scale: 1.1;
  }

  :active {
    scale: 1;
  }
`
//#endregion

const PLACEHOLDERS = [
  'I want a cozy chair',
  'Generate a brownny sofa',
  'I want a gamming chair',
  'Generate a chair with warm color',
]

const GPTButton = () => {
  const [prompt, setPrompt] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const addModel = useBuilderStore((state) => state.addModel)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const source = axios.CancelToken.source()
    const url = 'http://0.0.0.0:8000/generate'
    const data = { prompt }

    try {
      if (loading) return
      setLoading(true)
      const response: AxiosResponse = await axios.post(url, data, { cancelToken: source.token })
      const generatedModel = convertCustomFormatedResponseToObject(response.data.completion.choices[0].text)

      addModel({
        uuid: uuidv4(),
        name: generatedModel.name,
        id: generatedModel.id,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        color: generatedModel.color,
      })

      setLoading(false)
    } catch (error) {
      console.error(error)
      if (axios.isCancel(error)) {
        console.error('Request cancelled:', error)
      } else {
        console.error('Error:', error)
      }
      setLoading(false)
    }
  }

  return (
    <Popover
      align="end"
      content={
        <GPTInteractionContainer>
          <IllustrationWrapper>
            <Illustration
              alt="GPT illustration"
              loading="lazy"
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
          </IllustrationWrapper>
          <DescriptionContainer>
            {loading ? (
              <Description size="medium" weight="lighter">
                Hang tight ...
              </Description>
            ) : (
              <Description size="medium" weight="lighter">
                Describe what you want
                <br />
                in a detailed description about your furniture
              </Description>
            )}
          </DescriptionContainer>
          <PromptContainer onSubmit={onSubmit}>
            <PromptInput
              animate={{
                width: prompt ? '262px' : '304px',
              }}
              initial={{
                width: '304px',
              }}
              placeholder={`Ex: ${PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]}`}
              transition={{
                delay: prompt ? 0 : 0.1,

                width: {
                  duration: 0.1,
                },
              }}
              type="text"
              onChange={(e) => setPrompt(e.target.value)}
            />
            <PromptSubmitButton
              animate={{
                opacity: prompt ? 1 : 0,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: prompt ? 0.1 : 0,
                width: {
                  duration: 0.1,
                },
              }}
            >
              ✨
            </PromptSubmitButton>
          </PromptContainer>
        </GPTInteractionContainer>
      }
      side="right"
      sideOffset={8}
    >
      <GeneratorButtonContainer>
        <Generator>
          <Text size="medium" weight="normal">
            Generate furniture
          </Text>
        </Generator>
      </GeneratorButtonContainer>
    </Popover>
  )
}

export default GPTButton
