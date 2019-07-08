// Redux的配置项(用于构建action和initialState)
import { tab_bar_items } from '@/features/common/constants/tab-bar.conf'

export default {
  feature: 'common',
  actionKeys: [
    { key: 'dict', data: [], async: true, cache: true, emit: true },
    { key: 'tabs', data: tab_bar_items }
    // data: 初始值，async: 处理异步请求，cache: 数据持久保存(防刷新), emit: 等待数据请求后使用DataBus.on处理其他逻辑
  ]
}
