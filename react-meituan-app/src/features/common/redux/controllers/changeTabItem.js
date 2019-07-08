import { ReduxFactory } from 'm2-redux'
import config from '@/features/common/redux/config'

const params = { config, actionKey: 'tabs' }

export const action = (data) => ReduxFactory.createAction(params, data)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => {
  return state.tabs.map(item => ({
    ...item, active: item.name === action.payload.name
  }))
})
