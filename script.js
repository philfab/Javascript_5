document.addEventListener('keydown', function (event) {

    const container = document.getElementById('container');
    console.log(container.scrollHeight);
    if ((event.key == 'ArrowDown') && (document.querySelectorAll('#container .square').length < 225)) {
        const square = document.createElement('div');
        square.classList.add('square');
        //random hexa to string
        square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        container.appendChild(square);
    }
    else if (event.key == 'ArrowUp') {
        {
            container.removeChild(container.lastChild);
        }

    }
});

document.addEventListener('mousedown', function (event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = "black";
    }
});


