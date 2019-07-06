import React from 'react'
import AppTabBar from '@/features/common/components/tab-bar'
import './index.less'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <AppTabBar/>
      </div>
    )
  }
}

export default HomePage
