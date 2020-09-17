function calcular() {
    var salariofunc = window.document.querySelector('input#salariofuncionario')//para fazer a ligação com o imput
    var encsociais = window.document.querySelector('input#encargossociais')//para fazer a ligação com o imput
    var quantfuncionarios = window.document.querySelector('input#totalfuncionarios')//para fazer a ligação com o imput
    var cargahora = window.document.querySelector('input#cargahoraria')//para fazer a ligação com o imput
    var res = window.document.querySelector('div#res')
    // abaixo criado as variaveis para convserção do imput, pois ele retorna o valor uma string
    var sl = Number(salariofunc.value)
    var es = Number(encsociais.value)
    var qt = Number(quantfuncionarios.value)
    var ch = Number(cargahora.value)
    var calc = (sl + es) / (qt * ch)      
    res.innerHTML = `<p>Custo da Mão de obra : ${calc}</p>`
}                