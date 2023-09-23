import React, { Component } from 'react'
import { HashRouter,Route,Routes,Navigate} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'

export default class IndexRouter extends Component {
  render() {
    return (
        <HashRouter>
            <Routes>
            <Route path='/films' element={<Films/>}></Route>
            <Route path='/cinemas' element={<Cinemas/>}></Route>
            <Route path='/center' element={<Center/>}></Route>
            <Route path="/" element={<Navigate to="/films" />} />
            </Routes>
        </HashRouter>
      
    )
  }
}
