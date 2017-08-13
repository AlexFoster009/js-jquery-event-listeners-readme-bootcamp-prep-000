//define functions here
function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $('input').first().on('keydown', function(e){
    if(e.which == 71){
      alert('You have pressed the g key');
    }
  });
}

function submitIt(){
  $('form').on('submit' , function(){
      alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
