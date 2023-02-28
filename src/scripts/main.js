AOS.init();

// contador
const dataDoEvento = new Date("Jun 7, 2023 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `<b>${diasAteOEvento}</b>d <b>${horasAteOEvento}</b>h <b>${minutosAteOEvento}</b>m <b>${segundosAteOEvento}</b>s`
}, 1000);

// abrir formulario
function openForm() {
    document.getElementById('confirmation').style.display = 'block'
}

// confirmação
document.getElementById('form-confirm').addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const convidado = document.querySelector('.campo-nome');
    const email = document.querySelector('.campo-email');

    let randomNumber = Math.random() * 5000;
        randomNumber = Math.floor(randomNumber + 1);

        document.getElementById('confirmado').innerHTML = `<span class="success">Obrigado, <b>${convidado.value}</b>! aguardo sua presença. Um email foi enviado para <u>${email.value}</u>. Por favor, lembre-se de levar seu documento de identidade e esse código no dia do evento: <br><span class="random-number">${randomNumber}</span></span>`
        convidado.value = ''
        email.value = ''
})