import React, { useState } from 'react';
import { Modal, Input } from 'antd';


const FormCultura = ({openCult, handleCancelFormCult, descCultura, setDescCultura, 
                      vlrIdeal, setVlrIdeal, vlrAlta, setVlrAlta, vlrBaixa, setVlrBaixa}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  let jsonCultura;  

  const handleOk = () => {
    handleSubmit();
    setConfirmLoading(true);
    setTimeout(() => {
      handleCancelFormCult(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    handleCancelFormCult(false)
  };

  const handleSubmit = () => {
    jsonCultura = {
      "descCultura": descCultura,
      "vlrIdeal": vlrIdeal,
      "vlrAlta": vlrAlta,
      "vlrBaixa": vlrBaixa
    }

    console.log(jsonCultura);
  }

  return (
    <>
      <Modal
        title="Cadastro de Cultura"
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
                    onChange={(e) => setDescCultura(e.target.value)}              
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
                    onChange={(e) => setVlrIdeal(e.target.value)}                 
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
                    onChange={(e) => setVlrAlta(e.target.value)}                
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
                    onChange={(e) => setVlrBaixa(e.target.value)}                 
                />
            </label>
                
        </form>
      </Modal>
    </>
  );
};

export default FormCultura;