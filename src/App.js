import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import React, { useState } from 'react'
import AddItems from "./AddItems"
import SearchList from "./SearchList"



export default function App(){
  const [item,setItem] = useState(JSON.parse(localStorage.getItem('todo_list'))) 


  const [newItem,setNewItem]=useState('')
  const [search,SetSearch] = useState('')


    const addItem = (newItem) => {
  const id = item.length ? item[item.length - 1].id + 1 : 1;
  const addNewItems = { id, checked: false, item: newItem }; 
  const listItems = [...item, addNewItems];
  setItem(listItems);
  localStorage.setItem("todo_list", JSON.stringify(listItems));
};

    const handlechange = (id) =>{
            const listItems = item.map((item) =>(
                item.id === id ? {...item,checked:!item.checked}:item
            ))
            setItem(listItems)
            localStorage.setItem("todo_list",JSON.stringify(listItems))
        }

    const handleDelete = (id) => {
        const deleteItems = item.filter((item)=>(
            item.id !== id))
        setItem(deleteItems)
         localStorage.setItem("todo_list",JSON.stringify(deleteItems))
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!newItem) return  
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }

return(
<div className="App">
    <Header title="TODO LIST"/>
    <AddItems 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}    
    />
    <SearchList
      search={search}
      SetSearch={SetSearch}  
    />
    <Content 
    item={item.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
    handlechange={handlechange}
    handleDelete={handleDelete}
    />
    <Footer 
    length = {item.length}/>
</div>
    
  )
}