import {autor} from "../models/autores.js";
import livro from "../models/livros.js";

class LivroController {
    
        static async listarLivros(req, res){

            try{
                const listaLivros = await autor.find({});
                res.status(200).json(listaLivros);
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao listar livros`});	
            }
        }

        static async listarLivroPorId(req, res){

            try{
                const id = req.params.id;
                const livroEncontrado = await livro.findById(id);
                res.status(200).json(livroEncontrado);
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao encontrar livro`});	
            }
        };

        static async cadastrarLivro(req, res){
            const novoLivro = req.body;
            try{
                
                const autorEncontrado = await autor.findById(novoLivro.autor);
                const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
                const livroCriado = await livro.create(livroCompleto);
                res.status(201).json({message: "Livro cadastrado com sucesso!", livro: novoLivro});
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao cadastrar livro`});	

            }
        }

        static async atualizarLivro(req, res){
            
            try{
                const id = req.params.id;
                await livro.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Livro atualizado com sucesso"})       
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao atualizar livro`});	

            }
        };

        static async removerLivro(req, res){
            
            try{
                const id = req.params.id;
                await livro.findByIdAndDelete(id);
                res.status(200).json({message: "Livro excluido com sucesso"})       
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao excluir livro`});	

            }
        };

        static async listarLivrosPorEditora(req, res){
            const editora = req.query.editora;
            try{
                const livrosPorEditora = await livro.find({editora: editora});
                res.status(200).json(livrosPorEditora);
            }

            catch(erro){
                res.status(500).json({message:`${erro.message} - Falha ao listar livros por editora!`});	

            }
        }
};

export default LivroController; 

