import React from 'react'
import AppTabBar from '@/features/common/components/tab-bar'
import BannerHeader from '@/features/home/components/banner-header'
import CategoryList from '@/features/home/components/category-list'
import './index.less'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <BannerHeader/>
        <CategoryList/>
        <AppTabBar/>
      </div>
    )
  }
}

export default HomePage
