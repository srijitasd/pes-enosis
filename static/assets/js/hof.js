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

$(document).ready(function(){
    $('#item4').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "/tour-winners/tour-winner4.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item5').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "/tour-winners/tour-winner5.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item6').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "/tour-winners/tour-winner6.html", success: function(result){
            $('.container').html(result);
        }})
    })
})
