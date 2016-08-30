$(document).ready(function(){
    $('#btn').click(function(){
        if($('#box').val() > 0){
            addInfoMessage('SUCCESS: Your number is greater than 0.', 'info', true, 'success-message', 'error-message');
        }else{
            addInfoMessage('ERROR: Your number is not greater than 0.', 'info', false, 'success-message', 'error-message');
        }
    });
});
