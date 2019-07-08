import React from 'react'
import { connect } from 'm2-redux'
import OrderListItem from '@/features/order/components/order-list-item'
import { event } from '@/features/app/utils/event'
import { getOrderListType } from '@/features/app/redux/types'
import { getOrderList } from '@/features/order/redux/actions'
import './index.less'

@connect({ reducers: 'order', actions: { getOrderList }})
class OrderList extends React.Component {
  state = {
    page: 1,
    loading: false
  }

  componentWillMount() {
    event.add('scroll', this, { load: this.props.getOrderList, eventType: getOrderListType })
  }

  componentDidMount() {
    this.props.getOrderList(this.state.page)
  }

  componentWillUnmount() {
    event.remove('scroll', this, { load: this.props.getOrderList, eventType: getOrderListType })
  }

  render() {
    const { orderList } = this.props.order

    return (
      <div className="mt-order-list">
        {
          orderList.data && orderList.data.map(item => <OrderListItem key={item._key} item={item}/>)
        }
      </div>
    )
  }
}

export default OrderList
