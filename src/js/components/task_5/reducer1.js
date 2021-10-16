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
                    post: action.payload,
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

      if (!response.ok) {
          return false;
        }

      response = await response.json()
      return response;
    }



    fetchMyAPI().then(response => {
      if(!response) {
          const message = `An error has occured: ${response.status}`;
          const messageObj = { userId: 1,
                        id: 1,
                        title: message,
                        body: ""
                      };
          //console.log("FETCH_ERROR: ", msg)
          dispatch({type:'FETCH_ERROR', payload: messageObj})
        } else {
          //console.log("UseEffect FETCH_SUCCESS:", response)
          dispatch({type:'FETCH_SUCCESS', payload: response})
        }

    });

  },[])

  return(
    <>
{      data.post.title
}    </>
  )

}

export default Reducer1;
