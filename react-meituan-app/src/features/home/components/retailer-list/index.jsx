import React from 'react'
import { connect } from 'm2-redux'
import ListItem from '@/features/common/components/list-item'
import { getRetailerList } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: 'home', actions: { getRetailerList }})
class RetailerList extends React.Component {
  componentDidMount() {
    this.props.getRetailerList()
  }

  render() {
    const { retailers } = this.props.home

    return (
      <div className="mt-retailer-list">
        <div className="list-header border-1px">
          <h4 className="retailer-title"><span>附近商家</span></h4>
        </div>
        {
          retailers.data && retailers.data.map(item => <ListItem key={item.id} item={item}/>)
        }
      </div>
    )
  }
}

export default RetailerList
