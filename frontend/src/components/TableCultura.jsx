import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';

const TableCultura = ({handleEditCultura}) => {
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
  //let [data, setData] = useState([])
    
  /*useEffect(() => {
    fetch('http://localhost:5000/api/culturas', {
    method: 'GET',
    headers: {
      'Context-Type': 'application-json'
    }
  }).then(
    (resp) => {
      let newData = []
      resp.json().then(      
      (json) => {           
        json.map((v) => {
          newData.Key = v.idCultura,
          newData.descCultura = v.descCultura,
          newData.vlrIdeal = v.vlrIdeal,
          newData.vlrAlta = v.vlrAlta,
          newData.vlrBaixa = v.vlrBaixa    
        })  
        data = newData; 
        console.log(data);
      }  
    )
    
  }
  ).catch((err) => console.log(err))
  }) */
    
  let json = [];
  const [data, setData] = useState([])

  async function logMovies() {
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
  

  /*const data = [
    {
      key: '1',
      descCultura: 'Alface',
      vlrIdeal: 450,
      vlrBaixa: 300,
      vlrAlta: 600,
    },
    {
      key: '2',
      descCultura: 'Almerão',
      vlrIdeal: 472,
      vlrBaixa: 260,
      vlrAlta: 530,
    },
    {
      key: '3',
      descCultura: 'Rúcula',
      vlrIdeal: 430,
      vlrBaixa: 200,
      vlrAlta: 800,
    },
  ]; */

  const handleDelete = (record) => {
    console.log(record);
}

const handleEdit = (record) => {     
  handleEditCultura(record)    
} 

   return <Table columns={columns} dataSource={data} />
}
export default TableCultura;