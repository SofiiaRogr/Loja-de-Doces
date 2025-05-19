document.addEventListener('DOMContentLoaded', function () {
    const doces = [
      { id: 1, nome: "Barrinha de Chocolate", descricao: "Deliciosa barra de chocolate ao leite", preco: 3.50, categoria: "chocolate", emoji: "🍫" },
      { id: 2, nome: "Jujubas Coloridas", descricao: "Mix de jujubas com diversos sabores", preco: 2.90, categoria: "goma", emoji: "🍬" },
      { id: 3, nome: "Pirulito Gigante", descricao: "Pirulito com 15cm de diâmetro", preco: 5.00, categoria: "doce", emoji: "🍭" },
      { id: 4, nome: "Bala de Café", descricao: "Bala com sabor intenso de café", preco: 1.50, categoria: "doce", emoji: "🍬" },
      { id: 5, nome: "Chocolate Branco", descricao: "Barra de chocolate branco cremoso", preco: 4.20, categoria: "chocolate", emoji: "🍫" },
      { id: 6, nome: "Goma de Ursinho", descricao: "Pacote com 50 ursinhos de goma", preco: 7.90, categoria: "goma", emoji: "🐻" },
      { id: 7, nome: "Bala de Hortelã", descricao: "Bala refrescante de hortelã", preco: 1.20, categoria: "doce", emoji: "🍬" },
      { id: 8, nome: "Chocolate Amargo", descricao: "Barra de chocolate 70% cacau", preco: 6.50, categoria: "chocolate", emoji: "🍫" },
      { id: 9, nome: "Torrone", descricao: "Torrone italiano tradicional", preco: 8.90, categoria: "doce", emoji: "🍯" },
      { id: 10, nome: "Biscoito Recheado", descricao: "Biscoito com recheio de chocolate", preco: 2.30, categoria: "salgado", emoji: "🍪" },
      { id: 11, nome: "Maçã do Amor", descricao: "Maçã caramelizada tradicional", preco: 9.90, categoria: "doce", emoji: "🍎" },
      { id: 12, nome: "Pipoca Doce", descricao: "Pipoca caramelizada crocante", preco: 4.50, categoria: "salgado", emoji: "🍿" },
      { id: 13, nome: "Bolo de Morango", descricao: "Bolo fofinho com cobertura de morango", preco: 12.00, categoria: "doce", emoji: "🍰" }
    ];
  
    let carrinho = [];
  
    const container = document.getElementById('doces-container');
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const carrinhoBtn = document.getElementById('carrinho');
  
    function renderDoces(categoria = 'todos') {
      container.innerHTML = '';
      const docesFiltrados = categoria === 'todos' ? doces : doces.filter(doce => doce.categoria === categoria);
      docesFiltrados.forEach(doce => {
        const doceCard = document.createElement('div');
        doceCard.className = 'doce-card';
        doceCard.innerHTML = `
          <div class="doce-imagem">${doce.emoji}</div>
          <div class="doce-info">
            <h3 class="doce-nome">${doce.nome}</h3>
            <p class="doce-descricao">${doce.descricao}</p>
            <p class="doce-preco">R$ ${doce.preco.toFixed(2)}</p>
            <div class="doce-acoes">
              <button class="btn btn-detalhes">Detalhes</button>
              <button class="btn btn-comprar" data-id="${doce.id}">Adicionar ao Carrinho</button>
            </div>
          </div>`;
        container.appendChild(doceCard);
      });
    }
  
    function atualizarCarrinho() {
        let total = 0;
        carrinho.forEach(item => total += item.preco);
        carrinhoBtn.innerText = `Carrinho: ${carrinho.length} itens | Total: R$ ${total.toFixed(2)}`;
      }
      
  
    categoriaBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        categoriaBtns.forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
        const categoria = this.getAttribute('data-categoria');
        renderDoces(categoria);
      });
    });
  
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('btn-comprar')) {
        const doceId = e.target.getAttribute('data-id');
        const doce = doces.find(d => d.id == doceId);
        carrinho.push(doce);
        atualizarCarrinho();
        alert(`${doce.nome} adicionado ao carrinho! 🛒`);
      }
    });
  
    renderDoces();
  });
; 
var radio = document.querySelector('.manual-bnt')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}
const doces = [
  { id: 1, nome: "Barrinha de Chocolate", descricao: "Deliciosa barra de chocolate ao leite", preco: 3.50, categoria: "chocolate", emoji: "🍫" },
  { id: 2, nome: "Jujubas Coloridas", descricao: "Mix de jujubas com diversos sabores", preco: 2.90, categoria: "goma", emoji: "🍬" },
  { id: 3, nome: "Pirulito Gigante", descricao: "Pirulito com 15cm de diâmetro", preco: 5.00, categoria: "doce", emoji: "🍭" },
  { id: 4, nome: "Bala de Café", descricao: "Bala com sabor intenso de café", preco: 1.50, categoria: "doce", emoji: "🍬" },
  { id: 5, nome: "Chocolate Branco", descricao: "Barra de chocolate branco cremoso", preco: 4.20, categoria: "chocolate", emoji: "🍫" },
  { id: 6, nome: "Goma de Ursinho", descricao: "Pacote com 50 ursinhos de goma", preco: 7.90, categoria: "goma", emoji: "🐻" },
  { id: 7, nome: "Bala de Hortelã", descricao: "Bala refrescante de hortelã", preco: 1.20, categoria: "doce", emoji: "🍬" },
  { id: 8, nome: "Chocolate Amargo", descricao: "Barra de chocolate 70% cacau", preco: 6.50, categoria: "chocolate", emoji: "🍫" },
  { id: 9, nome: "Torrone", descricao: "Torrone italiano tradicional", preco: 8.90, categoria: "doce", emoji: "🍯" },
  { id: 10, nome: "Biscoito Recheado", descricao: "Biscoito com recheio de chocolate", preco: 2.30, categoria: "salgado", emoji: "🍪" },
  { id: 11, nome: "Maçã do Amor", descricao: "Maçã caramelizada tradicional", preco: 9.90, categoria: "doce", emoji: "🍎" },
  { id: 12, nome: "Pipoca Doce", descricao: "Pipoca caramelizada crocante", preco: 4.50, categoria: "salgado", emoji: "🍿" }
];

let carrinho = [];

const container = document.getElementById('doces-container');
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const carrinhoBtn = document.getElementById('carrinho');

function renderDoces(categoria = 'todos') {
  container.innerHTML = '';
  const docesFiltrados = categoria === 'todos' ? doces : doces.filter(doce => doce.categoria === categoria);
  docesFiltrados.forEach(doce => {
    const doceCard = document.createElement('div');
    doceCard.className = 'doce-card';
    doceCard.innerHTML = `
      <div class="doce-imagem">${doce.emoji}</div>
      <div class="doce-info">
        <h3 class="doce-nome">${doce.nome}</h3>
        <p class="doce-descricao">${doce.descricao}</p>
        <p class="doce-preco">R$ ${doce.preco.toFixed(2)}</p>
        <div class="doce-acoes">
          <button class="btn btn-detalhes">Detalhes</button>
          <button class="btn btn-comprar" data-id="${doce.id}">Adicionar ao Carrinho</button>
        </div>
      </div>`;
    container.appendChild(doceCard);
  });
}

function atualizarCarrinho() {
  let total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  carrinhoBtn.innerText = `Carrinho: ${carrinho.length} itens | Total: R$ ${total.toFixed(2)}`;
}

categoriaBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    categoriaBtns.forEach(b => b.classList.remove('ativo'));
    this.classList.add('ativo');
    const categoria = this.getAttribute('data-categoria');
    renderDoces(categoria);
  });
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-comprar')) {
    const doceId = e.target.getAttribute('data-id');
    const doce = doces.find(d => d.id == doceId);
    carrinho.push(doce);
    atualizarCarrinho();
    alert(`${doce.nome} adicionado ao carrinho! 🛒`);
  }
});

document.getElementById('form-novo-doce').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('novo-nome').value.trim();
  const descricao = document.getElementById('novo-descricao').value.trim();
  const preco = parseFloat(document.getElementById('novo-preco').value);
  const categoria = document.getElementById('novo-categoria').value.trim().toLowerCase();
  const emoji = document.getElementById('novo-emoji').value.trim();

  if (!nome || !descricao || isNaN(preco) || !categoria || !emoji) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const novoDoce = {
    id: Date.now(),
    nome,
    descricao,
    preco,
    categoria,
    emoji
  };

  doces.push(novoDoce);
  const categoriaAtual = document.querySelector('.categoria-btn.ativo').dataset.categoria;
  renderDoces(categoriaAtual);
  this.reset();
  alert(`${nome} foi adicionado com sucesso! 🎉`);
});

renderDoces();