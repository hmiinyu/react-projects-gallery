import React from 'react'
import { connect } from 'm2-redux'
import { event } from '@/features/app/utils/event'
import { orderService } from '@/features/app/service'
import { getOrderList } from '@/features/order/redux/actions'
import { OrderListItem } from '@/features/order/components'
import './index.less'

@connect({ reducers: 'order', actions: { getOrderList }})
class OrderList extends React.Component {

  fields = {
    mounted: false
  }

  state = {
    page: 1,
    loading: false,
    items: []
  }

  async getItemsData() {
    this.fields.mounted = true
    const { page, items } = this.state
    const { mounted } = this.fields
    const result = await orderService.getOrderList({ page })
    if (result) {
      mounted && this.setState({
        items: [...items, ...result.poilist],
        loading: false
      })
    }
  }

  componentWillMount() {
    event.add('scroll', this, { load: this.getItemsData.bind(this) })
  }

  componentDidMount() {
    this.getItemsData()
  }

  componentWillUnmount() {
    event.remove('scroll', this, { load: this.getItemsData.bind(this) })
  }

  render() {
    const { items } = this.state

    return (
      <div className="mt-order-list">
        {
          items && items.map(item => <OrderListItem key={item._key} item={item}/>)
        }
      </div>
    )
  }
}

export default OrderList
