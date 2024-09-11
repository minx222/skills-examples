import { combineSlices, configureStore } from '@reduxjs/toolkit'
import type { Action, ThunkAction } from "@reduxjs/toolkit"

import counterSlice from './modules/count';

const rootReducer = combineSlices(counterSlice)
export type RootState = ReturnType<typeof rootReducer>

export const store =  configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>