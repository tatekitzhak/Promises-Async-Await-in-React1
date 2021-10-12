import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Nav from './nav';
const CountContextA = React.createContext("countA");
const CountContextB = React.createContext("countB");

/*
  https://thewebdev.info/2021/03/14/how-to-use-react-context-api-with-multiple-values-for-providers/
*/
  const DescendantA = () => {
  const { count, setCount} = useContext(CountContextA);

    console.log("DescendantA:");

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Click DescendantA {count[0]}</button>

    </>
  );
};




  const DescendantB = () => {
  const {count2, setCount2} = useContext(CountContextB);

  console.log("DescendantB:", count2);

  useEffect(() => {
    console.log('useEffect', count2)
  }, [])

  function incrementCount() {
    setCount2((count2) => count2 + 1);
    console.log('incrementCount', count2);

  }

  return (
    <>
      <button onClick={() => incrementCount()}>Click DescendantA {count2}</button>

    </>
  );
};



export default function MainTask3({authorized}) {
  const [count, setCount] = useState([10,30,50,70,90]);
  const [count2, setCount2] = useState(20);

  console.log("Sitemap:",!authorized);

  // if(!authorized){
  //   return <Redirect to="/side-bar"/>;
  //   console.log("Sitemap:",!authorized);
  //
  // }


  return (
      <>
        <div className="container">
          <Nav/>
          <CountContextA.Provider value={{ count, setCount}}>
            <DescendantA />
          </CountContextA.Provider>


          <CountContextB.Provider value={{count2, setCount2}}>
            <DescendantB/>
          </CountContextB.Provider>
        </div>
    </>
  );
}
