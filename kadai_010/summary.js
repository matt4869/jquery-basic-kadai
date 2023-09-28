$(function() {
  //ボタンがクリックされた場合ボジ色が変わる
  $('#change-color').on('click', function(){
    $('#target').css('color','red');
  });
  // ボタンがクリックされた場合文字内容が変わる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
  ///ボタンがクリックされた場合フェードアウトで文字が消える
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
  //ボタンがクリックされた場合フェードインで文字が現れる
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});
