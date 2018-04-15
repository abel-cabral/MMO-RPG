//Identificação
module.exports.jogo = (application, req, res) => {
	//Session False
	if (!req.session.autorizado) {
		res.render('index', {
			status: {
				principal: "Falha!",
				secundario: "Você precisa logar para prosseguir."
			}
		});
		return;
	}
	//Session True
	res.render('jogo', {
		img_casa: req.session.casa
	});
}

//Logoff
module.exports.sairJogo = (req, res) => {
	req.session.destroy((err) => {
		res.redirect("/home");
	})
}

//Atributos do Jogador
module.exports.atributosJogador = (application, req, res) => {
	//Identificação do usuario
	const id_jogador = req.session._id;

	//Cria OBJ e Inicia conexao ao BD
	const connection = application.config.dbConnection;
	const JogoDAO = new application.app.models.JogoDAO(connection);

	//Executa as funções pedidas
	JogoDAO.pegar_atributos(id_jogador);
}