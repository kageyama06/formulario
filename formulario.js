// console.log(produto)
let teste = document.getElementById('teste').value
// console.log(teste)
let btn_enviar = document.querySelector('#btn_enviar')
let btn_calcular = document.querySelector('#btn_calcular')
let res = document.querySelector('#res')
let res2 = document.querySelector('#res2')
let prod_array  =[]
let qtd_array = []
let preco_lj = 5.49, preco_lm = 3.99, preco_pr = 6.89


btn_enviar.addEventListener('click', ()=>{
    res.innerHTML = '' 
    // para atualizar o último elemento selecionado

    let produto = document.querySelector('#produto').value
    let qtd = Number(document.querySelector('#qtd').value)
    prod_array.push(produto)
    qtd_array.push(qtd)
    res.innerHTML += '<br>' + 'Produto = ' + produto + '<br>' + 'Quantidade = ' + qtd + 'kg'

    console.log(prod_array)
    console.log(qtd_array)
})

btn_calcular.addEventListener('click', ()=>{
    let total = 0.0
    for(i=0;i<prod_array.length;i++){
        if(prod_array[i]== 'laranja'){
            total = total + preco_lj*qtd_array[i]
        }
        if(prod_array[i]== 'limao'){
            total = total + preco_lm*qtd_array[i]
        }
        if(prod_array[i]== 'pera'){
            total = total + preco_pr*qtd_array[i]
        }
    }
    console.log(total)
    res2.innerHTML += '<br>' + 'Valor total R$ ' + total.toFixed(2)
    res2.style.color = 'darkblue'
    res2.style.fontweight = 'darkblue'
    res2.style.fontweight = '1.4rem'

})