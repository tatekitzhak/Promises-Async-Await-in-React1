import React, {useState, useContext }from 'react';
import {PlayerContext} from './nbaPlayerContext';

const AddPlayer = () =>{

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const [palyers, setPlayers]= useContext(PlayerContext);

  const updateName=(e)=>{
      setName(e.target.value);
  }
  const updateNumber=(e)=>{
      setNumber(e.target.value);
  }
  const updateId=(e)=>{
      setId(e.target.value);
  }
  const addPlayer = (e)=>{
    console.log("onSubmit");
    e.preventDefault();
    setPlayers((prevList)=>[...prevList,{name:name, number:number, id:id}])
  }
  return(
    <>
      <div>{console.log("target:", name, number, id)}
        <form className="form-inline" onSubmit={addPlayer}>
          <div className="form-group mx-sm-3 mb-2">
            <input type="text"  className="form-control" value={name} placeholder="name" onChange={updateName}/>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input type="text"  className="form-control" value={number} placeholder="number" onChange={updateNumber}/>
          </div>


          <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control"  value={id} placeholder="ID" onChange={updateId} />
          </div>

          <button type="submit" className="btn btn-primary mb-2">Add</button>
        </form>
      </div>
    </>
  )

};

export default AddPlayer;
