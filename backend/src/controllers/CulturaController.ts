import { Request, Response } from "express";
import { CulturaRepository } from "../repositories/CulturaRepository";

class CulturaController {
    async novo (req: Request,res: Response){
        const {descCultura,
               vlrIdeal,
               vlrAlta,
               vlrBaixa} = req.body;

        if(!descCultura){
            return res.status(400).json({message: 'O campo de descrição é obrigatório!'})
        }

        if(!vlrIdeal){
            return res.status(400).json({message: 'O campo valor ideal de umidade é obrigatório!'})
        } else if(vlrIdeal < 0){
            return res.status(400).json({message: 'O campo valor ideal de umidade não pode ser menor que zero!'})
        }

        if(!vlrAlta){
            return res.status(400).json({message: 'O campo valor de umidade alta é obrigatório!'})
        } else if(vlrAlta < 0){
            return res.status(400).json({message: 'O campo valor de umidade alta não pode ser menor que zero!'})
        }

        if(!vlrBaixa){
            return res.status(400).json({message: 'O campo valor de umidade baixa é obrigatório!'})
        } else if(vlrBaixa < 0){
            return res.status(400).json({message: 'O campo valor de umidade baixa não pode ser menor que zero!'})
        }

        try {
            const cultura = await CulturaRepository.create({
                descCultura,
                vlrIdeal,
                vlrAlta,
                vlrBaixa
            })

            await CulturaRepository.save(cultura)

            return res.status(201).json({message: 'Registro cadastrado com sucesso!'})

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde!'});            
        }

    }   

    async buscatodos (req: Request,res: Response){
        const culturas = await CulturaRepository.find();

        if(!culturas){
            return res.status(404).json({message: 'Nenhum registro encontrado!'})
        }     

        return res.status(200).json(culturas)
    }

    async busca (req: Request,res: Response){
        const idCultura = Number(req.params.id);

        if(!idCultura){
            return res.status(400).json({message: 'Favor informar um id cultura válido!'})
        }

        const cultura = await CulturaRepository.findOne({where: {idCultura}})

        if(!cultura){
            return res.status(404).json({message: `Registro não econtrado!`})
        }

        const retCultura = {
            key: cultura.idCultura,
            descCultura: cultura.descCultura,
            vlrIdeal: cultura.vlrIdeal,
            vlrAlta: cultura.vlrAlta,
            vlrBaixa: cultura.vlrBaixa
        }

        return res.status(200).json(retCultura)        
    }

    async atualizar (req: Request,res: Response){
        const idCultura = Number(req.params.id);

        const {descCultura,
            vlrIdeal,
            vlrAlta,
            vlrBaixa} = req.body;

        if(!idCultura){
            return res.status(400).json({message: 'Favor informar um id cultura válido!'})
        }

        const cultura = await CulturaRepository.findOne({where: {idCultura}})

        if(!cultura){
            return res.status(404).json({message: `Registro não econtrado!`})
        }

        if(!vlrIdeal){
            return res.status(400).json({message: 'O campo valor ideal de umidade é obrigatório!'})
        } else if(vlrIdeal < 0){
            return res.status(400).json({message: 'O campo valor ideal de umidade não pode ser menor que zero!'})
        }

        if(!vlrAlta){
            return res.status(400).json({message: 'O campo valor de umidade alta é obrigatório!'})
        } else if(vlrAlta < 0){
            return res.status(400).json({message: 'O campo valor de umidade alta não pode ser menor que zero!'})
        }

        if(!vlrBaixa){
            return res.status(400).json({message: 'O campo valor de umidade baixa é obrigatório!'})
        } else if(vlrBaixa < 0){
            return res.status(400).json({message: 'O campo valor de umidade baixa não pode ser menor que zero!'})
        }

        try {cultura.descCultura = descCultura,
            cultura.vlrIdeal     = vlrIdeal,
            cultura.vlrAlta      = vlrAlta,
            cultura.vlrBaixa     = vlrBaixa

            await CulturaRepository.update(idCultura, cultura);
            await CulturaRepository.save(cultura);

            return res.status(201).json({message: 'Registro alterado com sucesso!'})       

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde!'});            
        }
        
    }

    async deletar (req: Request,res: Response){
        const idCultura = Number(req.params.id);

        if(!idCultura){
            return res.status(400).json({message: 'Favor informar um id cultura válido!'})
        }

        const cultura = await CulturaRepository.findOne({where: {idCultura}})

        if(!cultura){
            return res.status(404).json({message: `Registro não econtrado!`})
        }

        try {
            await CulturaRepository.delete(idCultura);
            return res.status(200).json({message: `Registro excluído com sucesso!`})
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: `Erro no servidor, tente novamente mais tarde!`});            
        }
        
    }
}

export default new CulturaController();