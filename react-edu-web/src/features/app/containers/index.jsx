import React from 'react'
import AppHeader from '@/features/common/components/app-header'
import AppSidebar from '@/features/common/components/app-sidebar'
import './index.less'

export default ({children}) => (
  <div className="app-container">
    <AppHeader/>
    <div className="main">
      <AppSidebar/>
      <div className="container-fluid">{children}</div>
    </div>
  </div>
)
