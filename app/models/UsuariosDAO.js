//Objeto que executa a conexão
function UsuariosDAO(connection) {
    this._connection = connection();
}

//Propriedade que grava no banco
UsuariosDAO.prototype.inserirUsuario = function (usuario) {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("usuarios", (err, collection) => {           
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}

//Processo de autenticação e sessao
UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("usuarios", (err, collection) => {
            collection.find(usuario).toArray((err, result) => {

                if (result[0] != undefined) {
                    
                    //variaveis de sessao
                    req.session.autorizado = true;
                    req.session.usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }

                if (req.session.autorizado) {
                    res.redirect("jogo");
                } else {
                    res.render("index", {
                        status: {
                            principal: "Falha!",
                            secundario: "Nome ou senha inválidos."
                        }
                    });
                }

            });
            mongoclient.close();
        });
    });
}



//Retorno do objeto com seus atributos
module.exports = () => {
    return UsuariosDAO;
}