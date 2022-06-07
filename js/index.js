/* website theme changer */

function resizeFunction() {
    var w = window.outerWidth;
    if (w >= 768) {
        document.getElementById('btn').classList.add("active"); 
    }  
  };

  const btn = document.getElementById('btn');
 
  $('#btn').on('click', function() {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active')
      document.body.style.backgroundColor = 'salmon';

    }
    else {btn.classList.add('active')
      document.body.style.backgroundColor = 'white';}
});


/* interactive for projects */

$('img').css('cursor', 'pointer');

document.getElementById('ia-button').classList.add("active"); 
document.getElementById('ux-button').classList.add("active"); 
document.getElementById('research-button').classList.add("active"); 
document.getElementById('business-button').classList.add("active"); 


$('button').on('click', function(e) {
  if(e.target.id == 'ia-button') {
    $('#IA').toggle('fast');
    $('#ia-button').toggleClass('active');
  }
  if (e.target.id == 'ux-button') {
    $('#UX').toggle('fast');
    $('#ux-button').toggleClass('active');
  }
  if(e.target.id == 'research-button') {
    $('#research').toggle('fast');
    $('#research-button').toggleClass('active');
  }
  if(e.target.id == 'business-button') {
    $('#business').toggle('fast');
    $('#business-button').toggleClass('active');
  }
});


