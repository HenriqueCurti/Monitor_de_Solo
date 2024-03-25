import React, { useState } from 'react';
import { Modal, Input } from 'antd';


const FormUser = ({open, handleCancelFormUser}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    handleCancelFormUser(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name);
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

            <Input 
                type='submit'
                value='Enviar'
                />
                
        </form>
      </Modal>
    </>
  );
};

export default FormUser;