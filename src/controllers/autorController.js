import {autor} from "../models/autores.js";

class AutorController {
    
        static async listarAutores(req, res){

            try{
                const listaAutores = await autor.find({});
                res.status(200).json(listaAutores);
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao listar autores`});	
            }
        }

        static async listarAutorPorId(req, res){

            try{
                const id = req.params.id;
                const autorEncontrado = await autor.findById(id);
                res.status(200).json(autorEncontrado);
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao encontrar autor`});	
            }
        };

        static async cadastrarAutor(req, res){
            
            try{
                
                const novoAutor = await autor.create(req.body);
                res.status(201).json({message: "Autor cadastrado com sucesso!", autor: novoAutor});
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao cadastrar autor`});	

            }
        }

        static async atualizarAutor(req, res){
            
            try{
                const id = req.params.id;
                await autor.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Autor atualizado com sucesso"})       
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao atualizar autor`});	

            }
        };

        static async removerAutor(req, res){
            
            try{
                const id = req.params.id;
                await autor.findByIdAndDelete(id);
                res.status(200).json({message: "Autor excluido com sucesso"})       
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao excluir autor`});	

            }
        };
};

export default AutorController; // exportando o controller para ser utilizado em outros arquivos