/*global describe, it */
'use strict';
(function () {

	var testemunha;

	before(function() {
		testemunha = new Testemunha(2,3,4);
	});

    describe('Testemunha Testes', function () {
        describe('construtor', function () {        	
            it('devera gerar uma nova exception "Parâmetros não podem ser nulos!"', function () {            	
            	expect(function() {
        			var jose = new Testemunha();
            	}).to.not.throw(new Error('Parâmetros não podem ser nulos!'));
            });
        });


    });
})();
