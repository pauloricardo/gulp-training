describe('Teste de consulta', function(){
    var consulta;
    var Consulta = require('../consulta.js');
    var Paciente = require('../paciente.js');
    beforeEach(function(){
        consulta = new Consulta("Paulo", null, null, 0, new Date());
    });
    it('Deve marcar uma consulta para 20 dias a frente', function(){
        var dataAgendamento = consulta.agendarConsulta(20);
        expect(dataAgendamento instanceof Date).toBe(true);
    });
     it('Deve marcar uma consulta para 20 dias a frente sem contar os fins de semana', function(){
        var dataAgendamento = consulta.agendarConsulta(20);
        expect(dataAgendamento instanceof Date).toBe(true);
    });
    it('Deve retornar se a consulta se trata de um retorno', function(){
        expect(consulta.isRetorno()).toBe(0);
    });
    it('Deve retornar o valor de uma consulta particular', function(){
        var paciente = new Paciente("Paulo", 28, 105, 185);
        var consulta = new Consulta(Paciente, ["proc1","proc2"], 1,0,new Date());
        expect(consulta.preco()).toBe((25*2)*2);
    });
    it('Deve retornar o valor de uma consulta publica', function(){
        var paciente = new Paciente("Paulo", 28, 105, 185); 
        var consulta = new Consulta(Paciente, ["proc1","proc2"], 0,0,new Date());
        expect(consulta.preco()).toBe(25*2);
    });
});