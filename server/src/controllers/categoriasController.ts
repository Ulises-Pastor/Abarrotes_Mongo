import { Request, Response } from 'express'
import Categoria from '../models/categoria.model'

class CategoriasController
{
    public async list(req : Request, res : Response): Promise <void>
    {
        const categorias = await Categoria.find();
        res.json(categorias);
    }

    public async listOne(req : Request, res : Response): Promise <void>
    {
        const categoria = await Categoria.findById(req.params.id);
        res.json(categoria);
    }

    public async create(req : Request, res : Response): Promise <void>
    {
        const { categoria } = req.body;
        try
        {
            const nuevaCategoria = new Categoria(
            {
                categoria
            })
            const categoriaGuardada = await nuevaCategoria.save();
            res.json(
                {
                    id : categoriaGuardada._id,
                    categoria : categoriaGuardada.categoria,
                    createAt : categoriaGuardada.createdAt,
                    updateAt : categoriaGuardada.updatedAt
                });
        }
        catch(error : any)
        {
            res.status(500).json({message : error.message});
        }
    }

    public async update(req : Request, res : Response): Promise <void>
    {
        const categoriaA = await Categoria.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.json(categoriaA);
    }

    public async delete(req : Request, res : Response): Promise <void>
    {
        try
        {
            const categoriaE = await Categoria.findByIdAndDelete(req.params.id);
            res.json(categoriaE);
        }
        catch(error : any)
        {
            res.status(500).json({message : error.message});
        }
    }
}

export const categoriasController = new CategoriasController();