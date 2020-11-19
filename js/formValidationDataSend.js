/*
  #############################################################
            Form Validation and Data send to server script
  ############################################################

*/

let errorHandler = {}; // object for errors  (after submit pressed,  checks this object if field contains errors)
let formValidation = {
  /*

   This object contains field tests.Each field can be tested by all this functions.
   You can simply add new tests.For each field you want.

    */

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
   submitErrorsChecker: function() {

       // this test for submit button/form
     let found = Object.keys(errorHandler).filter(function(key) {
       return errorHandler[key] === true;
     });


       found.forEach(function(currentValue) {
          // this crutch add error to empty fields.  :)
         $('#' + currentValue).removeClass('is-valid');
         $('#' + currentValue).addClass('is-invalid');
         $('#' + currentValue + 'ValidFeed').removeElement();
         $('#' + currentValue + 'helpText').removeElement();
         $('#' + currentValue + 'InvalidFeed').removeElement();
         $('.' + currentValue).insertHTM('beforeend','<div id="' + currentValue +

           'InvalidFeed" class="invalid-feedback">Please fill this field.</div>');

      });

         if (found.length === 0 ) { // if form has errors return value to submit function
           return false;
         } else {
           return true;
         }

   },



    runErromMsg:function(val,obj,msg){
       // val => true/false => pass test or not.
      // ### runing this function after field passed test (It add error msg or succes msg)

      if (val) {
        if (obj.hasOwnProperty('addErrorMsg')) {
          obj.addErrorMsg(msg);
          errorHandler[obj.fieldId] = true; // set field "has errors".
        } else {
          errorHandler[obj.fieldId] = true; // set field "has errors".
          skuField.addErrorMsg.call(obj,msg); // Inheritance "show error msg" from mainForm methods.
        }

      } else {
        if (obj.hasOwnProperty('removeErrorAddSuccesMsg')) {
          obj.removeErrorAddSuccesMsg();
          errorHandler[obj.fieldId] = false;  // set field "no errors".
        } else {
          skuField.removeErrorAddSuccesMsg.call(obj); // Inheritance "show error msg" from mainForm methods.
          errorHandler[obj.fieldId] = false; // set field "no errors".
        }
      }

     }

}
//***************************************** DATA SEND ****************************
$('#buttonSave').onClick(function(event){

  // SAVE button pressed.

event.preventDefault()
 if (formValidation.submitErrorsChecker()) {// check if filds has errors
      return '';
  }

  let allFormFieldID = Object.keys(errorHandler); // get all fields IDS
  let result = {};                               // data to send.
   allFormFieldID.forEach(function(value) { // collecting all key -> value pairs for data sending.

     result[$('#' + value).name()] = $('#' + value).val();
     result['productType'] =  $('#typeChangeSelect').val().capitalize();
   });

//-----------------------------------------------------
  fetch('php/addProduct.php', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(result)

    }).then((response) => response.json())
    .then((data) => {
        $('#fromResultMsg').removeAll();
console.log(data)
       if (data.status === 'error') {
         let msge =  new CreateErroMSG({msg: data.error});
          msge.crateErrorMsg();
       } else {
         let msge =  new CreateErroMSG({msg: 'Data Sended.Page reloading...'});
          msge.crateSuccessMsg();
        //  setTimeout(function(){ window.location.reload() }, 1000);

    //      document.getElementById("buttonSave").disabled = true; // protect the button from being pressed several times
       }

    })


})
