import React from 'react'
import { connect } from 'm2-redux'
import { home_dashboard_sections } from '@/features/home/constants/home.conf'
import { getDataList, getDataItem } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: 'home', actions: { getDataList, getDataItem } })
class HomePage extends React.Component {
  state = {
  }

  componentWillMount() {
    // this.props.getDataList()
  }

  render() {
    return (
      <div className="body home-page">
        <div className="profile">
          <div className="row c1">
            {
              home_dashboard_sections.map(item => (
                <div className="col-md-4 cell-item" key={item.name}>
                  <div className={`cell ${item.css}`}>
                    <i className={`fa fa-${item.icon}`}></i>
                    <h4>{item.text}</h4>
                    <h5>{item.count}</h5>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="chart-section">
            <div className="chart">
              <div id="main1" style={{height:400}}></div>
            </div>
            <div className="chart">
              <div id="main2" style={{height:400}}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
