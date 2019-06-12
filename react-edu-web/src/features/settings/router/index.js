import UserSettingsPage from '@/features/settings/containers/user-settings'

export default [{
  path: '/settings',
  name: '设置模块',
  children: [
    { path: 'user', name: '个人中心页面', component: UserSettingsPage  }
  ]
}]
