import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';

import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

const handleLogout = () => {
   (<LogoutPage/>)
}


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [usuario, SetUsuario] = useState('Henrique');
  const [email, setEmail]     = useState('');
  const [pass, setPass]       = useState('');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      {usuario &&(
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Usuário',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Cadastros',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Sair',
                onClick: handleLogout()
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
            Content
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