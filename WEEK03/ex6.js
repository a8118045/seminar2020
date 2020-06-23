var x;

function buttonStartPressed() {
    x = Math.floor(Math.random() * 20) + 1;
}

function buttonAnswerPressed() {
    var text = document.getElementById('input-number').value;
    text = Number(text);
    var output;
    if (x == text) {
        output = 'あたり';
    }
    else if (x < text) {
        output = 'はずれ！それより小さいです'
    }
    else {
        output = 'はずれ！それより大きいです'
    }
    document.getElementById('output-result').innerHTML = output;
}

