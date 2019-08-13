import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Hello = () => {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className = "getHello">
            <button className="increment" onClick = {() => dispatch({type: 'INCREMENT'})}>+</button>
            <button className="decrement"  onClick = {() => dispatch({type: 'DECREMENT'})}>-</button>
            <button onClick = {() => dispatch({type:'INCREMENT_ASYNC'})}>ASYNC</button>
            {counter}
        </div>

    )
}

export default Hello;

