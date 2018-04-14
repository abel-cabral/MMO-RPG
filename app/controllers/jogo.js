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

//
module.exports.sairJogo = (req, res) => {
	req.session.destroy((err) => {
		res.redirect("/home");
	})
}