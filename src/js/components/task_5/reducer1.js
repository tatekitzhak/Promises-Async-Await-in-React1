import React, {useState, useContext, useReducer, useEffect} from 'react';

const initialState ={
    loading: true,
    post: {},
    error: '',
}

function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_SUCCESS':
          return {
                    loading: false,
                    post: action.payload,
                    error: ''
                  }
      case 'FETCH_ERROR':
          return {
                    loading: false,
                    post: 'aaa',
                    error: 'Something went wrong!'
                  }
        default:
          return state;
    }

}

function Reducer1() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      response = await response.json()
      return response;
    }

    fetchMyAPI().then(response => {
      console.log("useEffect", response.title)
      dispatch({type:'FETCH_SUCCESS', payload: response})
    });

  },[])

  return(
    <>
{      console.log("Reducer1:", data.post.title)
}    </>
  )

}

export default Reducer1;
