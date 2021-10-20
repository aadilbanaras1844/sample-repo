import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
  Table
} from 'react-bootstrap';
import {
  Form, Button
} from 'react-bootstrap';



function Example(props) {
  const [users, setUsers] = useState([]);

  const getData = async() => {
    const {data} = await axios.get('http://localhost:3000')
    setUsers(data)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getData();
      
  },[]);

  const MyForm  = () => {
    const [vals, setVals] = useState({
        Name: '',
    });
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log('vals ', vals)
        var queryString = Object.keys(vals).map(key => key + '=' + vals[key]).join('&');
        const {data} = await axios.get('http://localhost:3000?'+ queryString)
        setUsers(data)
    }
    
  return <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="Name" value={vals.Name} 
        onChange={(e)=>{setVals({...vals, Name: e.target.value})}}
      placeholder="search Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Have License" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
}


  return (
    <div>
            <MyForm />
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>EIDA</th>
            <th>Has License</th>
            <th>Is Citizen</th>
            </tr>
        </thead>
        <tbody>
            {users.map((row, index) => (
                <tr>
                    <td>{index+1}</td>
                    <td>{row.Name}</td>
                    <td>{row.EIDA}</td>
                    {/* <td>{row.hasDrivingLicense.toString()}</td>
                    <td>{row.isCitizen.toString()}</td> */}
                </tr>
            ))}
            
            
        </tbody>
        </Table>
    </div>
  );
}

export default Example;