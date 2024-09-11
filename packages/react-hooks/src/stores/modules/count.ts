import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from '../createAppSlice';

const fetchCount = (amount = 1) => {
  return new Promise<{ data: number }>(resolve =>
    setTimeout(() => resolve({ data: amount })),
  )
}

export const counterSlice = createAppSlice({
  name: 'counter',
  initialState: {
    count: 1,
  },
  reducers: create => ({
    increment: create.reducer((state) => {
      state.count += 1;
    }),
    decrement: create.reducer(state => {
      state.count -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.count += action.payload
      },
    ),
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        const response = await fetchCount(amount)
        return response.data
      },
      {
        pending: () => {
          console.log('pending')
        },
        fulfilled: (state, action) => {
          state.count += action.payload
        },
        rejected: state => {
          console.log('failed')
        },
      },
    ),
  }),
  selectors: {
    count: (state) => state.count,
  }
});

// 方法
export const { 
  decrement, 
  increment, 
  incrementByAmount,
  incrementAsync
} = counterSlice.actions
export const {
  count,
} = counterSlice.selectors

export default counterSlice