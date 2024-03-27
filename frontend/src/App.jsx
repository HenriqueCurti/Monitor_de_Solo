import React, { useDebugValue, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
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

  // cadastro usuário
  const [name, setName] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCult, setOpenCult] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleEditUser = (data) =>{
     setEmail(data.email);
     setName(data.name);
     setOpen(true)
  }

  const showModal = (setFunction) => {
    setFunction(true);
  };

  const handleCancelFormUser = (value) =>{
    setOpen(value);
    setEmail('');
    setName('');
  }

  const handleCancelFormCult = (value) =>{
    setOpenCult(value);
  }

  const handleSair = (user) => {
    SetUsuario(user)
  }

  return (
    <>
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
         />
      )}
      {openCult && (
        <FormCultura 
        openCult={openCult}
        handleCancelFormCult={handleCancelFormCult}
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
                showModal(setOpen)
              }else if (value.key === 'cultura'){
                showModal(setOpenCult)
              };
            }}
            items={[
              {
                key: 'monitoramento',
                icon: <UserOutlined />,
                label: 'Monitoramento',
              },
              {
                key: 'usuarios',
                icon: <UserOutlined />,
                label: 'Usuários',
              },
              {
                key: 'culturas',
                icon: <UserOutlined />,
                label: 'Culturas',
              },
              {
                key: 'cadastro',
                icon: <VideoCameraOutlined />,
                label: 'Cadastro',
                type: 'divider',
                children: [{
                  key: 'cultura',
                  icon: <UserOutlined />,
                  label: 'Cultura',
                },
                {
                  key: 'user',
                  icon: <UserOutlined />,
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
            <h2>Monitoramento de Solo</h2>
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
            <BrowserRouter>
              <Routes>
                <Route path='/usuarios' element={<TableUsuario handleEditUser={handleEditUser} />}></Route>
                <Route path='/culturas' element={<TableCultura  />}></Route>
              </Routes>
            </BrowserRouter>
            
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
    </>
  )
};
export default App;