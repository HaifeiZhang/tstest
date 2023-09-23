import React, { Component } from 'react'
interface Istate{
    name:string
}
//any针对属性，Istate正对state
export default class App extends Component<any,Istate> {
    state ={
        name:"zhangsan"
    }
  render() {
    return (
      <div>App -{this.state.name.substring(0,1).toUpperCase()+this.state.name.substring(1)}
        <button onClick={()=>{
            this.setState({
                //此处也会对name进行类型监测
                name:"lisi"
            })
        }}>Click</button>
      </div>
    )
  }
}
