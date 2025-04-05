document.addEventListener("DOMContentLoaded", function() {
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

    // Partie 3
    function print_table_month(max_days) {
        let current_day = 1;
        let table = '<table>';
        for (let i = 0; i < Math.ceil(max_days / 7); i++) {
            table += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (current_day <= max_days) {
                    table += '<td>' + current_day + '</td>';
                    current_day++;
                }
            }
            table += '</tr>';
        }
        table += '</table>';
        return table;
    }
    document.getElementById('partie-3').innerHTML = print_table_month(29);

    // Partie 4
    function generateAllMonths() {
        const month_names = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        const month_max_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let all_months_html = '';
        for (let i = 0; i < month_max_days.length; i++) {
            all_months_html += '<h3>' + month_names[i] + '</h3>';
            all_months_html += print_table_month(month_max_days[i]);
        }
        document.getElementById('partie-4').innerHTML = all_months_html;
    }
    generateAllMonths();

    // Partie 5
    function generateCurrentMonthWithCurrentDay() {
        const month_names = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        const month_max_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let today = new Date();
        let current_month = today.getMonth();
        let current_day = today.getDate();
        let month_name = month_names[current_month];
        let max_days = month_max_days[current_month];

        let table = '<h3>' + month_name + '</h3>';
        table += print_table_month_with_today(max_days, current_day);
        
        document.getElementById('partie-5').innerHTML = table;
    }

    function print_table_month_with_today(max_days, today) {
        let current_day = 1;
        let table = '<table>';
        for (let i = 0; i < Math.ceil(max_days / 7); i++) {
            table += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (current_day <= max_days) {
                    table += '<td' + (current_day === today ? ' class="today"' : '') + '>' + current_day + '</td>';
                    current_day++;
                }
            }
            table += '</tr>';
        }
        table += '</table>';
        return table;
    }
    generateCurrentMonthWithCurrentDay();

    // Debug mode
    if (debug_mode) {
        let debug_html = document.body.innerHTML;
        document.body.innerHTML = '<textarea>' + debug_html + '</textarea>';
    }
});