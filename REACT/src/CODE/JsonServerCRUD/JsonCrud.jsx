import React, { useEffect, useState } from 'react'



export default function JsonServerCrud() {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const [editable, setEditable] = useState(false);
  const [editObj, setEditObj] = useState('');



  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch('http://localhost:9000/records');
      const jsonData = await response.json();

      setData(jsonData);

    };

    fetchData();
  }, []);





  const handleAdd = async () => {


    const response = await fetch('http://localhost:9000/records', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: value }),

    });


    const newTask = await response.json();
    setData([...data, newTask]);

    setValue('');

  };





  const handleDelete = async (deletingId) => {

    await fetch(`http://localhost:9000/records/${deletingId}`, {
      method: 'DELETE',
    });

    setData(data.filter(obj => obj.id !== deletingId));

  };





  const handleSave = async () => {

    const response = await fetch(`http://localhost:9000/records/${editObj.id}`, {

      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...editObj, task: value })

    });


    const updatedTask = await response.json();


    setData(data.map((obj) =>
      obj.id === updatedTask.id ? updatedTask : obj
    ));

    setEditable(false);
    setValue('');

  }



  const handleEdit = (obj) => {

    setEditable(true);
    setValue(obj.task);
    setEditObj(obj);

  }




  return (
    <>
      <div className="jsoncrud">
        <h2>--- React Module ---JSON SERVER CRUD---</h2>

        <input type="text" value={value} onChange={(e) => {
          setValue(e.target.value);
        }} />




        {
          (editable) ?
            <button onClick={handleSave}>Save</button> :
            <button onClick={handleAdd} >Add</button>
        }



        <div>
          {data.map((obj) => (

            <div key={obj.id} className='jsoncrudlist'>

              <p>{obj.task}</p>

              <button onClick={() => {
                handleDelete(obj.id);
              }}>Delete</button>

              <button onClick={() => {
                handleEdit(obj);
              }}>Edit</button>

            </div>

          ))}
        </div>

      </div>

      <hr />

    </>
  )
}
