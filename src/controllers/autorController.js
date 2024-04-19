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

////src/controllers/autorController.js
import {autor} from "../models/autores.js";

class AutorController {

    static async listarAutores (req, res) {

        try {

            const listaAutores = await autor.find({}); 
            res.status(200).json(listaAutores);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao listar autores!`});
        }
    };

    static async listarAutorPorID (req, res) {

        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id); 
            res.status(200).json(autorEncontrado);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao encontrar autor!`});
        }
    };

    static async cadastrarAutor (req, res) {

        try {

            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Autor cadastrado com sucesso!", autor: novoAutor});

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao cadastrar autor!`});
        }
    };

    static async atualizarAutor (req, res) {

        try {

            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body); 
            res.status(200).json({message: "Autor atualizado com sucesso!"});   

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao atualizar autor!`});
        }
    };

    static async removerAutor (req, res) {

        try {

            const id = req.params.id;
            await autor.findByIdAndDelete(id); 
            res.status(200).json({message: "Autor excluido com sucesso!"}); 

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao excluir autor!`});
        }
    };
};

export default AutorController;







//src/controllers/livroController.js
import { autor } from "../models/autores.js";
import livro from "../models/livros.js";

class LivroController {

    static async listarLivros (req, res) {

        try {

            const listaLivros = await livro.find({}); 
            res.status(200).json(listaLivros);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao listar livros!`});
        }
    };

    static async listarLivroPorID (req, res) {

        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id); 
            res.status(200).json(livroEncontrado);

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao encontrar livro!`});
        }
    };

    static async cadastrarLivro (req, res) {

        const novoLivro = req.body;

        try {

            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Livro cadastrado com sucesso!", livro: novoLivro});

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao cadastrar livro!`});
        }
    };

    static async atualizarLivro (req, res) {

        try {

            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body); 
            res.status(200).json({message: "Livro atualizado com sucesso!"});   

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao atualizar livro!`});
        }
    };

    static async removerLivro (req, res) {

        try {

            const id = req.params.id;
            await livro.findByIdAndDelete(id); 
            res.status(200).json({message: "Livro excluido com sucesso!"}); 

        } catch (erro) {

            res.status(500).json({message:`${erro.message} - Falha ao excluir livro!`});
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha ao listar livros por editora!`});
        }
      
    }
};

export default LivroController;
