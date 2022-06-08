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



$('button').on('click', function(e) {
  if(e.target.id == 'ia-button') {
    $('#IA').toggle('fast');
    $('#ia-button').toggleClass('active');
  }
  else if (e.target.id == 'ux-button') {
    $('#UX').toggle('fast');
    $('#ux-button').toggleClass('active');
  }
  else if(e.target.id == 'research-button') {
    $('#research').toggle('fast');
    $('#research-button').toggleClass('active');
  }
  else if(e.target.id == 'business-button') {
    $('#business').toggle('fast');
    $('#business-button').toggleClass('active');
  }
});




/*image modal*/

$('img').css('cursor', 'pointer');



$('img').attr("data-bs-toggle", "modal");
$('img').attr("data-bs-target", "#myModal");




document.addEventListener('click', function(e) {
  if (e.target.id == 'ia_img'){
    $('#modalIframe').remove();
    $('.modal_main').append('<iframe id="modalIframe" src="https://uwnetid-my.sharepoint.com/personal/gielee_uw_edu/_layouts/15/Doc.aspx?sourcedoc={b841e20d-b33f-40a8-87f1-07092f0d320e}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="100%" height="380" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"allowtransparency="true"></iframe>');
  }
  else if (e.target.id == 'ux_img'){
    $('#modalIframe').remove();
    $('.modal_main').append('<iframe id="modalIframe" src="https://uwnetid-my.sharepoint.com/personal/gielee_uw_edu/_layouts/15/Doc.aspx?sourcedoc={8f597696-b0a7-4832-b471-9c01aa2f682d}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="100%" height="380" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"allowtransparency="true"></iframe>');
  }
  else if (e.target.id == 'research_img'){
    $('#modalIframe').remove();
    $('.modal_main').append('<iframe id="modalIframe" src="https://uwnetid-my.sharepoint.com/personal/gielee_uw_edu/_layouts/15/Doc.aspx?sourcedoc={80dc6dc5-aeff-4a1f-97c0-a8586050a53a}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="100%" height="380" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"allowtransparency="true"></iframe>');
  }
  else if (e.target.id == 'business_img'){
    $('#modalIframe').remove();
    $('.modal_main').append('<iframe id="modalIframe" src="https://uwnetid-my.sharepoint.com/personal/gielee_uw_edu/_layouts/15/Doc.aspx?sourcedoc={8ec5bce9-4cc1-4bdf-9e5f-e2bffc73c1a8}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="100%" height="380" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"allowtransparency="true"></iframe>');
  }


}, false);

myModal.addEventListener('shown.bs.modal', function (event) {  
    console.log('success');
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}