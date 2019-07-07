import React from 'react'
import TabBar from '@/features/common/components/tab-bar'
import BannerHeader from '@/features/home/components/banner-header'
import CategoryList from '@/features/home/components/category-list'
import RetailerList from '@/features/home/components/retailer-list'
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
