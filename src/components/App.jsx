import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.list.cash)

    const manyList = () => {
        dispatch({type: "ADD", payload: 5})
    }

    const smallList = () => {
        dispatch({type: "GET", payload: 5})
    }

    return (
        <div className="container mt-3">
            <button className="btn btn-success p-2 me-3" onClick={()=> smallList()}>Small list</button>
            <button className="btn btn-info p-2" onClick={()=> manyList()}>Many list</button>
            <p>{state}</p>
        </div>
    )
}

export default App;