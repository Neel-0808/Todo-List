import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ListItems = ({item,handlechange,handleDelete}) => {
  return (
    <li className='item' >
                        <input type="checkbox" onChange={()=> handlechange(item.id) }checked = {item.checked} />
                        <label  style={(item.checked)? 
                        {
                        textDecoration:'line-through'    
                        }:null}onDoubleClick={()=> handlechange(item.id)}>{item.item}</label>
                        <FaTrashAlt 
                        role ="button"
                        tabIndex="0"
                        onClick={()=>handleDelete(item.id)}
                        aria-label='delete the itemsList'
                        />
                </li>
  )
}

export default ListItems