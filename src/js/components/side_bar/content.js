import React, {useContext, useReducer} from 'react';
import { useLocation, useParams} from "react-router-dom";
import {PageDataContext} from './dataContext';
import {ContentContext} from './data_management/contentContext';



const initialState = {
  initConter: 0
};

function countReducer(state, action) {
  switch (action.type) {
    case 'Increment': {
      return {initConter: state.initConter + 1};
    }
    case 'Decrement': {
      return {initConter: state.initConter -1};
    }
    case 'Reset': {
      return initialState ;
    }
    default: {
      throw new Error(`Default Error: Unhandled type: ${action.type}`)
    }
  }

}

function Content({match}) {
  const [count, dispatch] = useReducer(countReducer, initialState);

  const [categories, setCategories] = useContext(PageDataContext);
  const [values, setValue] = useContext(ContentContext);

  const location = useLocation();
  const { id } = useParams();

  return(
    <>
      <div>

        <h3>MainPage: {match.url} </h3>
        <h3>Counter:   {count.initConter} </h3>
          <div>
            <ul>
              {
                  values.map((value, index)=>{
                  return(
                    <li key={index}>
                        {id}
                    </li>
                  )
                })
              }
            </ul>
          </div>


          <button onClick={()=>dispatch({type: 'Increment', data:{} })} > Increment
          </button>
          <button onClick={()=>dispatch({type: 'Decrement', data:{} })} > Decrement
          </button>
          <button onClick={()=>dispatch({type: 'Reset', data:{} }) } > Reset
          </button>
      </div>
    </>
  )
};

export default Content;
