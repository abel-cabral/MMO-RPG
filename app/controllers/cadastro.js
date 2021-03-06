module.exports.cadastro = function (application, req, res) {
	res.render('cadastro', {
		validacao: {},
		dadosForm: {}
	});
}

module.exports.cadastrar = function (application, req, res) {

	var dadosForm = req.body;

	req.assert('nome', 'Nome não pode ser vazio').notEmpty();
	req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio').notEmpty();
	req.assert('casa', 'Casa não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render('cadastro', {
			validacao: erros,
			dadosForm: dadosForm
		});
		return;
	}

	//Cria OBJ e Inicia conexao ao BD
	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	var JogoDAO = new application.app.models.JogoDAO(connection);

	//Executa as funções pedidas
	UsuariosDAO.inserirUsuario(dadosForm);
	JogoDAO.gerar_habilidades(dadosForm.usuario);

	//Boas Vindas
	res.redirect('/home');

}

/*
	send
	render
	redirect
*/