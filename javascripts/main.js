$(document).ready(function () {

        $.getJSON("javascripts/JSON/february.json", function (data_on_load) {
            var this_data_on_load = "";
            this_data_on_load += ' <table style="width:90%; margin: 100px auto;" border="1" >';
            this_data_on_load += '<tr><th>Name</th><th>Country</th></tr>';
            $.each(data_on_load, function (key, value) {
              
                this_data_on_load += "<tr>";
                this_data_on_load += "<td> rockstar </td>";
                this_data_on_load += "<td> USA </td>";
                this_data_on_load += "</tr>";
               
            });
            this_data_on_load += "</table>";
            $("#employee_table").html(this_data_on_load);
        });








    $("#january").click(function () {


        $.getJSON("javascripts/JSON/january.json", function (data) {
            var this_data = "";
            this_data += ' <table style="width:90%; margin: 100px auto;" border="1" >';
            this_data += '<tr><th>Name</th><th>Country</th></tr>';
            $.each(data, function (key, value) {
              
                this_data += "<tr>";
                this_data += "<td>" + value.name + "</td>";
                this_data += "<td>" + value.country + "</td>";
                this_data += "</tr>";
               
            });
            this_data += "</table>";
            $("#employee_table").html(this_data);
        });

    });




    $("#february").click(function () {


        $.getJSON("javascripts/JSON/february.json", function (data2) {
            var this_data2 = "";
            this_data2 += ' <table style="width:90%; margin: 100px auto;" border="1" >';
            this_data2 += '<tr><th>Name</th><th>Country</th></tr>';
            $.each(data2, function (key2, value2) {
              
                this_data2 += "<tr>";
                this_data2 += "<td>" + value2.name + "</td>";
                this_data2 += "<td>" + value2.country + "</td>";
                this_data2 += "</tr>";
               
            });
            this_data2 += "</table>";
            $("#employee_table").html(this_data2);
        });

    });









});