import React, { useState } from 'react';
import { Modal, Input } from 'antd';


const FormUser = ({open, handleCancelFormUser, email, setEmail, name, setName}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');  
  
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');

  let jsonUser;

  const handleOk = () => {
    handleSubmit();    
    setConfirmLoading(true);
    setTimeout(() => {
      handleCancel;
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setPass('');
    setRepass('');
    handleCancelFormUser(false)
  };

  const handleSubmit = () => {
    jsonUser = {
      name: name,
      email: email,
      pass: pass
    }

    console.log(jsonUser);
  }

  return (
    <>
      <Modal
        title="Cadastro de Usuário"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
            <label>
                Nome
                <Input
                    placeholder='Nome do usuário'
                    type='text'
                    required
                    name='username'  
                    value={name}
                    onChange={(e) => setName(e.target.value)}              
                />
            </label>

            <label>
                Email
                <Input
                    placeholder='Email do usuário'
                    type='email'
                    required
                    name='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                 
                />
            </label>

            <label>
                Senha
                <Input
                    placeholder='Digite uma senha para o usuário'
                    type='password'
                    required
                    name='password'  
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}                
                />
            </label>

            <label>
                Confirmação da senha
                <Input
                    placeholder='Digite a senha novamente'
                    type='password'
                    required
                    name='repassword' 
                    value={repass}
                    onChange={(e) => setRepass(e.target.value)}                 
                />
            </label>
                
        </form>
      </Modal>
    </>
  );
};

export default FormUser;