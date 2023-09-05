export interface Message {
  role: 'system' | 'user' | 'assistant'
}

export interface MessageInstance extends Message {
  id: string
  stream?: string
  dateTime?: string
  isSelected?: boolean
}

export interface ErrorMessage {
  code: string
  message: string
}

export interface StreamInstance {
  messageId: string
  stream: ReadableStream
}
