function buttonPressed() {
    var x = document.getElementById('input-base').Value;
    x = Number(x);
    var y = document.getElementById('input-interest').Value;
    y = Number(y);
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    html = html + '<td>年後</td>';
    html = html + '<td>元利合計</td>';
    html = html + '</tr>';
    var rsum = 0;
    for (var i = 1; i <= 10; i++) {
        var ri = x;
        rsum = rsum + ri
        html = html + '<tr>'
        html = html + '<td>' + i + '</td>';
        html = html + '<td>' + x + '</td >';
        html = html + '</tr>';

    }
    html = html + '</table>';
    document.getElementById('table1').innerHTML = html;
}