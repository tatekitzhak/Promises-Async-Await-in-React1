import React from 'react';
import { useHistory, useParams } from 'react-router-dom'


function Item({match}) {
  const { id } = useParams();

  const fetchData = () =>{
    switch (match.params.link) {
      case 'Item 1':
        return ( `${match.params.link}`);
      case 'Item 2':
        return ( `${match.params.link}`);
      case 'Item 3':
        return ( `${match.params.link}`);
      case 'Item 4':
        return ( `${match.params.link}`);
      default:
        return ( 'default');
    }
  }


  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>Item: {fetchData()}</h1>
              </div>
              <div className="list-group list-group-flush">
                {console.log("Item:", match)}
              </div>
          </div>
      </div>
    </>
  );
};


export default Item;
