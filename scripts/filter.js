const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        buttons[i].classList.toggle('active');
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const answers = new FormData(e.target);

    const bodyTypeButtons = document.querySelectorAll('.body-type-choice');

    const selectedBodyTypes = []

    for (let i = 0; i < bodyTypeButtons.length; i++) {
        const button = bodyTypeButtons[i]
        const isButtonActive = button.classList.contains('active');

        if (isButtonActive === true) {
            selectedBodyTypes.push(button.value);
        }
    }

    const colorButtons = document.querySelectorAll('.color-choice');

    const selectedColors = []

    for (let i = 0; i < colorButtons.length; i++) {
        const button = colorButtons[i]
        const isButtonActive = button.classList.contains('active');

        if (isButtonActive === true) {
            selectedColors.push(button.value);
        }
    }
    answers.append('colors', selectedColors.join(', '));
    answers.append('bodyTypes', selectedBodyTypes.join(', '));

    const objectAnswers = {}

    for (let pair of answers.entries()) {
        const key = pair[0];
        const value = pair[1];

        if (objectAnswers[key]) {
            objectAnswers[key] = `${objectAnswers[key]}, ${value}`;
            continue
        }

        objectAnswers[key] = value;
    }

    // form answers
    alert(JSON.stringify(objectAnswers));
    window.location.href = '../index.html'
})


