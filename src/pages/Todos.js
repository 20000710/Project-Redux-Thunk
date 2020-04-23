import React, { useState, useEffect } from 'react';
import { getDataAPI } from '../redux/Actions/ActionGetData';   
  
import { connect } from 'react-redux';


const Todos = (props) => {
    console.log("todos", props)

    const [dataName, setDataName] = useState("")
    const getData = props.getDataAPI;

    useEffect(()=>{
        getData()       
    }, [getData])

    const handleAdd = (event) =>{
        event.preventDefault();

    }

    const handleChange = (event) => {
        setDataName(event.target.value)
    }
    
    return (
        <div>
            <h1>Data Todos</h1>
            <form onSubmit={handleAdd}>
                <label>input name todos:</label>
                <input type="text" name="dataName" value={dataName} onChange={handleChange}/>
                <input value="add" type="submit"/>
            </form>
                
                {props.dataApi.map((item, index) =>( 
                    <li style={{marginTop: "15px"}} key={index}>{item.title}</li>                        
                ))}
     
        </div>
    )
}

const mapStateToProps = (props) =>{
    console.log("mapProps", props)
    return{
        dataApi: props.reducer.data
    }
}

const mapDispatchProps = (dispatch) =>{
    return{
        getDataAPI: () => dispatch(getDataAPI())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Todos)
