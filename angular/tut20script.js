// tut20script


myApp.factory('stringService',function(){
    return {
        processingString : function(input){
            if(!input){
                return input;
            }
            var output = "";
            for(var i=0;i<input.length;i++){
                if(i>1 && input[i] == input[i].toUpperCase()){
                    output = output + " ";
                }
                output = output + input[i];
            }
            return output
        }
    };
});