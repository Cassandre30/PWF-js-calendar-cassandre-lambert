    let debug_mode = false;

    // Partie 0
    function generateJanuaryTable() {
        let max_days = 31;
        let current_day = 1;
        let table = '<table><tr>';
        while (current_day <= max_days) {
            table += '<td>' + current_day + '</td>';
            console.log('current/max : ' + current_day + '/' + max_days);
            current_day++;
        }
        table += '</tr></table>';
        document.getElementById('partie-0').innerHTML = table;
    }
    generateJanuaryTable();
// Partie 1
    function generateMultiLineTable() {
        let max_col = 7, max_line = 5;
        let table = '<table>';
        for (let i = 0; i < max_line; i++) {
            table += '<tr>';
            for (let j = 0; j < max_col; j++) {
                table += '<td>' + (i * max_col + j + 1) + '</td>';
            }
            table += '</tr>';
        }
        table += '</table>';
        document.getElementById('partie-1').innerHTML = table;
    }
    generateMultiLineTable();
// Partie 2
    function generateJanuaryCalendar() {
        let max_days_january = 31;
        let current_day = 1;
        let table = '<table>';
        for (let i = 0; i < 5; i++) {
            table += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (current_day <= max_days_january) {
                    table += '<td>' + current_day + '</td>';
                    current_day++;
                }
            }
            table += '</tr>';
        }
        table += '</table>';
        document.getElementById('partie-2').innerHTML = table;
    }
    generateJanuaryCalendar();
