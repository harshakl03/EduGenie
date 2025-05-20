import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  conversations: [], // each item will be { query: '...', response: '...' }
}

export const chatSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    addConversation: (state, action) => {
      const { query, response } = action.payload
      state.conversations.push({ query, response })
    },
    clearConversations: (state) => {
      state.conversations = []
    },
  },
})

// Exporting action creators
export const { addConversation, clearConversations } = chatSlice.actions

// Exporting the reducer
export default chatSlice.reducer
