import React, {useState, createContext, useEffect} from 'react';

export const PageDataContext = createContext();
export const CategoriesContext = createContext();



export const SidebarProvider = (props) => {
  const [categories, setCategories] = useState([
    {categorie:"Item 1"},
    {categorie:"Item 2"},
    {categorie:"Item 3"},
    {categorie:"Item 4"},
    {categorie:"Item 5"},
    {categorie:"Item 6"},
    {categorie:"Item 7"}
  ]);

  const [data, setData] = useState([]);
  var value = {
                  title: "foo",
                  body: "bar",
                  userId: 1
              };

  var param_requests = {
                          method: 'POST', // *GET, POST, PUT, DELETE, etc.
                          mode: 'cors', // no-cors, *cors, same-origin
                          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                          credentials: 'same-origin', // include, *same-origin, omit
                          headers: {
                            'Content-Type': 'application/json'
                            //'Content-Type': 'application/x-www-form-urlencoded',
                          },
                          redirect: 'follow', // manual, *follow, error
                          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                          body: JSON.stringify(value) // body data type must match "Content-Type" header
                        };

  async function fetchCategories(url) {


      try{
            const response = await fetch(url,param_requests);
            if(!response.ok){
                console.log("!response.ok: ",response);
              }

            const responseData = await response.json();
            setData(responseData);
            console.log("fetchCategories:", responseData);
             return responseData;

      }catch (e) {
        console.log("Catch error: ",error);
      };
    };



    async function getFetch(url){

      fetch(url)
      .then(function(response) {

          if(!response.ok){
              console.log("!response.ok: ",response);
            }
          return response.json();
       })
      .then(function(json){
          //  setData(json.categories);
            console.log("getFetch() json: ",json);
            return json;
        })
      .catch((error)=>{
        console.log("Catch error: ",error);
      });

    };

  useEffect(()=>{
    let data="";
    var url = "https://data.nasa.gov/resource/r588-f7pr.json";
    console.log("SidebarProvider useEffect", document.readyState);

/*Fetch version 1 */
       //  data =  fetchCategories(url).catch(e=>{
       //   console.log("Catch error: ",error);
       // });

/*Fetch version 2 */
       let insidedata = getFetch(url);
      console.log("useEffect:", insidedata);
  },[]);

console.log("outside from methods:", data);


  return(
    <CategoriesContext.Provider value={[categories]}>
      {props.children}
    </CategoriesContext.Provider>
  )
};




export const PageProvider = (props) => {
  const [categories, setCategories] = useState([
                                                {topic:"Item 1"},
                                                {topic:"Item 2"},
                                                {topic:"Item 3"},
                                                {topic:"Item 4"},
                                                {topic:"Item 5"},
                                                {topic:"Item 6"},
                                                {topic:"Item 7"}
                                              ]);
  return(
    <PageDataContext.Provider value={[categories]}>
      {props.children}
    </PageDataContext.Provider>
  );
};
