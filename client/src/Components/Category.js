import React, { useState,useEffect } from 'react'
import AddCategory from './AddCategory';
import axios from 'axios';

function Category()  {

  const [showModal,setShowModal] = useState(false);
  const [name,setName] = useState('');

  const addCategory = ()=>{
    let body = {name:name};
        axios.post('http://localhost:8081/category',body,{headers:{accessToken:localStorage.getItem('accessToken')}}).then((response)=>{
          if(!response.data.error && response.data.message) alert(response.data.message);
    })
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }



  return (
    <div>
      <h2>Category</h2>
      <div className='row'>
        <div className='col-md-10'>
        <input type='text' value={name} onChange={(event)=>handleNameChange(event)} className='form-control' placeholder='Enter Category Name...' />
        </div>
        <div className='col-md-2'>
        <button className='btn btn-primary' onClick={addCategory}>Add New Category</button>
        </div>
      </div>
      {/* <AddCategory showModal={showModal}></AddCategory> */}
    </div>
  )
}

export default Category