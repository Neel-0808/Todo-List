import React from "react"
import ItemList from "./ItemList"


const Content = ({item,handlechange,handleDelete}) => {
return (
   <main>
    {(item.length)?(
        <ItemList 
         item={item}
         handlechange={handlechange}
         handleDelete={handleDelete}/>
    ):(
        <p style={{
            marginTop:"2rem"
        }}>Your List is Empty</p>
    ) }   
    
    
     </main>
  )
}

export default Content  