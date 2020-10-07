
let formValidation = {

   emptyField: function(obj) {
         $('#' + obj.fieldId).onChange(function() {

             let value = $('#' + obj.fieldId).val();


           if (value.length === 0) {

            formValidation.runErromMsg(true,obj,'Field cannot be blank!');

           } else {

             formValidation.runErromMsg(false,obj);

           }

         });
   },
   valueNotMinus: function(obj,range) {

           $('#' + obj.fieldId).onChange(function() {
                 let value = $('#' + obj.fieldId).val();

             if (Number(value) > range[1] || Number(value) <  range[0]) {

              formValidation.runErromMsg(true,obj,'Field cannot be less than '+ range[0] +' value and more than ' + range[1] + '!' );

             } else {

               formValidation.runErromMsg(false,obj);

             }

           });
   },



    runErromMsg:function(val,obj,msg){

      // ### runing this function if field not passing one of this field tests.

      if (val) {
        if (obj.hasOwnProperty('addErrorMsg')) {
          obj.addErrorMsg(msg);
        } else {

          skuField.addErrorMsg.call(obj,msg); // Inheritance "show error msg" from mainForm methods.
        }

      } else {
        if (obj.hasOwnProperty('removeErrorAddSuccesMsg')) {
          obj.removeErrorAddSuccesMsg();
        } else {
          skuField.removeErrorAddSuccesMsg.call(obj); // Inheritance "show error msg" from mainForm methods.
        }
      }

     }








}
