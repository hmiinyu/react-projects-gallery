import React from 'react'
import { NavBar } from '@/features/common/components'
import { CategoryFilter } from '@/features/product/components'
import './index.less'

export default () => (
  <div className="category-page">
    <NavBar title="分类"/>
    <CategoryFilter/>
  </div>
)
