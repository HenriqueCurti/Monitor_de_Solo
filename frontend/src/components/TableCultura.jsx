import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Descrição',
    dataIndex: 'dsCultura',
    key: 'dsCultura',
  },
  {
    title: 'Umidade Ideal',
    dataIndex: 'vlrIdeal',
    key: 'vlrIdeal',
  },
  {
    title: 'Umidade Máxima',
    dataIndex: 'vlrMaximo',
    key: 'vlrMaximo',
  },
  {
    title: 'Umidade Mínima',
    dataIndex: 'vlrMinimo',
    key: 'vlrMinimo',
  },
  {
    title: 'Ações',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Editar</a>
        <a>Excluir</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    dsCultura: 'Alface',
    vlrIdeal: 450,
    vlrMinimo: 300,
    vlrMaximo: 600,
  },
  {
    key: '2',
    dsCultura: 'Almerão',
    vlrIdeal: 472,
    vlrMinimo: 260,
    vlrMaximo: 530,
  },
  {
    key: '3',
    dsCultura: 'Rúcula',
    vlrIdeal: 430,
    vlrMinimo: 200,
    vlrMaximo: 800,
  },
];
const TableCultura = () => <Table columns={columns} dataSource={data} />;
export default TableCultura;