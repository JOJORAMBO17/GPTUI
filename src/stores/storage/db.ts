import { UseStore, createStore } from 'idb-keyval'
import { atom } from 'nanostores'

export const conversations = atom<UseStore | null>(null)
export const messages = atom<UseStore | null>(null)
export const settings = atom<UseStore | null>(null)

export const createStores = () => {
  conversations.set(createStore('conversations', 'keyval'))
  messages.set(createStore('messages', 'keyval'))
  settings.set(createStore('settings', 'keyval'))
}
