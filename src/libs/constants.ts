import { CustomColor } from '@/components/Commons'
import { EmailInputStatusType } from '@/stores'

export type ColorListObject = {
  [key in CustomColor]: string
}

type NotificationType = 'notification' | 'warning' | 'error'
type TabCategoryProperty = 'background' | 'filter'

type NotificationColor = {
  [key in NotificationType]: string
}

type NotificationCloseColor = {
  [key in NotificationType]: string
}

type TabCategoryColor = {
  [key in TabCategoryProperty]: string
}

type InputStatusColor = {
  [key in EmailInputStatusType]: string
}

const COLOR_PICKER_LIST: ColorListObject = {
  purple: 'hsla(286, 65%, 66%, 1)',
  green: 'hsla(137, 65%, 66%, 1)',
  blue: 'hsla(216, 65%, 66%, 1)',
  pink: 'hsla(291, 65%, 66%, 1)',
  yellow: 'hsla(36, 65%, 66%, 1)',
}

const NOTIFICATION_COLOR: NotificationColor = {
  notification: 'hsla(205.43, 65%, 54%, 0.7)',
  warning: 'hsla(54.089, 81%, 51%, 0.7)',
  error: 'hsla(0, 55%, 43%, 0.7)',
}

const NOTIFICATION_CLOSE_COLOR: NotificationCloseColor = {
  notification: 'hsla(205.091, 45%, 24%, 0.8)',
  warning: 'hsla(205.091, 45%, 24%, 0.8)', // TODO: update right color
  error: 'hsla(205.091, 45%, 24%, 0.8)', // TODO: update right color
}

const TAB_CATEGORY_COLOR: TabCategoryColor = {
  background: 'linear-gradient(90deg, #FF958A -1.56%, #FF6E88 50.54%, #FF93A7 101.56%)',
  filter:
    'drop-shadow(0px 0px 48px rgba(230, 101, 101, 0.14)) drop-shadow(0px 0px 25.0368px rgba(230, 101, 101, 0.101248)) drop-shadow(0px 0px 11.7504px rgba(230, 101, 101, 0.078624)) drop-shadow(0px 0px 5.1456px rgba(230, 101, 101, 0.061376)) drop-shadow(0px 0px 2.2272px rgba(230, 101, 101, 0.038752))',
}

const FILTER_ICON_TO_WHITE =
  'brightness(0) saturate(100%) invert(100%) sepia(13%) saturate(7481%) hue-rotate(291deg) brightness(116%) contrast(112%)'

const INPUT_DROP_SHADOW: InputStatusColor = {
  empty: 'none',
  invalid:
    'drop-shadow(0px 10px 41px rgba(218, 33, 33, 0.49)) drop-shadow(0px 5.0625px 17.8734px rgba(218, 33, 33, 0.33075)) drop-shadow(0px 2px 6.6625px rgba(218, 33, 33, 0.245)) drop-shadow(0px 0.4375px 2.37031px rgba(218, 33, 33, 0.15925))',
  valid: 'drop-shadow(0px 5px 36px rgba(87, 130, 187, 0.51)) drop-shadow(0px 1px 5.85px rgba(87, 130, 187, 0.255));',
  errorPending:
    'drop-shadow(0px 10px 41px rgba(218, 33, 33, 0.49)) drop-shadow(0px 5.0625px 17.8734px rgba(218, 33, 33, 0.33075)) drop-shadow(0px 2px 6.6625px rgba(218, 33, 33, 0.245)) drop-shadow(0px 0.4375px 2.37031px rgba(218, 33, 33, 0.15925))',
}

const INPUT_BORDER: InputStatusColor = {
  empty: 'transparent',
  valid: '#3B79D5',
  invalid: '#DA2121',
  errorPending: '#DA2121',
}

const TRYSTS_EMAIL_LOGIN = 'noreply@trysts.io'

const MESSAGES = {
  MEMBER: {
    CREATE: 'member-create',
    MOVE: 'member-move',
    ACTION: 'member-action',
    SEND_MESSAGE: 'member-send-message',
    CHANGE_AVATAR: 'member-change-avatar',
  },
  WORLD: {},
  WHITEBOARD: {
    HOST_OPEN: 'host-open-white-board',
    HOST_CLOSE: 'host-close-white-board',
    JOIN: 'member-join-white-board',
    LEAVE: 'member-leave-white-board',
  },
  SCREENSHARE: {
    OPEN: 'open-screen-share',
    CLOSE: 'close-screen-share',
  },
}

const PLAN_BORDER = {
  individual: '#68646E',
  startup: '#FF938A',
  enterprise: '#66BDFF',
}

const PLAN_BUTTON_COLOR = {
  individual: '#2c2c2c',
  startup:
    'linear-gradient(90deg, rgba(255, 147, 138, 0.8) 0%, rgba(255, 111, 137, 0.8) 47.92%, rgba(255, 145, 166, 0.8) 100%)',
  enterprise: 'linear-gradient(90deg, rgba(103, 189, 255, 0.8) 0%, rgba(162, 235, 252, 0.8) 100%)',
}

const PLAN_BOX_SHADOW = {
  individual: 'none',
  startup: '0px 45px 80px rgba(214, 106, 106, 0.11), 0px 9px 13px rgba(214, 106, 106, 0.055)',
  enterprise: '0px 38px 80px rgba(107, 166, 212, 0.12), 0px 7.6px 13px rgba(107, 166, 212, 0.06)',
}

const PLAN_NAME_BACKGROUND_TEXT = {
  individual: 'white',
  startup: 'linear-gradient(90deg, #FF938A 0%, #FF6F89 51.2%, #FF92A6 100%)',
  enterprise: 'linear-gradient(90deg, #65BCFF 0%, #A3ECFC 100%)',
}

const PLAN_ICON_FILTER = {
  individual: 'none',
  startup:
    'brightness(0) saturate(100%) invert(94%) sepia(38%) saturate(6245%) hue-rotate(301deg) brightness(108%) contrast(100%)',
  enterprise:
    'brightness(0) saturate(100%) invert(61%) sepia(12%) saturate(2012%) hue-rotate(171deg) brightness(109%) contrast(107%)',
}

const STRIPE_API_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY

type ValueMapping<T> = {
  [key: string]: T
}

const CHARACTER_CONFIG_VALUE_MAPPING: ValueMapping<string> = {
  'skin.default': '#E7C693',
  'skin.001.001.001': '#2b9148',
  'skin.001.001.002': '#120ead',
  'skin.001.001.003': '#6e106a',
  'skin.001.001.004': '#d09789',
  // HAIR
  'hair.001.001.001': 'hair001001001',
  'hair.001.001.002': 'hair001001002',
  'hair.001.001.003': 'hair001001003',
  'hair.001.001.004': 'hair001001004',
  'hair.001.001.005': 'hair001001005',
  'hair.001.001.006': 'hair001001006',
  'hair.001.001.007': 'hair001001007',
  'hair.001.001.008': 'hair001001008',
  'hair.001.002.002': 'hair001002002',
  'hair.001.002.003': 'hair001002003',
  'hair.001.002.004': 'hair001002004',
  'hair.001.002.001': 'hair001002001',
  // UPPER
  'upper.001.001.001': 'upper001001001',
  'upper.001.001.002': 'upper001001002',
  'upper.001.001.003': 'upper001001003',
  'upper.001.001.004': 'upper001001004',
  'upper.001.001.005': 'upper001001005',
  'upper.001.001.006': 'upper001001006',
  'upper.001.002.001': 'upper001002001',
  'upper.001.002.002': 'upper001002002',
  'upper.001.002.003': 'upper001002003',
  'upper.001.002.004': 'upper001002004',
  'upper.001.002.005': 'upper001002005',
  'upper.001.002.006': 'upper001002006',
  'upper.002.001.001': 'upper002001001',
  'upper.002.001.002': 'upper002001002',
  'upper.002.001.003': 'upper002001003',
  'upper.002.001.004': 'upper002001004',
  'upper.002.001.005': 'upper002001005',
  'upper.002.001.006': 'upper002001006',
  'upper.002.001.007': 'upper002001007',
  'upper.002.001.008': 'upper002001008',
  // LOWER
  'lower.001.001.001': 'lower001001001',
  'lower.001.001.002': 'lower001001002',
  'lower.001.001.003': 'lower001001003',
  'lower.001.001.004': 'lower001001004',
  'lower.001.002.001': 'lower001002001',
  'lower.001.002.002': 'lower001002002',
  'lower.001.002.003': 'lower001002003',
  'lower.001.002.004': 'lower001002004',
  'lower.001.002.005': 'lower001002005',
  'lower.001.002.006': 'lower001002006',
  'lower.001.002.007': 'lower001002007',
  'lower.001.002.008': 'lower001002008',
  'lower.001.002.009': 'lower001002009',
  'lower.001.002.010': 'lower001002010',
  'lower.001.002.011': 'lower001002011',
  'lower.001.002.012': 'lower001002012',
  'lower.001.002.013': 'lower001002013',
  'lower.001.002.014': 'lower001002014',
  'lower.001.002.015': 'lower001002015',
  'lower.001.003.001': 'lower001003001',
  'lower.001.003.002': 'lower001003002',
  'lower.001.003.003': 'lower001003003',
  'lower.001.003.004': 'lower001003004',
  'lower.001.003.005': 'lower001003005',
  'lower.001.003.006': 'lower001003006',
  'lower.001.003.007': 'lower001003007',
  'lower.001.003.008': 'lower001003008',
  'lower.001.003.009': 'lower001003009',
  'lower.001.003.010': 'lower001003010',
  'lower.001.003.011': 'lower001003011',
  // SHOE
  'shoe.001.001.001': 'shoe001001001',
  'shoe.001.001.002': 'shoe001001002',
  'shoe.001.001.003': 'shoe001001003',
  'shoe.001.001.004': 'shoe001001004',
  'shoe.001.001.005': 'shoe001001005',
  'shoe.001.001.006': 'shoe001001006',
  'shoe.001.001.007': 'shoe001001007',
  'shoe.001.001.008': 'shoe001001008',
  'shoe.001.001.009': 'shoe001001009',
  'shoe.001.001.010': 'shoe001001010',
  'shoe.001.002.001': 'shoe001002001',
  'shoe.001.002.002': 'shoe001002002',
  'shoe.001.002.003': 'shoe001002003',
  'shoe.001.002.004': 'shoe001002004',
  // ACCESSORY
  'accessory.001.001.001': 'accessory001001001',
  'accessory.001.001.002': 'accessory001001002',
  'accessory.001.001.003': 'accessory001001003',
  'accessory.001.001.004': 'accessory001001004',
  'accessory.001.001.005': 'accessory001001005',
  'accessory.001.002.001': 'accessory001002001',
  'accessory.001.002.002': 'accessory001002002',
  'accessory.001.002.003': 'accessory001002003',
  'accessory.001.002.004': 'accessory001002004',
  'accessory.001.002.005': 'accessory001002005',
  'accessory.001.003.001': 'accessory001003001',
  'accessory.001.003.002': 'accessory001003002',
  'accessory.001.003.003': 'accessory001003003',
  'accessory.001.003.004': 'accessory001003004',
  'accessory.001.003.005': 'accessory001003005',
}

const MATERIAL_MAPPING = {
  'accessory.001.001.002': 'Material.016',

  'accessory.001.001.005': 'Material.017',

  'accessory.001.001.001': 'Material',

  'accessory.001.001.003': 'Material.003',

  'accessory.001.001.004': 'Material.015',

  'accessory.001.002.004': 'Material.027',

  'accessory.001.002.005': 'Material.028',

  'accessory.001.002.001': 'Material.024',

  'accessory.001.002.003': 'Material.026',

  'accessory.001.002.002': 'Material.025',

  'accessory.001.003.003': 'Material.044',

  'accessory.001.003.001': 'Material.042',

  'accessory.001.003.004': 'Material.045',

  'accessory.001.003.002': 'Material.043',

  'hair.001.001.002': 'Material.034',

  'hair.001.001.001': 'hair',

  'hair.001.001.003': 'Material.035',

  'hair.001.001.004': 'Material.036',

  'accessory.001.003.005': 'Material.046',

  'hair.001.001.005': 'Material.037',

  'hair.001.001.007': 'Material.039',

  'hair.001.001.006': 'Material.038',

  'hair.001.002.002': 'Material.048',

  'hair.001.001.008': 'Material.040',

  'hair.001.002.004': 'Material.047',

  'hair.001.002.003': 'Material.049',

  'lower.001.001.001': 'Material.051',

  'hair.001.002.001': 'Material.050',

  'lower.001.002.002': 'Material.055',

  'lower.001.001.003': 'Material.053',

  'lower.001.001.002': 'Material.052',

  'lower.001.001.004': 'Material.053',

  'lower.001.002.001': 'Material.054',

  'lower.001.002.003': 'Material.056',

  'lower.001.002.004': 'Material.057',

  'lower.001.002.006': 'Material.059',

  'lower.001.002.007': 'Material.077',

  'lower.001.002.008': 'Material.078',

  'lower.001.002.011': 'Material.081',

  'lower.001.002.005': 'Material.058',

  'lower.001.002.010': 'Material.080',

  'lower.001.002.012': 'Material.082',

  'lower.001.002.013': 'Material.083',

  'lower.001.002.015': 'Material.085',

  'lower.001.002.009': 'Material.079',

  'lower.001.002.014': 'Material.084',

  'lower.001.003.004': 'Material.060',

  'lower.001.003.001': 'Material.020',

  'lower.001.003.002': 'Material.022',

  'lower.001.003.005': 'Material.060',

  'lower.001.003.006': 'Material.061',

  'lower.001.003.008': 'Material.063',

  'lower.001.003.003': 'Material.029',

  'lower.001.003.007': 'Material.062',

  'shoe.001.001.002': 'Material.072',

  'shoe.001.001.006': 'Material.071',

  'lower.001.003.010': 'Material.065',

  'lower.001.003.009': 'Material.064',

  'lower.001.003.011': 'Material.066',

  'shoe.001.001.010': 'Material.076',

  'shoe.001.001.001': 'Material.067',

  'shoe.001.001.004': 'Material.069',

  'shoe.001.001.005': 'Material.070',

  'shoe.001.001.003': 'Material.068',

  'shoe.001.002.004': 'Material.033',

  'shoe.001.001.008': 'Material.074',

  'shoe.001.001.009': 'Material.075',

  'shoe.001.001.007': 'Material.073',

  'shoe.001.002.002': 'Material.005',

  'shoe.001.002.003': 'Material.032',

  'shoe.001.002.001': 'Material.004',

  'upper.001.001.002': 'Material.086',

  'upper.001.001.003': 'Material.088',

  'upper.001.001.006': 'Material.091',

  'upper.001.002.006': 'Material.011',

  'upper.001.002.001': 'neon',

  'upper.001.001.004': 'Material.089',

  'upper.002.001.004': 'Material.094',

  'upper.001.001.001': 'Material.087',

  'upper.001.002.002': 'Material.010',

  'upper.001.002.004': 'Material.014',

  'upper.001.001.005': 'Material.090',

  'upper.001.002.005': 'Material.012',

  'upper.002.001.001': 'Material.092',

  'upper.002.001.008': 'Material.009',

  'upper.002.001.003': 'Material.093',

  'upper.002.001.005': 'Material.006',

  'upper.002.001.007': 'Material.008',

  'upper.001.002.003': 'Material.013',

  'upper.002.001.002': 'Material.093',

  'upper.002.001.006': 'Material.007',
}

const ANIMATION_COUNT_MAPPING: ValueMapping<number> = {
  angry: 1,
  bow: 1,
  cheer: 1,
  clap: 1,
  dance: 1,
  discuss: 1,
  fall: 3,
  hit: 3,
  idle: 5,
  kick: 4,
  lay: 1,
  punch: 3,
  run: 1,
  sad: 2,
  sit: 4,
  victory: 1,
  wave: 1,
  walk: 1,
}

const ULTILITY_SIZE_MAPPING = {
  chat: {
    name: 'Chat',
    width: '70%',
  },
  member: {
    name: 'Member',
    width: '60%',
  },
  setting: {
    name: 'Setting',
    width: '60%',
  },
}

const JSDELIVR_URL = 'https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@main'

// chair, desk, decoration, layout

const MODELS_DATA = [
  {
    uuid: 'desk-d61cf1db-b68e-4e4e-9bbd-797962b63dbf',
    name: 'Accent Table',
    category: 'desk',
    description:
      'Complete your room aesthetic with this stylish accent table. Its small footprint makes it ideal for tight spaces, while its sleek design and choice of materials complement any decor.',
    thumbnail: '/thumbnail/accent-table.webp',
  },
  {
    uuid: 'plant-10680d63-f2cf-4f30-ae45-3d309f4e4464',
    name: 'Apple Tree',
    category: 'plant',
    description:
      'Bring the beauty of nature into your space with this stunning apple tree. Its colorful and delicious fruit also makes it a functional addition to any kitchen or dining area. ',
    thumbnail: '/thumbnail/apple-tree.webp',
  },
  {
    uuid: 'decoration-b186a8a9-9e0e-483e-9779-18abfe477fa3',
    name: 'Art board',
    category: 'decoration',
    description:
      'This art board is a great addition to any room. Its sleek design and choice of materials complement any decor.',
    thumbnail: '/thumbnail/artboard.webp',
  },
  {
    uuid: 'bath-2c419d45-c99e-45d6-8554-f0dbcaf4a6cd',
    name: 'Bath',
    category: 'bath',
    description:
      'Transform your bathroom into a luxurious spa-like retreat with this elegant bath. Its sleek design and comfortable size make it perfect for relaxing after a long day.',
    thumbnail: '/thumbnail/bath.webp',
  },
  {
    uuid: 'bath-1c61a31c-4164-4cad-8ca5-73ac3168ad2d',
    name: 'Bathroom Rug',
    category: 'bath',
    description:
      'Complete your bathroom aesthetic with this stylish rug. Its small footprint makes it ideal for tight spaces, while its sleek design and choice of materials complement any decor.',
    thumbnail: '/thumbnail/bathroom-rug.webp',
  },
  {
    uuid: 'chair-868c1619-2cdf-4249-bb74-2c9309def2a2',
    name: 'Bean Bag Chair Coffee',
    category: 'chair',
    description:
      'Get cozy in style with this coffee-colored bean bag chair. With its versatile design and compact size, you can easily move it around to create the perfect spot for relaxation.',
    thumbnail: '/thumbnail/bean-bag-chair-coffee.webp',
  },
  {
    uuid: 'chair-908ea24b-1e9f-47b2-973b-a6c4128b3f7f',
    name: 'Bean Bag Chair',
    category: 'chair',
    description:
      'Add a fun and casual seating option to your space with this comfortable bean bag chair. Its soft and supportive filling conforms to your body, providing a cozy spot to relax or read a book.',
    thumbnail: '/thumbnail/bean-bag-chair.webp',
  },
  {
    uuid: 'cabinet-41223ee1-e7fd-48a0-ab74-677eae6a78b2',
    name: 'Bed Cabinet',
    category: 'cabinet',
    description:
      'Maximize your bedroom storage and functionality with this sleek bed cabinet. Its modern design offers a sophisticated touch to your space, while its practical features provide ample storage for your bedroom essentials.',
    thumbnail: '/thumbnail/bed-cabinet.webp',
  },
  {
    uuid: 'decoration-308b504b-d99a-4005-a265-503b2de768e5',
    name: 'Bookshelf',
    category: 'decoration',
    description:
      'Add a touch of modern style to your space with this sleek bookshelf. Its versatile design and compact size make it perfect for displaying your favorite books, photos, and other decorative items.',
    thumbnail: '/thumbnail/bookshelf.webp',
  },
  {
    uuid: 'decoration-4781c552-af73-4d69-bbab-33b21bfcb77a',
    name: 'Bubble Lamp',
    category: 'decoration',
    description:
      'Create a dreamy and mesmerizing atmosphere in your space with this stunning bubble lamp. Its unique design features a cluster of glass orbs that emit a soft and diffused light, creating a soothing and calming ambiance.',
    thumbnail: '/thumbnail/bubble-lamp.webp',
  },
  {
    uuid: 'cabinet-a99b7fbf-37f3-49a1-8657-d0bcc2997d98',
    name: 'Cabinet Bathroom',
    category: 'cabinet',
    description:
      'Organize your bathroom in style with this sleek and practical bathroom cabinet. Its elegant design offers a sophisticated touch to your space, while its practical features provide ample storage for your bathroom essentials.',
    thumbnail: '/thumbnail/cabinet-bathroom.webp',
  },
  {
    uuid: 'cabinet-29524f5b-0486-446e-a01f-181c4b7e5402',
    name: 'Cabinet Book',
    category: 'cabinet',
    description:
      '"Display your favorite books and decor items in style with this elegant book cabinet. Its modern design offers a sophisticated touch to your space, while its practical features provide ample storage for your book collection.',
    thumbnail: '/thumbnail/cabinet-book.webp',
  },
  {
    uuid: 'cabinet-28f52db2-46da-4bb1-86da-ef5d256099ff',
    name: 'Cabinet',
    category: 'cabinet',
    description:
      'Organize your space in style with this elegant cabinet. Its sleek and modern design offers a sophisticated touch to your space, while its practical features provide ample storage for your essentials.',
    thumbnail: '/thumbnail/cabinet.webp',
  },
  {
    uuid: 'decoration-26e29954-007d-408f-9243-86c518bfc035',
    name: 'Carpet',
    category: 'decoration',
    description:
      'Add warmth and comfort to your space with this cozy and stylish carpet. Its plush texture provides a soft and comfortable surface to walk on, while its beautiful design adds a touch of elegance to your decor.',
    thumbnail: '/thumbnail/carpet.webp',
  },
  {
    uuid: 'chair-bf76df41-9c51-4ae4-8d26-6a54e0e2265d',
    name: 'Chair',
    category: 'chair',
    description:
      'With modern design offers a sophisticated touch to your decor, while its comfortable seat provides a cozy and relaxing seating experience. Whether you use it in your living room, bedroom, or home office, this chair is the perfect addition to any space.',
    thumbnail: '/thumbnail/chair.webp',
  },
  {
    uuid: 'desk-68eccc2e-9d7b-4c66-972e-9aca69b76505',
    name: 'Circle Table',
    category: 'desk',
    description:
      'Add a touch of elegance to your space with this beautiful circle table. Its sleek and modern design offers a sophisticated touch to your decor, while its compact size makes it a practical addition to any room in your home.',
    thumbnail: '/thumbnail/circle-table.webp',
  },
  {
    uuid: 'desk-58d0bc2c-871f-45ae-a73d-178c0ad41f31',
    name: 'Desk',
    category: 'desk',
    description:
      'With multiple compartments and drawers of this desk, you can easily organize your items and keep them within reach. Its sturdy construction ensures that it can handle the weight of your computer and other items.',
    thumbnail: '/thumbnail/desk.webp',
  },
  {
    uuid: 'chair-5b879d1e-ca56-49e2-8af8-f348dc043f03',
    name: 'Dining Chair',
    category: 'chair',
    description:
      'Elevate your dining experience with these beautiful and comfortable dining chairs. Their sleek and modern design offers a sophisticated touch to your decor, while their comfortable seats provide a cozy and relaxing dining experience.',
    thumbnail: '/thumbnail/dinning-chair.webp',
  },
  {
    uuid: 'desk-bb79046f-20c9-4eb3-b527-5470bfe8e967',
    name: 'Dining Table',
    category: 'desk',
    description:
      'Gather around this beautiful dining table and create memories that will last a lifetime. Its sleek and modern design offers a sophisticated touch to your decor, while its practical features provide ample space for your family and friends to enjoy a meal together.',
    thumbnail: '/thumbnail/dinning-table.webp',
  },
  {
    uuid: 'decoration-1510441a-f8e8-444e-aea8-cc530a0fedb6',
    name: 'Double Bed',
    category: 'decoration',
    description:
      'A furniture item commonly used in bedroom spaces. In space builders, a double bed is typically included as a foundational piece for designing a bedroom.',
    thumbnail: '/thumbnail/double-bed.webp',
  },
  {
    uuid: 'decoration-3e35cb45-7d05-474d-8529-663638698841',
    name: 'Fan',
    category: 'decoration',
    description:
      'Keep your space cool and comfortable with this sleek and modern fan. Its compact size makes it a practical addition to any room in your home, while its powerful and adjustable airflow ensures that you can customize the temperature to your liking.',
    thumbnail: '/thumbnail/fan.webp',
  },
  {
    uuid: 'cabinet-d6ad2e25-e3ef-407f-aeda-496c067b3762',
    name: 'Kitchen Cabinet',
    category: 'cabinet',
    description:
      'Organize your kitchen in style with this sleek and practical kitchen cabinet. Its elegant design offers a sophisticated touch to your space, while its practical features provide ample storage for your kitchen essentials.',
    thumbnail: '/thumbnail/kitchen-cabinet.webp',
  },
  {
    uuid: 'decoration-52dfe16a-b978-43bb-b90b-1981b8be5d6e',
    name: 'Kitchen Rug',
    category: 'decoration',
    description:
      'Add a touch of comfort and style to your kitchen with this beautiful kitchen rug. Its soft and plush texture provides a cozy and inviting feel, while its practical features make it a great addition to any kitchen.',
    thumbnail: '/thumbnail/kitchen-reg.webp',
  },
  {
    uuid: 'decoration-3fca352a-ef32-42af-ac04-fa045253c5d2',
    name: 'Kitchen Shelf',
    category: 'decoration',
    description:
      'Organize your kitchen and maximize your storage space with this beautiful kitchen shelf. Its sleek and modern design offers a sophisticated touch to your decor, while its practical features provide ample space for your kitchen essentials.',
    thumbnail: '/thumbnail/kitchen-shelf.webp',
  },
  {
    uuid: 'decoration-792e50e3-5999-4589-a9cc-e3a1a0a3b5c7',
    name: 'Leaf Plant',
    category: 'decoration',
    description:
      'Its lush green foliage provides a calming and refreshing feel, while its natural design offers a touch of elegance to your decor.',
    thumbnail: '/thumbnail/leaf-plant.webp',
  },
  {
    uuid: 'chair-312d6ba3-6e09-42c6-af59-6d4a7d9325d5',
    name: 'Leather Sofa',
    category: 'chair',
    description:
      'Upgrade your living room with this luxurious leather sofa. Its sleek and modern design offers a sophisticated touch to your decor, while its plush cushions provide ultimate comfort for you and your guests.',
    thumbnail: '/thumbnail/leather-sofa.webp',
  },
  {
    uuid: 'decoration-a956af13-de12-4bf7-8871-04db2b847402',
    name: 'One Leg Lamp',
    category: 'decoration',
    description:
      'Add a touch of contemporary style to your space with this unique one-leg lamp. Its sleek and minimalist design offers a modern touch to your decor, while its practical features provide ample lighting for your space.',
    thumbnail: '/thumbnail/one-leg-lamp.webp',
  },
  {
    uuid: 'chair-73a25ea2-3079-4c49-9673-6675cfaa32a2',
    name: 'Park bench',
    category: 'chair',
    description:
      'Bring the charm of a park to your outdoor space with this beautiful park bench. Its classic design offers a timeless touch to your decor, while its sturdy construction provides a durable and comfortable seating option.',
    thumbnail: '/thumbnail/park-bench.webp',
  },
  {
    uuid: 'decoration-d414bcda-2df6-48c3-9ba6-8017925e733f',
    name: 'Pattern Rug',
    category: 'decoration',
    description:
      'Add a touch of personality to your space with this stylish patterned rug. Its unique design offers a bold and vibrant touch to your decor, while its soft and comfortable texture provides a cozy and inviting feel to your space.',
    thumbnail: '/thumbnail/pattern-rug.webp',
  },
  {
    uuid: 'decoration-56fb707b-8b61-4feb-af13-f90544fc4a15',
    name: 'Pear Tree',
    category: 'plant',
    description:
      'Bring the beauty of nature to your outdoor space with this stunning pear tree. Its low maintenance requirements ensure that it can thrive in a variety of climates, making it a practical addition to any garden or landscape.',
    thumbnail: '/thumbnail/pear-tree.webp',
  },
  {
    uuid: 'decoration-628e56c5-095b-4e55-9989-d4a3696afec6',
    name: 'Refrigerator',
    category: 'decoration',
    description:
      'Keep your food and beverages fresh and cool with this sleek and modern refrigerator. Its spacious interior provides ample storage space for your food and beverages, while its practical features ensure that it can handle the weight of your items.',
    thumbnail: '/thumbnail/refrigerator.webp',
  },
  {
    uuid: 'chair-c266dcd6-0dfe-49a1-be25-cf5c9161ae52',
    name: 'Relax Chair',
    category: 'chair',
    description:
      'Relax and unwind in this comfortable and stylish relax chair. Its sleek and modern design offers a sophisticated touch to your decor, while its plush cushions provide ultimate comfort for you and your guests.',
    thumbnail: '/thumbnail/relax-chair.webp',
  },
  {
    uuid: 'decoration-4504276e-81f1-4882-97af-7b86d604c36d',
    name: 'Shiba',
    category: 'decoration',
    description:
      'Bring the beauty of nature to your space with this adorable Shiba. Its soft and cuddly texture provides a cozy and inviting feel, while its playful design offers a touch of personality to your decor.',
    thumbnail: '/thumbnail/shiba.webp',
  },
  {
    uuid: 'chair-0b9eb21c-5a3f-4e71-b914-e817cc5ecd0e',
    name: 'Sofa',
    category: 'chair',
    description:
      'Upgrade your living room with this luxurious sofa. Its sleek and modern design offers a sophisticated touch to your decor, while its plush cushions provide ultimate comfort for you and your guests.',
    thumbnail: '/thumbnail/sofa.webp',
  },
  {
    uuid: 'decoration-1776bb75-87b3-4cad-ac68-1105e4a4ceb3',
    name: 'Triangle Pattern Rug',
    category: 'decoration',
    description:
      'Elevate your space with this stylish triangle pattern rug. Its unique design offers a contemporary touch to your decor, while its soft and comfortable texture provides a cozy and inviting feel to your space.',
    thumbnail: '/thumbnail/triangle-pattern-rug.webp',
  },
  {
    uuid: 'decoration-fd9ee033-e41c-4210-8e6b-de57e90bf23a',
    name: 'TV Stand',
    category: 'decoration',
    description:
      'Upgrade your entertainment experience with this sleek and modern TV stand. Its clean lines and simple design offer a contemporary touch to your decor, while its sturdy construction provides a reliable and durable support for your TV and other media equipment.',
    thumbnail: '/thumbnail/tv-stand.webp',
  },
  {
    uuid: 'layout-40eea2e9-124e-48d9-8397-5284a9e8e97f',
    name: 'Wall Layout Home',
    category: 'layout',
    description:
      'Create a stylish and functional home with this customizable wall layout. Designed to help you easily build your virtual space, this layout features a variety of wall elements, including shelves, cabinets, and artwork, that can be arranged to suit your specific needs and preferences.',
    thumbnail: '/thumbnail/wall-layout-home.webp',
  },
] as const

export type ModelUUID = (typeof MODELS_DATA)[number]['uuid']

export {
  ANIMATION_COUNT_MAPPING,
  CHARACTER_CONFIG_VALUE_MAPPING,
  COLOR_PICKER_LIST,
  FILTER_ICON_TO_WHITE,
  INPUT_BORDER,
  INPUT_DROP_SHADOW,
  JSDELIVR_URL,
  MATERIAL_MAPPING,
  MESSAGES,
  MODELS_DATA,
  NOTIFICATION_CLOSE_COLOR,
  NOTIFICATION_COLOR,
  PLAN_BORDER,
  PLAN_BOX_SHADOW,
  PLAN_BUTTON_COLOR,
  PLAN_ICON_FILTER,
  PLAN_NAME_BACKGROUND_TEXT,
  STRIPE_API_KEY,
  TAB_CATEGORY_COLOR,
  TRYSTS_EMAIL_LOGIN,
  ULTILITY_SIZE_MAPPING,
}
export type { NotificationType, ValueMapping }
