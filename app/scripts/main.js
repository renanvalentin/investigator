function Data (argument) {
	var assassinos = [	
		"Charles B. Abbage",
		"Donald Duck Knuth",
		"Ada L. Ovelace",
		"Alan T. Uring",
		"Ivar J. Acobson",
		"Ras Mus Ler Dorf"
	];

	var locais = [
		"Redmond",
		"Palo Alto",
		"San Francisco",
		"Tokio",
		"Restaurante no Fim do Universo",
		"São Paulo",
		"Cupertino",
		"Helsinki",
		"Maida Vale",
		"Toronto"
	];

	var armas = [
		"Peixeira",
		"DynaTAC 8000X",
		"Trezoitão",
		"Trebuchet",
		"Maça",
		"Gládio"
	];

	return {
		assassinos: assassinos,
		locais: locais,
		arrmas: armas
	}
}

function Testemunha(assassino, local, arma) {
	if(!assassino || !local || !arma)
		throw new Error("Parâmetros não podem ser nulos!");

	var _assassino = assassino,
		_local = local,
		_arma = arma;

	this.validarTeoria;
}

Testemunha.prototype.validarTeoria = function(assassino, local, arma) {

}

function Detetive () {
	this.dados = new Data();
	this.erros = [];
	this.tentativas = [];
}

