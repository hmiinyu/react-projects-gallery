import React from 'react'
import { connect } from 'm2-redux'
import { productService } from '@/features/app/service'
import { changeTabFilter, getFilterData } from '@/features/product/redux/actions'
import { tab_filter_items } from '@/features/product/constants/tab-filter.conf'
import './index.less'

@connect({ reducers: 'product', actions: { changeTabFilter, getFilterData } })
class CategoryFilter extends React.Component {

  async componentDidMount() {
    const result = await productService.getCategoryFilter()
    if (result) {
      this.props.getFilterData(result)
    }
  }

  renderTabsFilter() {
    const { tabsFilter } = this.props.product
    return Object.values(tabsFilter.items).map(item => (
      <div key={item.key}
           className={`tab-filter-item tab-filter-${item.key} ${item.key === tabsFilter.activeKey ? 'current' : ''}`}
           onClick={() => this.props.changeTabFilter(item.key)}>
        { item.text }
      </div>
    ))
  }

  renerTabsContent() {
    const { tabsFilter } = this.props.product
    return (
      <div className="cate-filter-inner">
        {
          Object.values(tabsFilter.items).map(item => (
            <ul key={item.key}
                 className={`tab-pane-item tab-pane-${item.key} ${item.key === tabsFilter.activeKey ? 'current' : ''}`}>
              { this.renderTabsPane(item) }
            </ul>
          ))
        }
      </div>
    )
  }

  renderTabsPane(tab) {
    switch (tab.key) {
      case tab_filter_items.cate:
        return tab.data.map(item => (
          <li key={item.code} className="sub-item-cate">
            <p className="sub-item-title">{item.name}<span className="sub-item-quantity">{item.quantity}</span></p>
            <div className="sub-item-content">
              { this.renderCateboxContent(tab.key, item.sub_category_list) }
            </div>
          </li>
        ))
      case tab_filter_items.sort:
        return tab.data.map(item => (
          <li key={item.code} className={`sub-item-sort ${item.active ? 'active' : ''}`}>
            { item.name }
          </li>
        ))
      case tab_filter_items.filter:
        return tab.data.map(item => (
          <li key={item.code} className="sub-item-filter">
            <p className="sub-item-title">{item.group_title}</p>
            <div className="sub-item-content">
              { this.renderCateboxContent(tab.key, item.items) }
            </div>
          </li>
        ))
      default:
        break;
    }
  }

  renderCateboxContent(tabKey, items = []) {
    return items.map(item => {
      if (tabKey === tab_filter_items.cate) {
        return (
          <div className="cate-box">
            <div key={item.code} className={`cate-box-inner ${item.active ? 'active' : ''}`}>
              { item.name }({item.quantity})
            </div>
          </div>
        )
      } else {
        return (
          <div className="cate-box">
            <div key={item.code} className={`cate-box-inner ${item.icon ? 'icon' : ''} ${item.active ? 'active' : ''}`}>
              { item.name }
            </div>
          </div>
        )
      }
    })
  }

  render() {
    return (
      <div className="mt-category-filter">
        <div className="cate-filter-header">
          { this.renderTabsFilter() }
        </div>
        <div className="cate-filter-content">
          { this.renerTabsContent() }
        </div>
      </div>
    )
  }
}

export default CategoryFilter
