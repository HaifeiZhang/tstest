import React, { Component } from 'react'
interface Istate{
    list:string[]
}

export default class App extends Component<any,Istate> {
    state={
        list:[]
    }
    myref = React.createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={()=>{
            console.log((this.myref.current as HTMLInputElement).value)
            this.setState({
                list:[...this.state.list,(this.myref.current as HTMLInputElement).value]
            })
        }}>click</button>
        <ul>
            {
                this.state.list.map(item=><li key={item}>{item}</li>)
            }
        </ul>
      </div>
    )
  }
}
