module.exports = (application) => {
	//Verifica sessao
	application.get('/jogo', (req, res) => {
		if (req.session.autorizado) {
			application.app.controllers.jogo.jogo(application, req, res);
		} else {
			res.render('index', {
				status: {
					principal: "Falha!",
					secundario: "Você precisa logar para prosseguir."
				}
			});
		}

	});

	//Deslogar
	application.get('/sair', (req, res) => {
		application.app.controllers.jogo.sairJogo(req, res);
	});
}