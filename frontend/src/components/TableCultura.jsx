import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Alert } from 'antd';

import ConfirmationDelete from './ConfirmationDelete';

const TableCultura = ({handleEditCultura}) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [idCultDelete, setIiCultDelete] = useState(null)
  const [message, setMessage] = useState(null);

  const columns = [
    {
      title: 'Descrição',
      dataIndex: 'descCultura',
      key: 'descCultura',
    },
    {
      title: 'Umidade Ideal',
      dataIndex: 'vlrIdeal',
      key: 'vlrIdeal',
    },
    {
      title: 'Umidade Máxima',
      dataIndex: 'vlrAlta',
      key: 'vlrAlta',
    },
    {
      title: 'Umidade Mínima',
      dataIndex: 'vlrBaixa',
      key: 'vlrBaixa',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Editar</a>
          <a onClick={() => handleDelete(record.key)}>Excluir</a>
        </Space>
      ),
    },
  ];
    
  let json = [];
  const [data, setData] = useState([])

  async function logMovies() {
    console.log('chamou pelo editar');
    let newData = [];
    const response = await fetch('http://localhost:5000/api/culturas');
    json = await response.json();  
    newData = json;
    newData.map((d) => {
      d.key = d.idCultura;
      delete d.idCultura;
    })    
    setData(newData)
  }

  useEffect(() => {
    logMovies()
  }, json)

  useEffect(() => {
    setTimeout(() => {
      setMessage(null)
    }, 3000);
  }, [message])  


  const handleDelete = async (id) => {
    setIiCultDelete(id);
    setIsModalDeleteOpen(true)
}

const handleDeletar = async () => {
  const response = await fetch(`http://localhost:5000/api/culturas/${idCultDelete}`, {
      headers: {
        "Content-Type": "application/json"
      },        
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    }).then((res) => res = res.json())  
    .then(data => {
       setMessage(data.message);
      logMovies(); 
    })        
      
}

const handleEdit = async (record) => {   
  await handleEditCultura(record)
  logMovies(); 
} 

   return (
    <>    
      {isModalDeleteOpen && (
        <ConfirmationDelete isModalDeleteOpen={isModalDeleteOpen} setIsModalDeleteOpen={setIsModalDeleteOpen} handleDeletar={handleDeletar} />
      )}
      {message && (
            <Alert message={message} type="success" />
          )}
     <Table columns={columns} dataSource={data} />
    </>
    )
}
export default TableCultura;