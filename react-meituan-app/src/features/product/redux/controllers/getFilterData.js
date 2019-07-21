import { ReduxFactory } from 'm2-redux'
import config from '@/features/product/redux/config'

const params = { config, actionKey: 'tabsFilter', actionType: 'get' }

export const action = (data) => ReduxFactory.createAction(params, data)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => {
  const { items } = state.tabsFilter
  const { item, tabKey, tabFilter, fields } = action.payload
  const filter = (data) => data.map(filter => ({...filter, active: filter.code === item.code}))

  if (fields) {
    const data = items[tabKey].data.find(item => item[fields.tab] === tabFilter[fields.tab])
    if (data) {
      data[fields.sub] = filter(tabFilter[fields.sub])
    }
  } else {
    items[tabKey].data = filter(tabFilter)
  }

  return state.tabsFilter
})
