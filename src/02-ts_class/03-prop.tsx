import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name="111" func={()=>{
            
        }}></Child>
      </div>
    )
  }
}

//对属性的监测
interface Iprops{
    name:string
    func:()=>void
}
class Child extends Component<Iprops,any>{
    render() {
        return (
          <div>App-{this.props.name}</div>
        )
      }
}
