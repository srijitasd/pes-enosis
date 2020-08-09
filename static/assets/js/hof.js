window.document.onload = function() {
    console.log("hello")
}

$(document).ready(function(){
    $('#item1').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "tournament1.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item2').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "tournament2.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item3').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "tournament3.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item4').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "tournament4.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item5').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "tournament5.html", success: function(result){
            $('.container').html(result);
        }})
    })
})

$(document).ready(function(){
    $('#item6').on('click', function(){
        $(this).addClass('active');
        $.ajax({url: "tournament6.html", success: function(result){
            $('.container').html(result);
        }})
    })
})
