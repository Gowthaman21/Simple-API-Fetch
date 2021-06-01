import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap"; 
import {TabBody, TabHead, ID, Head} from './styles'

function App() {

    const [list,setList]=useState([])

    useEffect(async () => {
        await axios
        .get(`https://jsonplaceholder.typicode.com/users/`)
        .then((res) => {
            setList(res.data);
            console.log(list)
        })
        .catch((err) =>{ console.log(err) });
    },[])
    
    const tBody =list.map((user) => 
            <tr key={user.id}>
                <ID> {user.id} </ID>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.address.zipcode} </td>
                <td> {user.website} </td>
            </tr>
        );

    return (
        <div className="App">
            <Head> Fetched Data </Head>
            <Table responsive bordered hover variant="Dark">
                <TabHead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>zipcode</td>
                        <td>website</td>
                    </tr>
                </TabHead>
                <TabBody>
                    {tBody}
                </TabBody>
            </Table>
        </div>
    );
}

export default App;
