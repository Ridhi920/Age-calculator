document.querySelector("#calc").addEventListener("click", function(){
    const update = function() {
        let date_input = document.querySelector("#date_input").value,
            bday = new Date(date_input),
            bday_val = bday.getTime(),
            today = new Date(),
            now = today.getTime(),
            value = now - bday_val,
            var_sec = Math.floor(value / 1000),
            var_min = Math.floor(value / (1000 * 60)),
            var_hour = Math.floor(value / (1000 * 60 * 60)),
            var_day = Math.floor(value / (1000 * 60 * 60 * 24)),
            var_week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            var_month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            var_year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));
        let insert = function(x,y) {
            document.querySelector(x).innerHTML = y;
        }

        insert("#year", var_year + " years");
        insert("#month", var_month + " months");
        insert("#week", var_week + " weeks");
        insert("#day", var_day + " days");
        insert("#hour", var_hour + " hours");
        insert("#minute", var_min + " minutes");
        insert("#second", var_sec + " seconds");
    };
    setInterval(update, 1000)
})