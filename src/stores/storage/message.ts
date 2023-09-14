import { MessageInstance } from '@/types/message'
import { messages } from './db'
import { del, entries, get, set, update } from 'idb-keyval'

export const setItem = async (key: string, item: MessageInstance[]) => {
  const store = messages.get()
  if (store) {
    await set(key, item, store)
  }
}

export const getItem = async (key: string) => {
  const store = messages.get()
  if (store) {
    return get<MessageInstance[]>(key, store)
  }
  return null
}

export const updateItem = async (key: string, item: MessageInstance[]) => {
  const store = messages.get()
  if (store) {
    await update(key, () => item, store)
  }
}

export const deleteItem = async (key: string) => {
  const store = messages.get()
  if (store) {
    await del(key, store)
  }
}

export const exportData = async () => {
  const store = messages.get()
  if (store) {
    const entriesData = await entries(store)
    return Object.fromEntries(entriesData) as Record<string, MessageInstance[]>
  }
  return null
}
