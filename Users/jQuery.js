$(document).ready(function () {

    $('#myform').submit(function () {
        return false;

    });
    $('#btn').click(function () {
        $('#myform').submit();
        $('#main-table').append(
            "<tr><td>" + $('input[name=First]').val() + "</td><td>" + $('input[name=Last]').val() + "</td><td>" + $('input[name=Email]').val() + "</td><td>" + $('input[name=Contact]').val() + "</td></tr>"
        )
    });
});