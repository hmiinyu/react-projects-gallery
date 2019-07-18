import React from 'react'
import { connect } from 'm2-redux'
import { changeTabItem } from '@/features/common/redux/actions'
import './index.less'

@connect({ reducers: 'common', actions: { changeTabItem }})
class TabBar extends React.Component {

  handleChangeTab(item) {
    this.props.changeTabItem(item)
    location.href = `#${item.url}`
  }

  renderItem(item) {
    const itemName = item.active ? `${item.name}_active` : item.name
    const iconStyle = {
      backgroundImage: `url(/static/img/tab-bar/${itemName}.png)`
    }
    return (
      <div key={item.name}
           className={`tab-item${item.active ? ' tab-item-active' : ''}`}
           onClick={() => this.handleChangeTab(item)}>
        <div className="tab-item-icon" style={iconStyle}/>
        <div className="tab-item-text">{item.text}</div>
      </div>
    )
  }

  render() {
    const { tabs } = this.props.common
    return (
      <div className="mt-tab-bar">
        {
          tabs.map(item => this.renderItem(item))
        }
      </div>
    )
  }
}

export default TabBar
