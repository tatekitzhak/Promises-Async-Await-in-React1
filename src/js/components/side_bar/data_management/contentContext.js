import React, {useState, createContext} from 'react';

export const ContentContext = createContext();


export const ContentProvider=(props)=> {
  const [categories, setCategories] = useState([
    {topic:"Topic 1"},
    {topic:"Topic 2"},
    {topic:"Topic 3"},
    {topic:"Topic 4"},
    {topic:"Topic 5"},
    {topic:"Topic 6"},
    {topic:"Topic 7"}
  ]);

  return(
    <ContentContext.Provider value={[categories]}>
          {props.children}
    </ContentContext.Provider>
  )
};
