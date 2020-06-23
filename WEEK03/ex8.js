function buttonPressed() {
    var x1 = document.getElementById('input-1').value;
    x1 = Number(x1);
    var x2 = document.getElementById('input-2').value;
    x2 = Number(x2);
    var x3 = document.getElementById('input-4').value;
    x3 = Number(x3);
    var x4 = document.getElementById('input-8').value;
    x4 = Number(x4);

    var sum = 0;
    sum = sum + x1;
    x2 = x2 * 2;
    sum = sum + x2;
    x3 = x3 * 4;
    sum = sum + x3;
    x4 = x4 * 8;
    sum = sum + x4;

    document.getElementById('output').value = sum;

}