import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItems = ({newItem,setNewItem,handleSubmit}) => {
  const InputRef = useRef()
  return (
     
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem"> ADD Item</label>
            <input  autoFocus 
            ref={InputRef}
            id="addItem"
            type="text" 
            placeholder='Add Item'
            required
            value={newItem} 
            onChange={(e)=>setNewItem(e.target.value)}/>
            <button type='submit' aria-label='Add Item' onClick={()=>InputRef.current.focus()}> <FaPlus/></button>
        </form>

    
    
  )
}

export default AddItems