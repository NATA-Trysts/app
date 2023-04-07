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

const TRYSTS_EMAIL_LOGIN = 'trystsplatform@gmail.com'

const MESSAGES = {
  MEMBER: {
    CREATE: 'member-create',
    MOVE: 'member-move',
    ACTION: 'member-action',
    SEND_MESSAGE: 'member-send-message',
  },
  WORLD: {},
  WHITEBOARD: {
    HOST_OPEN: 'host-open-white-board',
    HOST_CLOSE: 'host-close-white-board',
    JOIN: 'member-join-white-board',
    LEAVE: 'member-leave-white-board',
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
  'skin.001.001': '#2b9148',
  'skin.001.002': '#120ead',
  'skin.001.003': '#6e106a',
  'skin.001.004': '#d09789',
  'hair.001.001': 'hair001001001',
  'hair.001.002': 'hair001002001',
  'upper.001.001': 'upper001001001',
  'upper.001.002': 'upper001001002',
  'upper.002.001': 'upper002001001',
  'lower.001.001': 'lower001001001',
  'lower.001.002': 'lower001002001',
  'lower.002.001': 'lower002001001',
  'lower.002.002': 'lower003001001',
  'shoe.001.001': 'shoe001001001',
  'accessory.001.001': 'accessory001001001',
  'accessory.001.002': 'accessory001002001',
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

const JSDELIVR_URL = 'https://cdn.jsdelivr.net/gh/NATA-Trysts/cdn@main'

export {
  ANIMATION_COUNT_MAPPING,
  CHARACTER_CONFIG_VALUE_MAPPING,
  COLOR_PICKER_LIST,
  FILTER_ICON_TO_WHITE,
  INPUT_BORDER,
  INPUT_DROP_SHADOW,
  JSDELIVR_URL,
  MESSAGES,
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
}
export type { NotificationType, ValueMapping }
