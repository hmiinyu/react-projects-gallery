import { ReduxFactory } from 'm2-redux'
import config from '@/features/auth/redux/config'

const params = { config, actionKey: 'loginUser', actionType: 'login' }

export const action = (data) => ReduxFactory.createAction(params, data)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => ({ username: action.payload, authenticated: true }));
