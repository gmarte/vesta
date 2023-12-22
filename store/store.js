// store.js
import { create } from 'zustand'

export const useStore = create(set => ({
  accessToken: '',
  transactionID: '',
  isLoading: false,
  setAccessToken: (token) => set(() => ({ accessToken: token })),
  setTransactionID: (transacid) => set(() => ({ transactionID: transacid })),
  setIsLoading: (loading) => set(() => ({ isLoading: loading }))
}))
