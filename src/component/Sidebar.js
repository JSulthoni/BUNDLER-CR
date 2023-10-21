import React from 'react'
import Search from './Search'
import Bundler from './Bundler'


const Sidebar = ({arrayId, dispatchId, dispatch}) => {
    return (
      <aside className='flexcol sidebar'>
        <Search dispatch={dispatch}/>
        <Bundler arrayId={arrayId} dispatch={dispatch} dispatchId={dispatchId}/>
      </aside>
    )}

export default Sidebar;