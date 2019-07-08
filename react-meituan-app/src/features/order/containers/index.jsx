import React from 'react'
import { NavBar, TabBar }  from '@/features/common/components'
import './index.less'

class OrderPage extends React.Component {
  render() {
    return (
      <div className="order-page">
        <NavBar title="订单"/>
        <TabBar/>
      </div>
    )
  }
}

export default OrderPage
