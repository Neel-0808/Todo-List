import React from 'react'

import ListItems from './ListItems';

const ItemList = ({item,handlechange,handleDelete}) => {
  return (
    
        <ul>
           {item.map((item)=>(
               <ListItems 
               item={item}
               key={item.id}
             handlechange={handlechange}
            handleDelete={handleDelete}/>
        ))  }


    </ul> 
  )
}

export default ItemList