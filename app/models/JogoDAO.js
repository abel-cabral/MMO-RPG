1 //Objeto que executa a conexão
function JogoDAO(connection) {
    this._connection = connection();
}

//Gerador de habilidades basicas e aleatória de 0 a 1000 + controlador ternário controlando valor minimo
JogoDAO.prototype.gerar_habilidades = function (usuario) {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("jogo", (err, collection) => {

            //Valores Randomicos das casas
            var atributos = [
                Math.floor(Math.random() * 30),
                Math.floor(Math.random() * 20),
                Math.floor(Math.random() * 1000),
                Math.floor(Math.random() * 1000),
                Math.floor(Math.random() * 1000),
                Math.floor(Math.random() * 1000)
            ]
            collection.insert({
                usuario: usuario,
                moedas: atributos[0] < 15 ? 15 : atributos[0],
                suditos: atributos[1] < 10 ? 10 : atributos[1],
                temor: atributos[2] < 200 ? atributos[2] + 200 : atributos[2] + 100,
                sabedoria: atributos[3] < 200 ? atributos[3] + 200 : atributos[3] + 100,
                comercio: atributos[4] < 200 ? atributos[4] + 200 : atributos[4] + 100,
                magia: atributos[5] < 200 ? atributos[5] + 200 : atributos[5] + 100
            });
            mongoclient.close();
        });
    });
}

//Buscar Atributos do Jogador
JogoDAO.prototype.pegar_atributos = function (usuario, bandeira, req, res) {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("jogo", (err, collection) => {
            collection.find({usuario: usuario}).toArray((err, result) => { 
                res.render('jogo', {
                    img_casa: bandeira,
                    jogador: usuario,		
                    habilidades: result[0]
                });                
            });
            mongoclient.close();
        });
    });
}

//Retorno do objeto com seus atributos
module.exports = () => {
    return JogoDAO;
}