import React, {useReducer} from 'react'
import Sidebar from './Sidebar'
import Store from './Store'
import Preview from './Preview'

const Main = () => {
    const [prodId, dispatch] = useReducer(control, [])
    const [arrayId, dispatchId] = useReducer(controlId, [])

    function controlId(arrayId, action) {
        switch(action.type) {
            case 'add' : if (arrayId.every(a => a !== action.payload.id)) {
                    return [...arrayId, action.payload.id]
                    } else {
                    return [...arrayId]
                    }
            case 'remove' : return arrayId.filter(a => a !== action.payload.id)             
            case 'clearlist' : return []
            default : return arrayId
        }
    }

    function control(prodId, action) {
        switch(action.type) {
            case 'getid' : return [action.payload.id]
            case 'close' : return []
            default : return prodId
        }
    }

    return (
        <>
            <main>
                <Sidebar arrayId={arrayId} dispatchId={dispatchId} dispatch={dispatch}/>
                <Preview prodId={prodId} dispatchId={dispatchId} dispatch={dispatch}/>
                <Store dispatch={dispatch}/>
            </main>
        </>
    )
}

export default Main;
