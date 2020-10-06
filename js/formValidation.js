/*
  #####################################################
               Validation Form Script.
  #####################################################
  Idea is to take JQUERY concept and impliment my own framework for faster developing
  and less code.
  * function "onChangeMainFields" - Take data from field.
  * function "checkFieldData" - Tests for valid data.
  * function "addFeedbackToField" - Add Errors to field by adding HTML to field.
  *
*/
let errorState = {
        skuFormField: true,
        nameFormField: true,
        priceFormField: true

};

function onChangeMainFields(val) {
  // If in fields chenged data runs this script.

  let fieldValue = $('#' + val.id).val();

  if (!checkFieldData('',fieldValue)) {
    // if field pass test.
    addFeedbackToField(val.id,true);
    errorState[val.id] = true;
  } else {
     // if field pass't test.
    addFeedbackToField(val.id,false);
    errorState[val.id] = false;

  }


}


 function checkFieldData (field,data){
 // This function checks data for length, valid data etc.

    if (data.length === 0 ) {
       return false;
    }

     return true;

 }



function addFeedbackToField(field,feedError){

   // ### feedError => true/false , add  is-valid or is-invalid feedback.

  if (feedError) {
    // if field has errors
    $('#' + field).removeClass('is-valid');
    $('#' + field).addClass('is-invalid');
    $('#' + field + 'ValidFeed').removeElement();
    $('.' + field).insertHTM('<div id="' + field +

    'InvalidFeed" class="invalid-feedback">Field cannot be blank!</div>');

  } else {
     // if field has no errors
    $('#' + field).removeClass('is-invalid');
    $('#' + field).addClass('is-valid');
    $('#' + field + 'InvalidFeed').removeElement();
    $('.' + field).insertHTM('<div id="' + field +

    'ValidFeed" class="valid-feedback">Looks good!</div>');

  }




}



$('#buttonSave').onClick(()=>{
 console.log(errorState)

})
