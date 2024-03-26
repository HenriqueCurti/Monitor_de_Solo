import React, { useState } from 'react';
import { Modal, Input } from 'antd';


const FormCultura = ({openCult, handleCancelFormCult}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  
  const [descCultura, setDescCultura] = useState('');
  const [vlrIdeal, setVlrIdeal] = useState(null);
  const [vlrAlta, setVlrAlta] = useState(null);
  const [vlrBaixa, setVlrBaixa] = useState(null);

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    handleCancelFormCult(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name);
  }

  return (
    <>
      <Modal
        title="Cadastro de Usuário"
        open={openCult}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
            <label>
                Descrição
                <Input
                    placeholder='Descrição da cultura'
                    type='text'
                    required
                    name='descCultura'  
                    value={descCultura}
                    onChange={(e) => setName(e.target.value)}              
                />
            </label>

            <label>
                Umidade ideal
                <Input
                    placeholder='Valor de umidade ideal'
                    type='number'
                    required
                    name='vlrIdeal' 
                    value={vlrIdeal}
                    onChange={(e) => setEmail(e.target.value)}                 
                />
            </label>

            <label>
                Umidade Alta
                <Input
                    placeholder='Valor de umidade alta'
                    type='number'
                    required
                    name='vlrAlta'  
                    value={vlrAlta}
                    onChange={(e) => setPass(e.target.value)}                
                />
            </label>

            <label>
                Umidade baixa
                <Input
                    placeholder='Valor de umidade baixa'
                    type='number'
                    required
                    name='vlrBaixa' 
                    value={vlrBaixa}
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

export default FormCultura;