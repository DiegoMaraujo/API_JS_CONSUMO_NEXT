import React from 'react'
import axios from 'axios'
import Head from 'next/head'

const Sobre = (data) => (
    <div>
        <Head>
            <title>Sobre empresa</title>
            <meta name='robots' content='index, follow'/>
            <meta name='description' content='Site... de...'/> 
        </Head>
        <h1>Sobre empresa</h1>
        Titulo: {data.response.titulo}<br/>
        Descriçao: {data.response.descricao}
    </div>
)
Sobre.getInitialProps = async () =>{
  const response =   await axios.get(
        'http://localhost:8081/sobre')
        //console.log(response.data)
        return {response: response.data}
}
export default Sobre