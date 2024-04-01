import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginPage = () => (
  <div className="container_login" style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      width: '100%',
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="on"
  >
    <Form.Item
      label="Email"
      name="email"
      type="email"
      rules={[
        {
          required: true,
          message: 'Digite seu email',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Senha"
      name="password"
      type="pass"
      rules={[
        {
          required: true,
          message: 'Digite sua senha',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form.Item>
  </Form>
  </div>
  
);
export default LoginPage;