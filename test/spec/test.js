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

 		it('as teorias não devem ser iguais', function () {   
 			var teroria = detetive.criarTeoria();				

 			expect(detetive.criarTeoria()).to.not.eql(teroria);
 		});
    });
})();
