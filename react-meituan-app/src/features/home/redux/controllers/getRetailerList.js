import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'
import { homeService } from '@/features/app/service'

const params = { config, actionKey: 'retailers' }
const promise = (params) => homeService.getRetailerList(params)

export const action = (page) => ReduxFactory.createAsyncAction(() => promise({ page }), params, (res) => {
  return res && res.poilist ? res.poilist : []
})
export const reducer = (state, action) => ReduxFactory.createAsyncReducer(state, action, params)
export const type = ReduxFactory.createActionType(params)
