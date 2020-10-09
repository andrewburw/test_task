/*
  #####################################################
               Type Switcher Subform Script.
  #####################################################

*/
function CreateTypeSwFields(param) {
  this.fieldId = param.fieldId;
  this.fieldName = param.fieldName;
  this.helpText = param.helpText;
  errorHandler[this.fieldId] = true; // this line add to object "errorHandler" field.( in future to check this field before form submit)
  this.crateField = function() {

    $("#typeSwitcherField").insertHTM('beforeend',`
               <div class="form-group row">
                 <label for="${this.fieldId}" class="col-sm-2 col-form-label">${this.fieldName}</label>
                 <div class="col-sm-8 ${this.fieldId}">
                   <input type="number" class="form-control"  min="0" max="5000" id="${this.fieldId}"  name=${this.fieldName.toLowerCase()} placeholder="${this.fieldName}">
                    <small id="${this.fieldId}helpText" class="form-text text-muted">${this.helpText}</small>
                 </div>
               </div>`)

  };




}





let formTypeChangePatterns = {
         default: function(){
           // if accedenly presed default in "Type Switcher"
           $('.type__switcher__field').show(); // show info panel "Please select Type Switcher to see more fields."
           $('#typeSwitcherField').removeAll(); // delete all Type fiels.

         },
         size: function(){
          $('#typeSwitcherField').removeAll(); // delete all "Type Switcher" fiels if it selected before.
           let sizeField = new  CreateTypeSwFields({fieldId: 'sizeFromField',fieldName:'Size',helpText:'Please provide DISC size, when type: Size is selected.'});
           sizeField.crateField();
           formValidation.emptyField(sizeField);
         },
         furniture: function(){
           $('#typeSwitcherField').removeAll();// delete all "Type Switcher" fiels if it selected before.
           let heightField = new  CreateTypeSwFields({fieldId: 'heightFromField',fieldName:'Height',helpText:''});
              heightField.crateField();
              formValidation.emptyField(heightField);


           let widthField = new  CreateTypeSwFields({fieldId: 'widthFromField',fieldName:'Width',helpText:''});
              widthField.crateField();
              formValidation.emptyField(widthField);


           let lengthField = new  CreateTypeSwFields({fieldId: 'lengthFromField',fieldName:'Length',helpText:'Please provide demensions in HxWxL format, when type: Furniture is selected.'});
              lengthField.crateField();
              formValidation.emptyField(lengthField);
         },
         weight: function(){
          $('#typeSwitcherField').removeAll(); // delete all "Type Switcher" fiels if it selected before.
           let weightField = new  CreateTypeSwFields({fieldId: 'weightFromField',fieldName:'Weight',helpText:'Please provide weight, when type: Weight is selected.'});
             weightField.crateField();
             formValidation.emptyField(weightField);

         }





}


$('#typeChangeSelect').onChange(function(){
  // typeSwitcher select action function
  $('.type__switcher__field').hide();
  $('#typeChangeSelect').removeClass('is-invalid'); // after submit added red border (remove it)

 errorHandler.sizeFromField = undefined; // this part needs if user change subForm multyply times
 errorHandler.heightField = undefined;
 errorHandler.widthField = undefined;
 errorHandler.lengthField = undefined;
 errorHandler.weightField = undefined;

   delete errorHandler.sizeFromField; // this part needs if user change subForm multyply times
   delete errorHandler.heightField;
   delete errorHandler.widthField;
   delete errorHandler.lengthField;
   delete errorHandler.weightField;

  let typeVal = $('#typeChangeSelect').val();

  if (typeVal === 'default') { // for object errorHandler.
    errorHandler['typeChangeSelect'] = true;
  } else {
    errorHandler['typeChangeSelect'] = false;
  }

  formTypeChangePatterns[typeVal](); // init subform fields.


})
