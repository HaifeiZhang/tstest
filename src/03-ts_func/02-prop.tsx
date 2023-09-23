import React from 'react'
//类写法，以泛型的形式<sting>监测，函数式以传参str:string的形式监测
export default function App() {
  return (
    <div>
        <Child name='aaaaa'></Child>
    </div>
  )
}

interface Iprops{
    name:string
    getName?:()=>string//可选
}

function Child(props:Iprops){
    return (
        <div>
            App-{props.name}
        </div>
      )
}