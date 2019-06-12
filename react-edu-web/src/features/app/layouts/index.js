import AppLayout from '@/features/app/layouts/default'
import SimpleLayout from '@/features/app/layouts/simple'

export default [
  { name: 'simple', layout: SimpleLayout },
  { name: 'app', layout: AppLayout, default: true }
]
