import React from 'react'
import { Search } from './Search'
import { Bundler } from './Bundler'


export const Sidebar = function() {
    return (
        <div className='sidebar'>
        <Search 
        />
        <Bundler 
        />
        <div className='footer'><p>&#169; 2023 Sulthoni development. All rights reserved.</p></div>
      </div>
    )
}