import { ReduxFactory } from 'm2-redux'
import { reducer as getCategoryListReducer } from '@/features/home/redux/controllers/getCategoryList'
import config from '@/features/home/redux/config'

const reducers = [
  getCategoryListReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
