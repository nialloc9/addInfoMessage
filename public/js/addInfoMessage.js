//ADD INFO MESSAGE
var infoMessage = {
    create: function (values) {

        //check  param
        if(values == null || values == undefined){
            values = {};
        }

        //create new instance of infoMessage
        var instance = Object.create(this);

        //adds any value from the values object as property or method of the parent or child
        Object.keys(values).forEach(function (key){
           instance[key] = values[key];
        });

        //return the new instance of infoMessage
        return instance;
    },

    add: function (message, messageAreaId, tOrF, successClass, errorClass) {

        //cache Dom
        var infoArea = '#' + messageAreaId,
            $infoArea = $(infoArea);

        //BOOLEAN CHECK
        if (tOrF) {
            //ERROR CLASS CHECK
            if ($infoArea.hasClass(errorClass)) {
                $infoArea.removeClass(errorClass);
            }

            //SUCCESS CLASS CHECK
            if ($infoArea.hasClass(successClass)) {
                //DO NOTHING
            } else {
                $infoArea.addClass(successClass);
            }
        } else { //BOOLEAN CHECK ELSE
            //SUCCESS CLASS CHECK
            if ($infoArea.hasClass(successClass)) {
                $infoArea.removeClass(successClass);
            }

            //ERROR CLASS CHECK
            if ($infoArea.hasClass(errorClass)) {
                //DO NOTHING
            } else {
                $infoArea.addClass(errorClass);
            }
        }

        //_render
        this._render($infoArea, message)
    },

    _render: function (infoArea, message) {
        //render info
        infoArea.text(message);
    }
};












