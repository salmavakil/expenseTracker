import React, { useState,useEffect } from 'react'
import AddCategory from './AddCategory';

function Category()  {

  const [showModal,setShowModal] = useState(false);

  const openAddCategory = ()=>{
    console.log('...modal open')
    setShowModal(true);
    console.log('..value changes',showModal)
  }




  return (
    <div>
      <h2>Category</h2>
      <div>
        <button onClick={openAddCategory}>Add New Category</button>
      </div>
      {showModal?<AddCategory style={{position: 'fixed'}}></AddCategory>:''}
    </div>
  )
}

export default Category