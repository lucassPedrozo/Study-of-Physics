function actionClick() {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.id = 'ball';
    
    ball.style.backgroundColor = randColor();

    const size = 50;
    const posX = Math.floor(Math.random() * (window.innerWidth - size));
    ball.style.left = `${posX}px`;
    ball.style.top = '0px'; // Inicia no topo

    incrementValue();

    ball.onclick = function() {
        this.remove();
        decrementValue();
    };

    applyGravity(ball);
    document.body.appendChild(ball);
}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function clearScreen() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => ball.remove());

    // Resetar o contador para 0
    document.getElementById('count').textContent = '0';
    counter.reset(); // Resetar o contador
}

function createCounter() {
    let value = 0;

    return {
        increment: function() {
            value += 1;
            document.getElementById('count').textContent = value;
        },
        decrement: function() {
            value -= 1;
            document.getElementById('count').textContent = value;
        },
        reset: function() {
            value = 0;
            document.getElementById('count').textContent = value;
        }
    };
}

const counter = createCounter();

function incrementValue() {
    counter.increment();
}

function decrementValue() {
    counter.decrement();
}

function applyGravity(ball) {
    let velocity = 20;
    const gravity = 0.5;
    const bounce = 0.1;

    function update() {
        const rect = ball.getBoundingClientRect();
        let newTop = rect.top + velocity;

        if (newTop + ball.offsetHeight > window.innerHeight) {
            newTop = window.innerHeight - ball.offsetHeight;
            velocity = -velocity * bounce;
        } else {
            velocity += gravity;
        }

        ball.style.top = `${newTop}px`;
        requestAnimationFrame(update);
    }

    update();
}