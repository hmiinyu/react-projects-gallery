import UserPage from '@/features/user/containers'

export default [{
  path: '/auth',
  name: '认证模块',
  children: [
    { name: '默认页', component: UserPage, isDefault: true }
  ]
}]
