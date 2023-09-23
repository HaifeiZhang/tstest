import React, { Component } from 'react'
import axios from 'axios'
import { RouteProps} from 'react-router-dom'
//此处新版本与旧版本相差较大
//this.props.history不在可用，用useNavigate
export default class Films extends Component<RouteProps> {
  componentDidMount() { 
    axios({
      url:"url"
    })

    console.log(this.props)
   }
  render() {
    return (
      <div>Films
        {}
      </div>
    )
  }
}
