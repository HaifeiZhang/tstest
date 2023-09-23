import React, { useRef, useState } from 'react'

export default function App() {
    //可以定义也可以省略
    const [name,setName] = useState<string>("zhansgan")
    //可以定义也可以省略
    //const [name,setName] = useState("zhansgan")
    const ref = useRef<HTMLInputElement>(null)
  return (
    <div>
        <input ref={ref}/>
    </div>
  )
}
