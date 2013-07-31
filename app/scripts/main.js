'use strict';

function Data(argument) {
	var assassinos = [	
		'Charles B. Abbage',
		'Donald Duck Knuth',
		'Ada L. Ovelace',
		'Alan T. Uring',
		'Ivar J. Acobson',
		'Ras Mus Ler Dorf'
	];

	var locais = [
		'Redmond',
		'Palo Alto',
		'San Francisco',
		'Tokio',
		'Restaurante no Fim do Universo',
		'São Paulo',
		'Cupertino',
		'Helsinki',
		'Maida Vale',
		'Toronto'
	];

	var armas = [
		'Peixeira',
		'DynaTAC 8000X',
		'Trezoitão',
		'Trebuchet',
		'Maça',
		'Gládio'
	];
	
	return {
		assassinos: assassinos,
		locais: locais,
		armas: armas
	}
}

function Testemunha(assassino, local, arma) {
	if(!assassino || !local || !arma)
		throw new Error('Parâmetros não podem ser nulos!');

	this._assassino = assassino;
	this._local = local;
	this._arma = arma;

	this.validarTeoria;
}

Testemunha.prototype.validarTeoria = function(assassino, local, arma) {
	var self = this;

	if((!valAss() && !valLoc() && !valArm()) || !valAss()) {
		return 1;
	} else if ((!valLoc() && !valArm()) || !valLoc()) {
		return 2;
	} else if (!valArm()) {
		return 3;
	} else {
		return 0;
	}

	function valAss() {
		return self._assassino == assassino;
	}	

	function valLoc() {
		return self._local == local;
	}	

	function valArm() {
		return self._arma == arma;
	}	
}

function Detetive() {
	var _dados = new Data(),
		_informacoesUtilizadas = {
			assassinos: [],
			locais: [],
			armas: []
		},
		_repostaAnterior,
		_repostaAtual;


	this.erros = [];
	this.tentativas = [];
	
	this.ultimoErro;
	this.assassino;
	this.local;
	this.arma;

	this.criarTeoria;	
	this.criarTeoriaBaseadoEmResposta;	

	this.chutarAssassino;	
	this.chutarLocal;	
	this.chutarArma;	


	this.obterProximaTeoria = function() {
		return novaTeoria();
	};

	this.obterProximaTeoriaBaseadoReposta = function(resposta) {
		_repostaAnterior = _repostaAtual;
		_repostaAtual = resposta;

		/*if(_repostaAnterior != _repostaAtual) {
			if(_repostaAtual)
		}*/

		return {
			assassino: assassino,
			local: local,
			arma: arma
		}
	};

	function novaTeoria() {
		var assassino = obterAssassinoParaProximaTeoria(),
			local = obterLocalParaProximaTeoria(),
			arma = obterArmaParaProximaTeoria();

		teoriasUtilizadas(assassino, local, arma);

		return {
			assassino: assassino,
			local: local,
			arma: arma
		} 
	};

	function teoriasUtilizadas(assassino, local, arma) {
		_informacoesUtilizadas.assassinos.push(assassino);
		_informacoesUtilizadas.locais.push(local);
		_informacoesUtilizadas.armas.push(arma);
	};

	function obterAssassinoParaProximaTeoria () {
		var assassinos = _.filter(_dados.assassinos, function(assassino) {
			return !_.contains(_informacoesUtilizadas.assassinos, assassino);
		});

		return assassinos.pop();
	}

	function obterLocalParaProximaTeoria () {
		var locais = _.filter(_dados.locais, function(local) {
			return !_.contains(_informacoesUtilizadas.locais, local);
		});

		return locais.pop();
	}	

	function obterArmaParaProximaTeoria () {
		var armas = _.filter(_dados.armas, function(arma) {
			return !_.contains(_informacoesUtilizadas.armas, arma);
		});

		return armas.pop();
	}
}

Detetive.prototype.criarTeoria = function() {
	return this.obterProximaTeoria();
}

Detetive.prototype.criarTeoriaBaseadoEmResposta = function(resposta) {
	return this.obterProximaTeoriaBaseadoReposta(resposta);
}