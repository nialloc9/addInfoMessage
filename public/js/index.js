$(document).ready(function(){

    //cache DOM
    var $addInfoModule = $('#addInfoModule'),
        $btn = $addInfoModule.find('#btn'),
        $box = $addInfoModule.find('#box');

    //$btn on click
    $btn.on('click', btnOnClick);

    function btnOnClick(){
        //create object
        var myInfoMessage = infoMessage.create();

        if($box.val() > 0){
            myInfoMessage.add('SUCCESS: Your number is greater than 0.', 'info', true, 'success-message', 'error-message');
        }else{
            myInfoMessage.add('ERROR: Your number is not greater than 0.', 'info', false, 'success-message', 'error-message');
        }
    }
});



