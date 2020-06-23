function buttonPressed() {
    var x = document.getElementById('input-number').value;
    x = Number(x);

    var output1 = 0;
    var output2 = 0;
    var output3 = 0;
    var output4 = 0;
    var output5 = 0;
    var output6 = 0;

    for (var i = 1; i <= x; i++) {
        var y = Math.floor(Math.random() * 6) + 1;

        if (y == 1) {
            output1 = output1 + 1;
        }
        else if (y == 2) {
            output2 = output2 + 1;
        }
        else if (y == 3) {
            output3 = output3 + 1;
        }
        else if (y == 4) {
            output4 = output4 + 1;
        }
        else if (y == 5) {
            output5 = output5 + 1;
        }
        else {
            output6 = output6 + 1;
        }
    }

    document.getElementById('output-1').value = output1;
    document.getElementById('output-2').value = output2;
    document.getElementById('output-3').value = output3;
    document.getElementById('output-4').value = output4;
    document.getElementById('output-5').value = output5;
    document.getElementById('output-6').value = output6;

}