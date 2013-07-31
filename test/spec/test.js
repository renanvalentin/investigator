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
            it('devera gerar uma nova exception "Parâmetros não podem ser nulos!"', function () {            	
            	expect(function() {
        			var jose = new Testemunha();
            	}).to.not.throw(new Error('Parâmetros não podem ser nulos!'));
            });
        });

        describe('validar teoria', function () {        	
            it('devera retornar 1 caso o assassino esteja errado!"', function () {            	
            	expect(testemunha.validarTeoria(3, 3, 4)).to.be.equal(1);
            });

            it('devera retornar 1 caso todas as hipoteses estajam incorretas"', function () {            	
            	expect(testemunha.validarTeoria(3, 4, 5)).to.be.equal(1);
            });   

            it('devera retornar 1 caso o assassino e a arma estajam incorretos"', function () {            	
            	expect(testemunha.validarTeoria(3, 3, 5)).to.be.equal(1);
            });              
            
            it('devera retornar 2 caso o local esteja errado!"', function () {            	
            	expect(testemunha.validarTeoria(2, 5, 4)).to.be.equal(2);
            });

            it('devera retornar 1 caso o local e a arma estajam incorretos"', function () {            	
            	expect(testemunha.validarTeoria(2, 4, 5)).to.be.equal(2);
            });              

            it('devera retornar 3 caso a arma esteja errada!"', function () {            	
            	expect(testemunha.validarTeoria(2, 3, 5)).to.be.equal(3);
            });                                   
        });    	
    });

    describe('Detetive Testes', function () {

 	

        it('resposta deve ser 0', function () {   
            var resposta = 1,
                tentativas = 0,
                data = new Data(),
                randomAssassino = data.assassinos[_.random(0 , data.assassinos.length - 1)],
                randomLocal = data.locais[_.random(0 , data.locais.length - 1)],
                randomArma = data.armas[_.random(0 , data.armas.length - 1)];

            testemunha = new Testemunha(randomAssassino, randomLocal, randomArma);

            console.log(testemunha);

            resposta = detetive.criarTeoria();

            for (var i = 0; i < 100; i++) {
                var teoria = detetive.criarTeoriaBaseadoEmResposta(resposta);

                console.log(teoria);

                resposta = testemunha.validarTeoria(teoria.assassino, teoria.local, teoria.arma);

                if(resposta == 0)
                    break;
            };


            expect(resposta).to.be.equal(0);
        });        
    });
})();
