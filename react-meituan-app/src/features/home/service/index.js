import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'

export const service = {
  getCategoryList: () => get(api.getCategoryList, { loading: false }),
  getRetailerList: (params) => get(api.getRetailerList, { params, key: true, itemsName: 'poilist' })
};
