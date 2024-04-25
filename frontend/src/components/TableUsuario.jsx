import React from 'react';
import { Space, Table, Tag, Alert } from 'antd';
import { useState , useEffect} from 'react';

import ConfirmationDelete from './ConfirmationDelete';

const TableUsuario = ({handleEditUser}) => {

  const [idUserDelete, setIdUserDelete] = useState(null);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [message, setMessage] = useState(null);

    const columns = [
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Ações',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a onClick={() => handleEdit(record)}>Editar </a>
              <a onClick={() => handleDelete(record.key)}>Excluir</a>
            </Space>
          ),
        },
      ];

      let json = [];
      const [data, setData] = useState([])

      async function logMovies() {
        let newData = [];
        const response = await fetch('http://localhost:5000/api/usuarios');
        json = await response.json();  
        newData = json;
        newData.map((d) => {
          d.key = d.idUser;
          delete d.idUser;
        })    
        console.log(newData);
        setData(newData)
      }

      useEffect(() => {
        logMovies()
      }, json)
      
      
      const handleDelete = async (id) => {
        setIdUserDelete(id)
        setIsModalDeleteOpen(true)
      }


    const handleEdit = (record) => {   
        console.log(record);
        handleEditUser(record)    
    }

    const handleDeletar = async () => {
      const response = await fetch(`http://localhost:5000/api/usuarios/${idUserDelete}`, {
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

    useEffect(() => {
      setTimeout(() => {
        setMessage(null)
      }, 3000);
    }, [message])


    return (
      <>    
        {isModalDeleteOpen && (
          <ConfirmationDelete isModalDeleteOpen={isModalDeleteOpen} setIsModalDeleteOpen={setIsModalDeleteOpen} handleDeletar={handleDeletar} />
        )}
        {message && (
            <Alert message={message} type="success" />
          )}
        <Table columns={columns} dataSource={data}/>
      </>
  )
} 


export default TableUsuario;

