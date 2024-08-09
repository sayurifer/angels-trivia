var clima = 'soleado'
switch (clima) {
    case 'lluvioso':
        console.log('recuerda llevar un paraguas.');
        break;
    case 'soleado':
        console.log('Viste ligero.');
    case 'nublado':
        console.log('sal a la calle.');
    default:
        console.log('Tipo de Clima desconocido.');
        break;
}