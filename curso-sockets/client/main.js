var socket = io.connect('http://192.168.0.3:6677', {'forceNew': true});
        //   evento , callback
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

//
function render(data){//para pintar los mensajes que me llegan  del servidor en la vista
    var html = data.map(function(message, index){
        return (`
            <div class="message">
                <strong>${message.nickname}</strong>
                <p>${message.text}<p>
            </div>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    }

    document.getElementById('nickname').style.display = 'none';

    socket.emit('add-message', message);

    return false;
}