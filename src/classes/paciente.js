function Paciente(nome, idade, peso, altura){
    var clazz = {
        imprime : function(){
            console.log("Nome: " + nome + "Idade : " + idade + "Peso: " + peso + "Altura: " + altura);
        },
        batimentos : function(){
            return idade * 365 * 24 * 60 * 80;
        },
        imc : function(){
            return peso / (altura * altura);
        }
    };
    return clazz;
}
module.exports = Paciente;