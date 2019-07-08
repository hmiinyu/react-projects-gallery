import React from 'react'
import { TabBar } from '@/features/common/components'
import { BannerHeader, CategoryList, RetailerList } from '@/features/home/components'
import './index.less'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <BannerHeader/>
        <CategoryList/>
        <RetailerList/>
        <TabBar/>
      </div>
    )
  }
}

export default HomePage
