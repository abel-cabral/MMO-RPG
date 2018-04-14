module.exports.jogo = (application, req, res) => {
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