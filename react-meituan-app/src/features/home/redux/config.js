// Redux的配置项(用于构建action和initialState)
export default {
  feature: 'home',
  actionKeys: [
    { key: 'categories', data: [], async: true },
    { key: 'retailers', data: [], async: true, merge: true, emit: true }
  ]
}
