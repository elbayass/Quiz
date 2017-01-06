$(function True (){
    $(".reponse1").click(function(){
    $(this).toggleClass("background_true");
    //$('.reponse2').css("background-color", "red")
    });
});
$(function False(){
    $(".reponse2").click(function(){
    $(this).toggleClass("background_false");
    });
});
//question 1
$('#suivant').click (function(){
  $('.question1').hide('1000')//cacher
  $('.question2').show('1000')//afficher
})
$('#retour').click (function(){
  //$('.').hide('1000')//cacher
  $('.question1').show('1000')//afficher
})
//question 2
$('#suivant2').click (function(){
  $('.question2').hide('1000')//cacher
  $('.question3').show('1000')//afficher
})
$('#retour2').click (function(){
  $('.question2').hide('1000')//cacher
  $('.question1').show('1000')//afficher
})
//question 3
$('#suivant3').click (function(){
  $('.question3').hide('1000')//cacher
  $('.question4').show('1000')//afficher
})
$('#retour3').click (function(){
  $('.question3').hide('1000')//cacher
  $('.question2').show('1000')//afficher
})
//question 4
$('#suivant4').click (function(){
  $('.question4').hide('1000')//cacher
  $('.question5').show('1000')//afficher
})
$('#retour4').click (function(){
  $('.question4').hide('1000')//cacher
  $('.question3').show('1000')//afficher
})
//question 5
$('#suivant5').click (function(){
  $('.question5').hide('1000')//cacher
  $('.question6').show('1000')//afficher
})
$('#retour5').click (function(){
  $('.question5').hide('1000')//cacher
  $('.question4').show('1000')//afficher
})
//question 6
$('#suivant6').click (function(){
  $('.question6').hide('1000')//cacher
  $('.question7').show('1000')//afficher
})
$('#retour6').click (function(){
  $('.question6').hide('1000')//cacher
  $('.question5').show('1000')//afficher
})
//question 7
$('#suivant7').click (function(){
  $('.question7').hide('1000')//cacher
  $('.question8').show('1000')//afficher
})
$('#retour7').click (function(){
  $('.question7').hide('1000')//cacher
  $('.question6').show('1000')//afficher
})
//question 8
$('#suivant8').click (function(){
  $('.question8').hide('1000')//cacher
  $('.question9').show('1000')//afficher
})
$('#retour8').click (function(){
  $('.question8').hide('1000')//cacher
  $('.question7').show('1000')//afficher
})
//question 9
$('#suivant9').click (function(){
  $('.question9').hide('1000')//cacher
  $('.question10').show('1000')//afficher
})
$('#retour9').click (function(){
  $('.question9').hide('1000')//cacher
  $('.question8').show('1000')//afficher
})
//question 10
$('#suivant10').click (function(){
  $('.question10').hide('1000')//cacher
  $('.question1').show('1000')//afficher
})
$('#retour10').click (function(){
  $('.question10').hide('1000')//cacher
  $('.question9').show('1000')//afficher
})
