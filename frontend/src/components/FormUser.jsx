import React, { useState } from 'react';
import { Modal, Input } from 'antd';


const FormUser = ({open, handleCancelFormUser, email, setEmail, name, setName, idUser, verb}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');  
  
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');

  let jsonUser;

  const handleOk = () => {
    handleSubmit();    
    setConfirmLoading(true);
    setTimeout(() => {      
      setConfirmLoading(false);
    }, 2000)
    handleCancel();
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

    cadastrar(verb, jsonUser);

    async function cadastrar(verbo, data){
      if(verbo == 'POST'){
        const response = fetch('http://localhost:5000/api/usuarios', {
        headers: {
          "Content-Type": "application/json"
        },        
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(data),
      }).then((res) => res = res.json())  
      .then(data => {
         setMessage(data.message);
        <Alert message={message} type="success" />
      })
      } else if(verbo == 'PUT'){
        const response = fetch(`http://localhost:5000/api/usuarios/${idUser}`, {
        headers: {
          "Content-Type": "application/json"
        },        
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(data),
      }).then((res) => res = res.json())  
      .then(data => {
         setMessage(data.message);
        <Alert message={message} type="success" />
      })
      }
      
    }
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