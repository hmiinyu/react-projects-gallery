import { loadRoutesConfig } from 'm2-react'
import App from '@/features/app/containers'
import commonRouter from '@/features/common/router'
import homeRouter from '@/features/home/router'
import authRouter from '@/features/auth/router'
import orderRouter from '@/features/order/router'
import mineRouter from '@/features/mine/router'

const routes = loadRoutesConfig(App, [
  commonRouter,
  homeRouter,
  authRouter,
  orderRouter,
  mineRouter
])

export default {
  routes,
  routeType: 'hash',
  //redirectUrl: '/auth/login',
  //redirect404: '/404'
}
