import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ConfirmationDelete = ( {isModalDeleteOpen, setIsModalDeleteOpen, handleDeletar}) => {    
  const handleOk = () => {
    setIsModalDeleteOpen(false);
    handleDeletar();
  };
  const handleCancel = () => {
    setIsModalDeleteOpen(false);
  };
  return (
    <>      
      <Modal title="Exclusão de Registro" open={isModalDeleteOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Deseja realmente excluir o registro selecionado?</p>
      </Modal>
    </>
  );
};
export default ConfirmationDelete;