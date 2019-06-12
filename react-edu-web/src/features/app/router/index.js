import { loadLayoutRoutesConfig } from 'm2-react'
import layouts from '@/features/app/layouts'
import commonRouter from '@/features/common/router'
import homeRouter from '@/features/home/router'
import userRouter from '@/features/user/router'
import authRouter from '@/features/auth/router'
import courseRouter from '@/features/course/router'
import settingsRouter from '@/features/settings/router'

export default loadLayoutRoutesConfig(layouts, [
  commonRouter,
  homeRouter,
  userRouter,
  authRouter,
  courseRouter,
  settingsRouter
]);
