module.exports = (application) => {

	application.get('/jogo', (req, res) => {
		application.app.controllers.jogo.jogo(application, req, res);
		//application.app.controllers.jogo.atributosJogador(application, req, res);
		
	});

	//Deslogar
	application.get('/sair', (req, res) => {
		application.app.controllers.jogo.sairJogo(req, res);
	});
}