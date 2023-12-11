import React,{useState} from 'react';

const Crud = () => {
    const [data,setData] = useState('');
    const [newData,setNewData]= useState([]);
    
    const AddData = ()=>{
        if(data !== ''){
        setNewData((Ndata)=>[...Ndata,data]);
        setData('')
        }
    }

    const HandleDelte = (index)=>{
        newData.splice(index,1)
        setNewData([...newData])
    }
    const HandleEdit =()=>{ 
         newData.push(data)
         setData(newData)
        
    }
    return (
    <div style={{margin:'50px '}}>
      <input value={data} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={AddData}>Add Data</button>
      {
        newData.map((val,i)=>
           <div>
              <h1>{val}</h1>
              <button onClick={()=>HandleEdit(i)}>Edit</button>
              <button onClick={()=>HandleDelte(i)}>Delete</button>
           </div>
        )
      }
    </div>
  );
}

export default Crud;
