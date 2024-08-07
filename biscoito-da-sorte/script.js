document.getElementById('cookie').addEventListener ('click', function() {
    // Obtém os elementos pelas IDs
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    
    // Troca a classe 'hide' para a div 'screen1' e 'show' para a div 'screen2'
    if (screen1.classList.contains('show')) {
        screen1.classList.remove('show');
        screen1.classList.add('hide');
        screen2.classList.remove('hide');
        screen2.classList.add('show');
      } else {
        screen1.classList.remove('hide');
        screen1.classList.add('show');
        screen2.classList.remove('show');
        screen2.classList.add('hide');
    }
});

document.getElementById('tentative').addEventListener ('click', function() {
    
    // Troca a classe 'hide' para a div 'screen1' e 'show' para a div 'screen2'
    if (screen2.classList.contains('show')) {
        screen2.classList.remove('show');
        screen2.classList.add('hide');
        screen1.classList.remove('hide');
        screen1.classList.add('show');
      } else {
        screen2.classList.remove('hide');
        screen2.classList.add('show');
        screen1.classList.remove('show');
        screen1.classList.add('hide');
    }
});

const frases = [
    "A vida é o que acontece enquanto estamos ocupados fazendo outros planos.",
    "Acredite em si mesmo e todo o resto virá naturalmente.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Não espere por oportunidades, crie-as.",
    "A vida é uma jornada, não um destino.",
    "A persistência é o caminho do sucesso.",
    "Sonhe grande e se atreva a falhar.",
    "O único limite para o nosso futuro é a nossa dúvida de hoje.",
    "Tudo o que você sempre quis está do outro lado do medo.",
    "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
    "A vida é curta demais para esperar.",
    "A felicidade não é algo pronto. Ela vem das suas próprias ações.",
    "Não conte os dias, faça os dias contarem.",
    "A maior recompensa para o trabalho duro não é o que você ganha, mas o que você se torna.",
    "Acredite que você pode e você já está no meio do caminho.",
    "A única forma de alcançar o impossível é acreditar que é possível.",
    "O sucesso é a habilidade de ir de fracasso em fracasso sem perder o entusiasmo.",
    "Não importa quão devagar você vá, desde que você não pare.",
    "Cada dia é uma nova oportunidade para mudar sua vida.",
];

// Função para gerar uma frase aleatória
function gerarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

// Adiciona um evento de clique na imagem
document.getElementById('cookie').addEventListener('click', function() {
    const frase = gerarFraseAleatoria();
    document.querySelector('.luck').textContent = frase;
});