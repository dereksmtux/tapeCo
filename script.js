$(document).ready(function(){
//hides all content on load.
  $('.content').hide();
//event handler for nav bar.
  $('.navBar').click(function(){
    var bar =  '.' + $(this).attr('id');
    $('.content').hide();
    $('.opener').hide();
    $(bar).toggle();
    console.log(bar);
  });
});
