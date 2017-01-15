describe('Testes da classe paciente', function(){
    var paciente;
    var Paciente = require('../paciente.js');
    beforeEach(function(){
        paciente = new Paciente("Paulo", 28,  105, 185);
    });

    it('Deve calcular o imc', function(){
        expect(paciente.imc()).toEqual(105 / (185 * 185));
    });
    it('Deve calcular o total de batimentos', function(){
     expect(paciente.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
    }); 
});