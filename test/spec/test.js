/*global describe, it */
'use strict';
(function () {

	var testemunha,
		detetive;

	before(function() {
		testemunha = new Testemunha(2,3,4);
		detetive = new Detetive();
	});

    describe('Testemunha Testes', function () {
        describe('construtor', function () {        	
            it('devera gerar uma nova exception "Parâmetros não podem ser nulos!', function () {            	
            	expect(function() {
        			var jose = new Testemunha();
            	}).to.not.throw(new Error('Parâmetros não podem ser nulos!'));
            });
        });

        describe('validar teoria', function () {        	
            it('devera retornar 1, 2 ou 3 caso o assassino, loca e a arma estejam incorretos.', function () {            	
            	expect(testemunha.validarTeoria(3, 5, 1)).to.not.equal(0);
            });

            it('devera retornar 1 caso o assassino esteja incorreto', function () {            	
            	expect(testemunha.validarTeoria(3, 3, 5)).to.be.equal(1);
            });             
            
            it('devera retornar 2 caso o local esteja errado.', function () {            	
            	expect(testemunha.validarTeoria(2, 5, 4)).to.be.equal(2);
            });           

            it('devera retornar 3 caso a arma esteja errada.', function () {            	
            	expect(testemunha.validarTeoria(2, 3, 5)).to.be.equal(3);
            });                                   
        });    	
    });

    describe('Detetive Testes', function () {

        it('teoria deve ser diferente caso a resposta seja diferente.', function () {   
             var teoria = detetive.criarTeoria();

             expect(detetive.criarTeoriaBaseadoEmResposta(2)).to.not.eql(teoria);
        });
 
        it('resposta deve ser igual a 0.', function () {   
            var resposta,
                data = new Data(),
                randomAssassino = data.assassinos[_.random(0 , data.assassinos.length - 1)],
                randomLocal = data.locais[_.random(0 , data.locais.length - 1)],
                randomArma = data.armas[_.random(0 , data.armas.length - 1)];

            testemunha = new Testemunha(randomAssassino, randomLocal, randomArma); 

            var teoria = detetive.criarTeoria();
            resposta = testemunha.validarTeoria(teoria.assassino, teoria.local, teoria.arma);

            while(resposta != 0) {
                teoria = detetive.criarTeoriaBaseadoEmResposta(resposta);

                resposta = testemunha.validarTeoria(teoria.assassino, teoria.local, teoria.arma);
            };

            expect(resposta).to.be.equal(0);
        });        
    });
})();
