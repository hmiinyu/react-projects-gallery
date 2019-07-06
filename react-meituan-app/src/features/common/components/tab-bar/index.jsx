import React from 'react'
import { tab_bar_items } from '@/features/common/constants/tab-bar.conf'
import './index.less'

class AppTabBar extends React.Component {
  state = {
    activeKey: 'home'
  }

  renderItem(item) {
    const { activeKey } = this.state
    const active = item.name === activeKey
    const itemName = active ? `${item.name}_active` : item.name
    const iconStyle = {
      backgroundImage: `url(/static/img/tab-bar/${itemName}.png)`
    }
    return (
      <div key={item.name}
           className={`tab-item ${active ? 'tab-item-active' : ''}`}
           onClick={() => this.setState({activeKey: item.name})}>
        <div className="tab-item-icon" style={iconStyle}/>
        <div className="tab-item-text">{item.text}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="mt-tab-bar">
        {
          tab_bar_items.map(item => this.renderItem(item))
        }
      </div>
    )
  }
}

export default AppTabBar
