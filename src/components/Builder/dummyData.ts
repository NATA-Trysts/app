import { SubCategoryItem } from '@/stores'

// dummy data
export const subCategoryList: SubCategoryItem[] = [
  {
    id: '1',
    name: 'Orchid Chair',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    img: 'data:image/jpeg;base64,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',
    category: 'chair',
    collection: '1234',
    resolutions: {
      low: 'https://github.com/NATA-Trysts/cdn/raw/main/models/chair.glb',
      medium: 'https://github.com/NATA-Trysts/cdn/raw/main/models/chair.glb',
    },
  },
  {
    id: '2',
    name: 'Cat Meme 1',
    description: 'Cat Meme 1 description lorem ipsum',
    img: 'https://www.newshub.co.nz/home/lifestyle/2019/08/the-top-five-cat-memes-of-all-time-rated/_jcr_content/par/video/image.dynimg.full.q75.jpg',
    category: 'desk',
    collection: '1234',
    resolutions: {
      low: 'https://github.com/NATA-Trysts/cdn/raw/main/models/chair.glb',
      medium: 'https://github.com/NATA-Trysts/cdn/raw/main/models/chair.glb',
    },
  },
]
