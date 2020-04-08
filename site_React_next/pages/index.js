import React from 'react'
import axios from 'axios'
import Head from 'next/head'

const  Home =(data) =>(
    <div>
        <Head>
            <title>Home - JavaScript</title>
            <meta name='robots' content='index, follow'/>
            <meta name='description' content='Site de .... sobre...'/>
        </Head>
        {console.log(data.response)}    
    <h1>Listar Usuários</h1>
    <ul>
        {data.response.map(usuario=>(
            <li key={usuario._id}>
                Nome:{usuario.nome}<br/>
                email:{usuario.email}<br/><hr/>
            </li>
        ))}
    </ul>

    </div>
)

Home.getInitialProps = async () =>{
    var response = await axios.get(
        'http://localhost:8081/usuarios'
    )
    //console.log(response.data)
    return {response: response.data}
}
export default Home