import React,{useState} from 'react';

const Crud2 = () => {
    const [data,setData] = useState('')
    const [newData,setNewData] = useState([])
    const [show,setShow] = useState(false)
    const [editIndex,setEditIndex] = useState('')
  const HandleSubmit  =()=>{
    if(data !== ''){
     setNewData((Ndata)=>[...Ndata,data])
     setData('')
    }
  }

  const HandleDelete = (index)=>{
     newData.splice(index,1)
     setNewData([...newData])
  }

  const HandleEdit = (i)=>{
    setData(newData[i])
    setEditIndex(i)
    setShow(true)
  }

  const HandleUpdate = () =>{
    newData.splice(editIndex,1,data)
    setNewData([...newData])
    setData('')
    setShow(false)
  }

  const HandleDeleteAll = () =>{
    setNewData([])
  }
  return (
    <div style={{margin:'5px'}}>
        <input type='text'  value={data} onChange={(e)=>setData(e.target.value)}/>
        {
       !show ? <button  onClick={HandleSubmit}> Add</button>:
        <button onClick={HandleUpdate}>Update</button>
}
         <button onClick={HandleDeleteAll}>Delete All</button>
        {
            newData.map((val, i)=>
            <div>
                 <h1 key={i}>{val}</h1>
                 <button onClick={()=>HandleEdit(i)} >Edit</button>
                 <button onClick={()=>HandleDelete(i)}>Delete</button>
            </div>
            )
        }
    </div>
  );
}

export default Crud2;
