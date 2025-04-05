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
