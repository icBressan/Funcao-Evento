function temperatura()
{
    let F,C;
     F = Number(document.getElementById("F").value);
     C = (F-32)*5/9;
    document.getElementById("mensagem").innerHTML = 
    "A Temperatura de " + F + "ºF convertida para Celsius é " + C + "ºC";    
}

function funcionario()
{
    let nome, salario, inss, ir, salariol;
    nome = (document.getElementById("nome").value);
    salario = Number(document.getElementById("salario").value);

    inss= salario*0.08;
    ir=salario*0.15;
    salariol=salario-inss-ir;

    document.getElementById("mensagem").innerHTML =
    "Bem-Vindo(a) " + nome +"! <br>" +
    "INSS: R$" + inss.toFixed(2) + ".<br>" + "IR: R$" + ir.toFixed(2) + ".<br>" + 
    "Salário Líquido: R$" + salariol.toFixed(2) + "."; 
}

function vendedor()
{
    let fixo, vendas,comissao,final;
    fixo = Number(document.getElementById("fixo").value);
    vendas = Number(document.getElementById("vendas").value);
    comissao=vendas*0.05;
    final=fixo+comissao;
    document.getElementById("mensagem").innerHTML = "O valor da comissão é R$ " 
    +comissao.toFixed(2)+ " e o salário final é R$ " + final.toFixed(2)+".";
}

function prestacao()
{
    let prestacao;
    let valor = Number(document.getElementById("valor").value);
    let taxa = Number(document.getElementById("taxa").value);
    let tempo = Number(document.getElementById("tempo").value);
    prestacao = valor+(valor*(taxa*taxa/100)*tempo);
    document.getElementById("mensagem").innerHTML = "O valor da prestação atualizado é R$ "
    +prestacao.toFixed(2)+".";
}

function professor()
{
    let salb,sal2,inss,ir,salf,qtde,valor;
    qtde = Number(document.getElementById("qtde").value);
    valor = Number(document.getElementById("valor").value);
    salb=qtde*valor;
    sal2=salb*6.2;
    inss=sal2*0.115;
    ir=(sal2-inss)*0.15;
    salf=sal2-ir;
    document.getElementById("mensagem").innerHTML =
    "Salário bruto: R$ " + salb + ".<br>" +
    "INSS: R$ " + inss.toFixed(2) + ".<br>" +
    "IR: R$ " + ir.toFixed(2) + ".<br>" +
    "Salário final: R$ " + salf.toFixed(2);
}

function numeros()
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    if (n1 == n2 ) {
        document.getElementById("mensagem").innerHTML =
        "Números iguais.";
        document.getElementById("mensagem").style.color="blue";
    }
    else {
    document.getElementById("mensagem").innerHTML =
    "Números diferentes.";
    document.getElementById("mensagem").style.color="red";
    }
}

function maioroumenor()
{
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    if (a+b<c) {
        document.getElementById("mensagem").innerHTML =
        "A soma de A+B é menor que C.";
        document.getElementById("mensagem").style.color="red";
    }
    else {
    document.getElementById("mensagem").innerHTML =
    "A soma de A+B é maior que C.";
    document.getElementById("mensagem").style.color="blue";
    } 
    if (a+b==c) {
        document.getElementById("mensagem").innerHTML =
        "A soma de A+B é igual a C. ";
        document.getElementById("mensagem").style.color="orange";   
    }
}

function salario()
{
    let salariop = Number(document.getElementById("salariop").value);
    if ( salariop < 500 ) {
        document.getElementById("mensagem").innerHTML = "Você tem direito ao aumento de salário.";
        document.getElementById("mensagem").style.color="red";
    }
    else {
    document.getElementById("mensagem").innerHTML = "Você não tem direito ao aumento de salário.";
    document.getElementById("mensagem").style.color="blue";
    }
}

function reajustesalario()
{
    let reajuste;
    let salariof = Number(document.getElementById("salariof").value);
    if ( salariof < 500 ) {
        reajuste = (salariof*0.3)+salariof;
        document.getElementById("mensagem").innerHTML = "O salário reajustado é R$"+reajuste.toFixed(2)+".";
        document.getElementById("mensagem").style.color="red";
    }
    else {
    document.getElementById("mensagem").innerHTML = "Você não tem direito ao aumento de salário.";
    document.getElementById("mensagem").style.color="red";
    }
}

function produto()
{
    let total;
    let cod = Number(document.getElementById("cod").value);
    let qtde = Number(document.getElementById("qtde").value);
    if ( cod == 5 ) {
        total=500*qtde;
        document.getElementById("mensagem").innerHTML = "Tênis Nike - R$500,00 <br>"
        +"Total: R$ "+total.toFixed(2)+".";
    }
    if ( cod == 10 ) {
        total=300*qtde;
        document.getElementById("mensagem").innerHTML = "Tênis Adidas - R$500,00 <br>"
        +"Total: R$ "+total.toFixed(2)+".";
    }
    if (cod != 5 && cod != 10) {
    document.getElementById("mensagem").innerHTML = "Código inválido!";
    document.getElementById("mensagem").style.color="red";
    }
}