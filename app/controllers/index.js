module.exports.index = function (application, req, res) {
	res.render('index');
}

module.exports.autenticar = (application, req, res) => {
	//recebe dados do input
	const dados_login = req.body;

	req.assert('usuario', 'Preencha todos os campos').notEmpty();
	req.assert('senha', 'Senha Vazia').notEmpty();

	//Evitar campos vazios
	const validacao = req.validationErrors();

	if (validacao) {
		res.render("index", {
			erros: validacao,
			acertos: dados_login
		});
		return;
	}

	//Abre a conexao e inicia objeto
	const connection = application.config.dbConnection;
	const UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	//Consulta banco
	UsuariosDAO.autenticar(dados_login, req, res);
	
}