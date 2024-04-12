import React, { useState } from 'react';
import { Modal, Input } from 'antd';


const FormCultura = ({openCult, handleCancelFormCult, descCultura, setDescCultura, 
                      vlrIdeal, setVlrIdeal, vlrAlta, setVlrAlta, vlrBaixa, setVlrBaixa, verb, idCultura}) => {

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
    console.log(verb);
    handleCancelFormCult(false)
  };

  const handleSubmit = () => {
    jsonCultura = {
      "descCultura": descCultura,
      "vlrIdeal": vlrIdeal,
      "vlrAlta": vlrAlta,
      "vlrBaixa": vlrBaixa
    }

    cadastrar(verb, jsonCultura);

    async function cadastrar(verbo, data){

      if (verbo == 'POST'){
        const response = fetch(`http://localhost:5000/api/culturas`, {
        headers: {
          "Content-Type": "application/json"
        },        
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(data),
      })
      } else if (verbo == 'PUT'){
        console.log(data.key);
        const response = fetch(`http://localhost:5000/api/culturas/${idCultura}`, {
        headers: {
          "Content-Type": "application/json"
        },        
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(data),
      })  
      }      
    }
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