import React from 'react'
import { connect } from 'm2-redux'
import ListItem from '@/features/common/components/list-item'
import { event } from '@/features/app/utils/event'
import { getRetailerListType } from '@/features/app/redux/types'
import { getRetailerList } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: 'home', actions: { getRetailerList }})
class RetailerList extends React.Component {
  state = {
    page: 1,
    loading: false
  }

  componentWillMount() {
    event.add('scroll', this, { load: this.props.getRetailerList, eventType: getRetailerListType })
  }

  componentDidMount() {
    this.props.getRetailerList(this.state.page)
  }

  componentWillUnmount() {
    event.remove('scroll', this, { load: this.props.getRetailerList, eventType: getRetailerListType })
  }

  render() {
    const { retailers } = this.props.home

    return (
      <div className="mt-retailer-list">
        <div className="list-header border-1px">
          <h4 className="retailer-title"><span>附近商家</span></h4>
        </div>
        {
          retailers.data && retailers.data.map(item => <ListItem key={item._key} item={item}/>)
        }
      </div>
    )
  }
}

export default RetailerList
