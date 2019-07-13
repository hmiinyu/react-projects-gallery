import React from 'react'
import PropTypes from 'prop-types'
import { event } from '@/features/app/utils/event'
import './index.less'

class ScrollView extends React.Component {
  fields = {
    mounted: false
  }

  state = {
    page: 1,
    loading: false
  }

  async getItemsData() {
    this.fields.mounted = true
    const { updateItems } = this.props
    const { page } = this.state
    const { mounted } = this.fields
    const result = await this.props.loadData({ page })
    if (result) {
      mounted && updateItems(result, () => this.setState({ loading: false }))
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
    return (
      <div className="mt-scroll-view">
        {this.props.children}
      </div>
    )
  }
}

ScrollView.propTypes = {
  loadData: PropTypes.func.isRequired,
  updateItems: PropTypes.func.isRequired
}

export default ScrollView
