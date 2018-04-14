//Objeto que executa a conexão
function JogoDAO(connection) {
    this._connection = connection();
}

//Gerador de habilidades basicas e aleatória de 0 a 1000
JogoDAO.prototype.gerar_habilidades = function (usuario) {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("jogo", (err, collection) => {
            collection.insert({
                usuario: usuario,
                moedas: 15,
                suditos: 10,
                temor: Math.floor(Math.random() * 1000),
                sabedoria: Math.floor(Math.random() * 1000),
                comercio: Math.floor(Math.random() * 1000),
                magia: Math.floor(Math.random() * 1000)
            });
            mongoclient.close();
        });
    });
}

//Retorno do objeto com seus atributos
module.exports = () => {
    return JogoDAO;
}