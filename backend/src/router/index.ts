import { body, validationResult } from 'express-validator';
import express from 'express';
const router = express.Router();
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

router.get('/teste', (req, res) => {
    return res.status(200).json({message: `Bem vindo ao Monitoramento de Umidade de Solo`})
})

router.post('/api/usuarios', UserController.store )                      // User Create
router.get('/api/usuarios', UserController.buscaTodos ) 
router.get('/api/usuarios/:id', UserController.busca)                    // User Find
router.put('/api/usuarios/:id', UserController.atualizar)                // User Find
router.delete('/api/usuarios/:id', UserController.deletar)               // User Find

router.post('/api/login',  AuthController.login);         // User Auth
router.get('/api/logout', AuthController.logout)                      // User Auth

export default router