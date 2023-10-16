import React from 'react'
import { Search } from './Search'
import { Bundler } from './Bundler'


export const Sidebar = function() {
    return (
        <aside className='flexcol sidebar'>
        <Search 
        />
        <Bundler 
        />
        <div className='footer'><p>&#169; 2023 Sulthoni development. All rights reserved.</p></div>
      </aside>
    )
}