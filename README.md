# addInfoMessage
This uses prototypal inheritance(object composition) to allow the dev the option of using it stand alone to add info messages to the screen or if he/she wishes creating new objects that will 'inherit' the methods and properties from the parent object.

## Getting Started

1. add jQuery to your project.

2. Add the file public/js/addInfoMessage.js to your project

3. When you need to add a info message create new instance of the infoMessage object by using the create method.

        var myInfoMessage = infoMessage.create();
        
4. Call the add method to add the message to the screen.

        myInfoMessage.add(message, messageAreaId, tOrF, successClass, errorClass);

### infoMessage.create() Arguements

We can pass an optional object of methods and properties that we want to add to our new object here. This is how 
we use prototypal inheritance(object composition) to create new objects that have the parent infoMessage objects 
methods and properties but also have new ones.

        //parent 
        var parent = infoMessage.create();

        //child
        var child = parent.create({}
                newMethod: function(){},
                newProperty: 'new property'
        );
        
        //alert newProperty
        alert(child.newProperty); //alerts 'new property'
        
        //alert(parent.newProperty); --> This will fail because newProperty is a property of child not parent

### add() arguements

*message:* The message you want to appear. e.g "My Message"

*messageAreaId:* The id of the area you want the message to appear in. e.g 'infoArea'

*tOrF:* true or false is do you want it to appear with a class of successClass or errorClass

*successClass:* The name of the class you want to style the success message with. e.g 'mySuccessClass'

*errorClass:* The name of the class you want to style the error message with. e.g 'myErrorClass'


## Dependencies

jQuery

### Example

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

## Authors

* **Niall O Connor** - *Initial work* - [nialloc9](https://github.com/nialloc9)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

