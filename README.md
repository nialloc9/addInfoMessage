# addInfoMessage
This adds either a success message or an error message to an element. It is intended to be re-usable. 
It uses a boolean check to decide which to use and then renders it to the page with the appropriate styling.

# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the js/addInfoMessage.js file in your project.
3. Add the file css/styles.css to your project.
4. Give the input and info area to change a suitable id.
5. When needed call the function 

        addInfoMessage(message, messageAreaId, pOrN, successClass, errorClass);
        
Make sure that the message, messageAreaId, successClass and errorClass all correspond to correct classes/id's.


# Example
        $(document).ready(function(){
            $('#btn').click(function(){
                if($('#box').val() > 0){
                    addInfoMessage('SUCCESS: Your number is greater than 0.', 'info', true, 'success-message', 'error-message');
                }else{
                    addInfoMessage('ERROR: Your number is not greater than 0.', 'info', false, 'success-message', 'error-message');
                }
            });
        });
        
# NB
If you wish to change the class names or styling make sure to update the classes in the styles.css file.
