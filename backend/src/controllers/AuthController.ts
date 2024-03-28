import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import  bcrypt  from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';


class AuthController {
    // Login
    async login( req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await UserRepository.findOne( { where: { email } });

        if (!user){
            return res.status(401).json({ Message: `E-mail não cadastrado`});
        }

        const isValidPass = await bcrypt.compare(password, user.password);

        if (!isValidPass){
            return res.status(401).json({ Message: `Acesso Negado`});
        }

        const token = jwt.sign({ id: user.idUser}, process.env.SECRET, { expiresIn: '1d'})

        res.cookie('access-token', token);
        return res.status(200).json( {message: `Acesso liberado`,
                                        'Token': token})
    }

    // Logout
    async logout( req: Request, res: Response) {
        res.cookie('access-token', '', { maxAge: 1})
    }    
}

export default new AuthController()