import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'
import { homeService } from '@/features/app/service'

const params = { config, actionKey: 'retailers' }
const promise = () => homeService.getRetailerList()

export const action = () => ReduxFactory.createAsyncAction(promise, params, (res) => {
  return res && res.poilist ? res.poilist : [];
})
export const reducer = (state, action) => ReduxFactory.createAsyncReducer(state, action, params);
