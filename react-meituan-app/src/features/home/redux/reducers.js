import { ReduxFactory } from 'm2-redux'
import { reducer as getCategoryListReducer } from '@/features/home/redux/controllers/getCategoryList'
import { reducer as getRetailerListReducer } from '@/features/home/redux/controllers/getRetailerList'
import config from '@/features/home/redux/config'

const reducers = [
  getCategoryListReducer,
  getRetailerListReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
