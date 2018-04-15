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
	//Carregar Habilidades
	
	//Identificação do usuario
	const usuario = req.session.usuario;
	const bandeira = req.session.casa;

	//Cria OBJ e Inicia conexao ao BD e Busca Atributos
	const connection = application.config.dbConnection;
	const JogoDAO = new application.app.models.JogoDAO(connection);

	//Executa as funções pedidas
	JogoDAO.pegar_atributos(usuario, bandeira, req, res);	
}

//Logoff
module.exports.sairJogo = (req, res) => {
	req.session.destroy((err) => {
		res.redirect("/home");
	})
}