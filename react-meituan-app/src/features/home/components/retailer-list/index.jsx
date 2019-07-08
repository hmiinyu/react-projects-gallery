import React from 'react'
import RetailerListItem from '@/features/home/components/retailer-list-item'
import { homeService } from '@/features/app/service'
import { event } from '@/features/app/utils/event'
import './index.less'

class RetailerList extends React.Component {

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
    const result = await homeService.getRetailerList({ page })
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
      <div className="mt-retailer-list">
        <div className="list-header border-1px">
          <h4 className="retailer-title">
            <span>附近商家</span>
          </h4>
        </div>
        {
          items && items.map(item => <RetailerListItem key={item._key} item={item}/>)
        }
      </div>
    )
  }
}

export default RetailerList
