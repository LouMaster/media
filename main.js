$("#calc").click(() => {
    let nat = parseInt($('#nat').val()) * 3;
    let mat = parseInt($('#mat').val());
    let hum = parseInt($('#hum').val()) * 4;
    let ling = parseInt($('#ling').val()) * 2;
    let red = parseInt($('#red').val());
    let ens = parseInt($('#ens').val());

    let nota = (nat + mat + hum + ling + red + ens) / 12;

    $('#nota').text(nota.toFixed(2));

})