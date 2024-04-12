import React, { useDebugValue, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  UserAddOutlined,
  ScheduleOutlined,
  FileAddOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import FormCultura from './components/FormCultura';
import FormUser from './components/FormUser';
import TableCultura from './components/TableCultura';
import TableUsuario from './components/TableUsuario';

import { Layout, Menu, Button, theme, Modal } from 'antd';
const { Header, Sider, Content, Footer } = Layout;



const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [usuario, SetUsuario] = useState('Henrique');
  const [email, setEmail]     = useState('');
  const [pass, setPass]       = useState('');  
  const [idUser, setIdUser]   = useState(null);
  const [page, setPage]       = useState('MONITORAMENTO DO SOLO');
  const [verb, setVerb]       = useState('');

  let navigate = useNavigate;
  // cadastro usuário
  const [name, setName] = useState('');

  // cadastro cultura
  const [idCultura, setIdCultura] = useState(null);
  const [descCultura, setDescCultura] = useState('');
  const [vlrIdeal, setVlrIdeal] = useState(null);
  const [vlrAlta, setVlrAlta] = useState(null);
  const [vlrBaixa, setVlrBaixa] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCult, setOpenCult] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleEditUser = (data) =>{
     setVerb('PUT')
     setIdUser(data.key);
     setEmail(data.email);
     setName(data.name);
     setOpen(true)
  }

  const handleEditCultura = (data) => {
    setIdCultura(data.key)
    setDescCultura(data.descCultura);
    setVlrIdeal(data.vlrIdeal);
    setVlrAlta(data.vlrAlta);
    setVlrBaixa(data.vlrBaixa);
    setVerb('PUT');
    setOpenCult(true)
  }

  const showModal = (setFunction) => {
    setFunction(true);
  };

  const handleCancelFormUser = (value) =>{
    setOpen(value);
    setEmail('');
    setName('');
    setIdUser('')
  }

  const handleCancelFormCult = (value) =>{
    setOpenCult(value);
    setDescCultura('');
    setVlrIdeal(null);
    setVlrAlta(null);
    setVlrBaixa(null);
    setIdCultura('');
  }

  const handleSair = (user) => {
    SetUsuario(user)
  }

  return (
    <>
    <BrowserRouter>
      {isModalOpen && (
        <LogoutPage 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen}
          handleSair={handleSair}/>
      )}
      {open && (
        <FormUser 
         open={open}
         handleCancelFormUser={handleCancelFormUser}
         email={email}
         name={name}
         setEmail={setEmail}
         setName={setName}
         idUser={idUser}
         verb={verb}
         navigate={navigate}         
         />
      )}
      {openCult && (
        <FormCultura 
        openCult={openCult}
        handleCancelFormCult={handleCancelFormCult}
        descCultura={descCultura}
        setDescCultura={setDescCultura}
        vlrAlta={vlrAlta}
        setVlrAlta={setVlrAlta}
        vlrIdeal={vlrIdeal}
        setVlrIdeal={setVlrIdeal}
        vlrBaixa={vlrBaixa}
        setVlrBaixa={setVlrBaixa}
        verb={verb}
        idCultura={idCultura}
        />
      )}
      {usuario &&(
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />          
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['monitoramento']}
            onClick={(value) =>{
              if(value.key === 'sair'){                
                showModal(setIsModalOpen)
              }else if (value.key === 'user'){
                setVerb('POST');
                showModal(setOpen)
              }else if (value.key === 'cultura'){
                setVerb('POST')
                showModal(setOpenCult)
              }else if (value.key === 'culturas'){
                setPage('CULTURAS')
              }else if (value.key === 'usuarios'){
                setPage('USUÁRIOS')
              }else if (value.key === 'monitoramento'){
                setPage('MONITORAMENTO DO SOLO')
              };
            }}
            items={[
              {
                key: 'monitoramento',
                icon: <ScheduleOutlined />,
                label: <Link to={'/'}>Monitoramento</Link>,
              },
              {
                key: 'usuarios',
                icon: <UserOutlined />,
                label: <Link to={'/usuarios'}>Usuários</Link> ,
              },
              {
                key: 'culturas',
                icon: <FileTextOutlined />,
                label: <Link to={'/culturas'}>Culturas</Link> ,
              },
              {
                key: 'cadastro',
                //icon: <CarelDownOutline />,
                label: 'Cadastro',
                type: 'divider',
                children: [{
                  key: 'cultura',
                  icon: <FileAddOutlined />,
                  label: 'Cultura',
                },
                {
                  key: 'user',
                  icon: <UserAddOutlined />,
                  label: 'Usuário',
                }]
              },
              {                
                key: 'sair',
                icon: <UploadOutlined />,
                label: 'Sair'
              },
            ]}
          />         
          
        </Sider>
        <Layout>
          <Header          
            style={{
              padding: 0,
              background: colorBgContainer,
              display: 'flex',
              flexDirection:'row',
              alignItems: 'center',         
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}            
            />
            <h2>{page}</h2>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: "70vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            
              <Routes>
                <Route path='/usuarios' element={<TableUsuario handleEditUser={handleEditUser} />}></Route>
                <Route path='/culturas' element={<TableCultura handleEditCultura={handleEditCultura} />}></Route>
              </Routes>
            
            
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Univesp ©{new Date().getFullYear()} Created by Project Integrator Group
          </Footer>
        </Layout>
      </Layout>
      )} {!usuario && (<LoginPage/>)}        
      </BrowserRouter>
    </>    
  )
};
export default App;