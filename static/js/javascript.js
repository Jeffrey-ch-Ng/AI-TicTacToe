$(function() {
    $('#A1').bind('click', function() {
        $('#spanA1').css('visibility', 'visible');
        $.getJSON('/A1',
            function(data) {
                $('#spanA1').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});

$(function() {
    $('#A2').bind('click', function() {
        $('#spanA2').css('visibility', 'visible');
        $.getJSON('/A2',
            function(data) {
                $('#spanA2').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});

$(function() {
    $('#A3').bind('click', function() {
        $('#spanA3').css('visibility', 'visible');
        $.getJSON('/A3',
            function(data) {
                $('#spanA3').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});

$(function() {
    $('#B1').bind('click', function() {
        $('#spanB1').css('visibility', 'visible');
        $.getJSON('/B1',
            function(data) {
                $('#spanB1').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});

$(function() {
    $('#B2').bind('click', function() {
        $('#spanB2').css('visibility', 'visible');
        $.getJSON('/B2',
            function(data) {
                $('#spanB2').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});



$(function() {
    $('#B3').bind('click', function() {
        $('#spanB3').css('visibility', 'visible');
        $.getJSON('/B3',
            function(data) {
                $('#spanB3').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});

$(function() {
    $('#C1').bind('click', function() {
        $('#spanC1').css('visibility', 'visible');
        $.getJSON('/C1',
            function(data) {
                $('#spanC1').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});

$(function() {
    $('#C2').bind('click', function() {
        $('#spanC2').css('visibility', 'visible');
        $.getJSON('/C2',
            function(data) {
                $('#spanC2').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});


$(function() {
    $('#C3').bind('click', function() {
        $('#spanC3').css('visibility', 'visible');
        $.getJSON('/C3',
            function(data) {
                $('#spanC3').text(data.text);
                $(data.change).text("O");
                $(data.change).css('visibility', 'visible');
            });
            return false;
    });
});