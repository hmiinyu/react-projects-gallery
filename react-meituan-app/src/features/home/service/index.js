import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'

export const service = {
  getCategoryList: () => get(api.getCategoryList, { loading: false }),
  getRetailerList: () => get(api.getRetailerList)
};
