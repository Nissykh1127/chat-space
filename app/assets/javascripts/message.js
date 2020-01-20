$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =  
      `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="view-name">
              ${message.user_name}
            </div>
            <div class="view-data">
              ${message.created_at}
            </div>
          </div>
        <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
            <img src=${message.image}>
          </div>
        </div>`
      return html;
    } else {
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="view-name">
              ${message.user_name}
            </div>
            <div class="view-data">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.chat-main-view').animate({ scrollTop:$('.chat-main-view')[0].scrollHeight});
      $('.submit-btn').prop('disabled',false);
    })
    .fail(function() {
    　alert("メッセージ送信に失敗しました");
  　})
  });
}); 