function buttonPressed() {
    var html = '<table border="1">';
    for (var i = 1; i <= 9; i++) {
        html = html + '<tr>'
        for (var j = 1; j <= 9; j++) {
            var x = i * j;
            html = html + '<td>' + x + '</td>';
        }
        html = html + '</tr>';
    }
    html = html + '</table>';
    document.getElementById('table1').innerHTML = html;
}