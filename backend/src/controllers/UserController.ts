import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import  bcrypt  from 'bcrypt';
import 'dotenv/config'

class UserController {
    async store( req: Request, res: Response) {
        const {
            name,
            email,
            pass
        } = req.body;

        const userExists = await UserRepository.findOne( { where: { email } })

        if (userExists){
            return res.status(409).json( {message: `E-mail já cadastrado`})
        }

        const salt    = await bcrypt.genSalt(12);
        const newPass = await bcrypt.hash(pass, salt);

        try {
            const user = await UserRepository.create({
                name,
                email,
                pass: newPass
            })
            await UserRepository.save(user);      
            
            return res.status(201).json({message: `Cadastro realizado com sucesso!`})
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Erro no servidor, tente novamente mais tarde!`});
        }   
        
    }
    async busca(req: Request, res: Response) {
        const idUser = Number(req.params.id);

        const user = await UserRepository.findOne( { where: { idUser } })

        if (user){
            return res.status(200).json(user)
        }

        return res.status(404).json({ message: `Usuário não encontrado`})
    }
    async buscaTodos(req: Request, res: Response) {

        const users = await UserRepository.find();

        if (users){
            return res.status(200).json(users)
        }

        return res.status(404).json({ message: `Nenhum usuário encontrado`})
    }
    async atualizar(req: Request, res: Response) {
        const idUser = Number(req.params.id);

        const {
            name,
            email,
            pass
        } = req.body;

        const user = await UserRepository.findOne( { where: { idUser } })

        if (!user){
            return res.status(404).json({ message: `Usuário não encontrado`})
        }

        if(email != user.email){
            const userExists = await UserRepository.findOne( { where: { email } })

            if (userExists){
                return res.status(409).json( {message: `E-mail já cadastrado`})
            }
        }

        let newPass: string;

        if(pass){
            const salt    = await bcrypt.genSalt(12);
            newPass = await bcrypt.hash(pass, salt);
        }   
        
        try {
            user.name = name?name:user.name;
            user.email = email?email:user.email;
            user.pass = newPass?newPass:user.pass;

            const newuser = await UserRepository.update(idUser, user)  

            await UserRepository.save(user);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: `Erro no servidor, tente novamente mais tarde!`});
        }   
        
        return res.status(200).json({message: `Registro alterado com sucesso!`})        
    }
    
    async deletar(req: Request, res: Response) {
        const idUser = Number(req.params.id);

        const user = await UserRepository.findOne( { where: { idUser } })

        if (!user){
            return res.status(404).json({ message: `Usuário não encontrado`})            
        }

        try {
            const user = UserRepository.delete(idUser)
            return res.status(200).json({message: `Registro excluído com sucesso!`})

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: `Erro no servidor, tente novamente mais tarde!`})           
            
        }        
    }
}

export default new UserController()