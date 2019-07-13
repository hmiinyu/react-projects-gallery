import { DataApi } from 'm2-core'

export default DataApi({
  'getCategoryList': '/category/list',
  'getRetailerList': '/retailer/list',
  'getOrderList': '/order/list',
  'user': {
    'list': '/user/list',
    'detail': '/user/detail'
  },
  'product': {
    'list': '/product/list',
    'detail': '/product/detail',
    'cate': '/product/cate'
  }
}, '/api', {
  prefix: '/mockapi',
  urls: [
    '/user/detail',
    '/product/list'
  ]
})
