
function Greeting ({lang, children}) {
    let Greeting = '';

    switch (lang) {
        case 'fi':
            Greeting = 'Hei';
            break;
        case 'de':
            Greeting = 'Hallo';
            break;
        case 'en':
            Greeting = 'Hello';
            break;
        case 'es':
            Greeting = 'Hola';
            break;
        case 'fr':
            Greeting = 'Bonjour';
            break;
        default:
            Greeting = 'Hello';
    }
    return <p className="Greeting">{Greeting} {children}</p>;
}

export default Greeting;