import React from 'react';
import { Space, Table, Tag } from 'antd';

const TableUsuario = ({handleEditUser}) => {

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
              <a onClick={() => handleEdit(record.key)}>Excluir</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'João da Silva',
          email: 'joaosilva@email.teste',
        },
        {
          key: '2',
          name: 'Pedro de Souza',
          email: 'pedrosouza@email.teste',
        },
      ];
      
      
      
      const handleDelete = (record) => {
          console.log(record);
      }


    const handleEdit = (record) => {   
        console.log(record);
        handleEditUser(record)    
    }
    return <Table columns={columns} dataSource={data}/>
} 


export default TableUsuario;

