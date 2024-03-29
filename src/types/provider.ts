import type { ConversationType } from './conversation'
import type { Message } from './message'

export interface Provider {
  id: string
  icon: string
  name: string
  globalSettings?: SettingsUI[]
  bots: Bot[]
  supportCallMethod?: 'both' | 'frontend' | 'backend'
  handlePrompt: (
    payload: HandlerPayload,
    signal?: AbortSignal
  ) => Promise<PromptResponse>
  handleRapidPrompt?: (
    prompt: string,
    globalSettings: SettingsPayload
  ) => Promise<string>
}

export interface Bot {
  id: string
  type: ConversationType
  name: string
  settings: SettingsUI[]
}

export type SettingsPayload = Record<string, string | number | boolean>

export interface HandlerPayload {
  conversationId: string
  conversationType: ConversationType
  botId: string
  globalSettings: SettingsPayload
  botSettings: SettingsPayload
  prompt?: string
  messages: Message[]
}

export type PromptResponse = string | ReadableStream | null | undefined

interface SettingsUIBase {
  key: string
  name: string
  description?: string
  default?: string | number | boolean
}

export interface SelectOptionType {
  value: string
  label: string
  icon?: string
}

export interface SettingsApiKey extends SettingsUIBase {
  type: 'apiKey'
}

export interface SettingsUIInput extends SettingsUIBase {
  type: 'input'
}

export interface SettingsUISelect extends SettingsUIBase {
  type: 'select'
  options: SelectOptionType[]
}

export interface SettingsUISlider extends SettingsUIBase {
  type: 'slider'
  min: number
  max: number
  step: number
}

export interface SettingsUIToggle extends SettingsUIBase {
  type: 'toggle'
}

export type SettingsUI =
  | SettingsApiKey
  | SettingsUIInput
  | SettingsUISelect
  | SettingsUISlider
  | SettingsUIToggle
