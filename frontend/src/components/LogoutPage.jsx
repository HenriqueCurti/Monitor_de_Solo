import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const LogoutPage = ( {isModalOpen, setIsModalOpen, handleSair}) => {    
  const handleOk = () => {
    setIsModalOpen(false);
    handleSair('');
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>      
      <Modal title="Tela de Confirmação" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Deseja realmente sair?</p>
      </Modal>
    </>
  );
};
export default LogoutPage;