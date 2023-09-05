import { ConversationType } from './conversation'
import { SettingsUI } from './provider'

export interface GeneralSettings {
  requestWithBackend: boolean
  locale: string
}

export interface BotMeta {
  value: string
  type: ConversationType
  label: string
  provider: {
    id: string
    name: string
    icon: string
  }
  settingsUI: SettingsUI[]
}
