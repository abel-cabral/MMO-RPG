module.exports = (application) => {
	//cadastro e login
	application.get('/jogo', (req, res) => {
		application.app.controllers.jogo.jogo(application, req, res);
	});

	//Deslogar
	application.get('/sair', (req, res) => {
		application.app.controllers.jogo.sairJogo(req, res);
	});

	//Suditos
	application.get('/suditos', (req, res) => {
		application.app.controllers.jogo.suditos(application, req, res);
	});

	//Pergaminhos
	application.get('/pergaminhos', (req, res) => {
		application.app.controllers.jogo.pergaminhos(application, req, res);
	});
}