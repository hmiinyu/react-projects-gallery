import React from 'react'
import { sidebar_menus }from '@/features/common/constants/sidebar.conf'
import './index.less'

export default () => (
  <div className="sidebar">
    <div className="profile">
      <div className="avatar img-circle">
        <img src="/static/img/avatar.png" alt="Avatar"/>
      </div>
      <h4>Miracle</h4>
    </div>
    <div className="navs">
      <ul className="list-unstyled">
        {
          sidebar_menus.map(menu => {
            const hasChildren = menu.children && menu.children.length > 0
            return (
              <li key={menu.name}>
                <a href={menu.url} className={menu.active?'active':''}>
                  <i className={`fa fa-${menu.icon}`}></i>
                  {menu.text}
                  {hasChildren ? (<i className="arrow fa fa-angle-right"></i>) : ''}
                </a>
                {
                  hasChildren ? (
                    <ul className="list-unstyled">
                      {
                        menu.children.map(child => (
                          <li key={child.name}>
                              <a href={child.url}>{child.text}</a>
                          </li>
                        ))
                      }
                    </ul>
                  ) : ''
                }
              </li>
            )
          })}
        </ul>
    </div>
  </div>
)