import { Environment, useTexture } from '@react-three/drei'
import { Suspense } from 'react'
import { Texture } from 'three'

import { BaseCharacter } from '@/components/Member'
import { ValueMapping } from '@/libs/constants'
import { useEditCharacterStore } from '@/stores'

export const Character = () => {
  const categorySelectedItemIds = useEditCharacterStore((state) => state.categorySelectedItemIds)

  const [tattooSpot, tattooDragon, tattooRing] = useTexture(
    ['/textures/t.tattoo.001.001.png', '/textures/t.tattoo.001.002.png', '/textures/t.tattoo.001.003.png'],
    (textures) => {
      ;(textures as Texture[]).map((t) => (t.flipY = false))
    },
  )

  const TATTOO_MAPPING: ValueMapping<Texture> = {
    'tattoo.001.001.001': tattooSpot,
    'tattoo.001.001.002': tattooDragon,
    'tattoo.001.001.003': tattooRing,
  }

  return (
    <Suspense fallback={null}>
      <Environment preset="city" />
      <ambientLight intensity={0.7} />
      <BaseCharacter
        accessory={categorySelectedItemIds.get('accessory')}
        action={['idle.000', false]}
        hair={categorySelectedItemIds.get('hair')}
        lower={categorySelectedItemIds.get('lower')}
        scale={0.013}
        shoe={categorySelectedItemIds.get('shoe')}
        skin={categorySelectedItemIds.get('skin')}
        tattoo={
          TATTOO_MAPPING[
            ((categorySelectedItemIds.get('tattoo') as any).length > 0
              ? (categorySelectedItemIds.get('tattoo') as any)[0].itemId
              : '') as any
          ]
        }
        upper={categorySelectedItemIds.get('upper')}
      />
    </Suspense>
  )
}
