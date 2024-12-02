const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn')

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const botonApretado = boton.textContent;

        if (boton.id === 'C') {
            pantalla.textContent = ' ';
            return;
        }

        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'SyntaxError'){
                pantalla.textContent = ' ';
            } 
            else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                return;
            }
            if (pantalla.textContent.length === 1 && pantalla.textContent === '0') {
                pantalla.textContent = ' ';
                return;
            }
        }

        if (boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'SyntaxError'
            }
            return;
        }

        if (pantalla.textContent === ' ' || pantalla.textContent === 'SyntaxError' || pantalla.textContent === '0') {
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }

    })
})