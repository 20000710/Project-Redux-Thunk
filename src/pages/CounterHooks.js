import { useSelector, useDispatch } from 'react-redux';

import React from 'react';
import { addItem, subtractItem } from '../redux/Actions/Counter';



const CounterHooks = () => {
    
    const selectCount = useSelector(state => state.counter);
    const dispatchCount = useDispatch();
    
    return (
        <div>
            <h1>Counter Hooks</h1>

            <button onClick={() => dispatchCount(addItem())}>+</button>
            <h3>{selectCount.item}</h3>
            <button onClick={() => dispatchCount(subtractItem())}>-</button>
        </div>
    )
}

export default CounterHooks


