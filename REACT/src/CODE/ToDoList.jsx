import React, { useState } from 'react'

function TodoList() {

    const [value, setValue] = useState('');

    const [data, setData] = useState([]);
    const [id, setId] = useState(1);

    const [editable, setEditable] = useState(false);
    const [editObj, setEditObj] = useState('');




    const add = () => {

        setData([...data, { id: id, task: value }]);
        setId(id + 1);
        setValue('');

    }


    const remove = (id) => {

        setData(data.filter((obj) => obj.id !== id));

    }


    const edit = (obj) => {

        setEditable(true);
        setValue(obj.task);
        setEditObj(obj);

    }


    const save = () => {

        setData(data.map((obj) =>
            obj.id === editObj.id ? { ...obj, task: value } : obj
        ))
        setEditable(false);
        setValue('');

    }

    return (

        <>
            <h2>--- React Module --- React TODO APP ---</h2>

            <div className="todoapp">

                <u>GROCERY SHOPPING</u>

                <input type="text" value={value} onChange={(e) => {
                    setValue(e.target.value)
                }} placeholder='Add Somthing To Your List' />

                {
                    (editable) ?
                        <button onClick={save}>SAVE</button> :
                        <button onClick={add}>ADD</button>
                }


                <div>
                    {data.map((obj) => {

                        return (

                            <div key={obj.id} className='todolists'>

                                <p>{obj.task}</p>

                                <button onClick={() => {
                                    edit(obj)
                                }}>Edit</button>

                                <button onClick={() => {
                                    remove(obj.id)
                                }}>Delete</button>

                            </div>

                        )

                    })}
                </div>

            </div>


            <hr />

        </>


    )
}

export default TodoList