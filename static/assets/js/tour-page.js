window.document.onload = function() {
    console.log("hello")
}

$(document).ready(function(){
    $('#item1').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "/tour-winners/tour-winner1.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item2').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "/tour-winners/tour-winner2.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item3').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "/tour-winners/tour-winner3.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

