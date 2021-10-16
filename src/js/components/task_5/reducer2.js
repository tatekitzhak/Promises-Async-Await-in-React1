import React, {useState, useReducer} from 'react';

const initialState = {
  counter: 0
};
const reducer = (state, action)=>{
      switch (action.type) {
        case 'Inc':
          return { counter: state.counter + action.value};
        case 'Dec':
          return {counter: state.counter - action.value};
        case 'Reset':
          return initialState;
        default:
          return state;

      }
}
function Reducer2() {
  const [data, dispatch] = useReducer(reducer, initialState);

  return(
    <>
      <h1>  {data.counter} </h1>
      <button onClick={()=>dispatch({type: 'Inc', value: 2})}> Inc: </button>
      <button onClick={()=>dispatch({type: 'Dec', value: 2})}> Decr: </button>
      <button onClick={()=>dispatch({type: 'Reset'})}> Reset: </button>
    </>
  )

}

export default Reducer2;
