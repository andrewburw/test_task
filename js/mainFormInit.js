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

function CreateMainFormFields(param) {
  this.fieldId = param.fieldId;
  this.fieldName = param.fieldName;
  this.fieldOptions = param.fieldOptions;
  this.fieldType = param.fieldType;
  errorHandler[this.fieldId] = true; // this line add to object "errorHandler" field.( in future to checkthis field before form submit)
  this.crateField = function() {

    $("#mainForm").insertHTM('beforeend',`
               <div class="form-group row">
                 <label for="${this.fieldId}" class="col-sm-2 col-form-label">${this.fieldName}</label>
                 <div class="col-sm-8 ${this.fieldId}">
                   <input type="${this.fieldType}" class="form-control" maxlength="20" id="${this.fieldId}" name=${this.fieldName.toLowerCase()} placeholder="${this.fieldName}">

                 </div>
               </div>`)

  };

  this.crateOptionField = function() {
   let options =   this.fieldOptions.map((val)=>{

       return `<option value="${val.toLowerCase()}">${val}</option>`;
   })


    $("#mainForm").insertHTM('beforeend',`
      <div class="form-group row">

          <label class="col-sm-4 col-form-label h5" for="${this.fieldId}">${this.fieldName}</label>
          <div class="col-sm-8">
            <select class="form-control" id="${this.fieldId}" >
              <option value="default" selected>Choose...</option>
            ${options.toString()}
            </select>

        </div>
      </div>`);

  };


  this.addErrorMsg = function(errMsg) {

    $('#' + this.fieldId).removeClass('is-valid');
    $('#' + this.fieldId).addClass('is-invalid');
    $('#' + this.fieldId + 'ValidFeed').removeElement();
    $('#' + this.fieldId + 'helpText').removeElement();
    $('#' + this.fieldId + 'InvalidFeed').removeElement();
      $('.' + this.fieldId).insertHTM('beforeend','<div id="' + this.fieldId +

      'InvalidFeed" class="invalid-feedback">' + errMsg + '</div>');

  };

  this.removeErrorAddSuccesMsg = function() {
    $('#' + this.fieldId).removeClass('is-invalid');
    $('#' + this.fieldId).addClass('is-valid');
    $('#' + this.fieldId + 'InvalidFeed').removeElement();
    $('#' + this.fieldId + 'ValidFeed').removeElement();
    $('#' + this.fieldId + 'helpText').removeElement();
    $('.' + this.fieldId).insertHTM('beforeend','<div id="' + this.fieldId +

      'ValidFeed" class="valid-feedback">Looks good!</div>');

  }

}





let skuField = new CreateMainFormFields({fieldId: 'skuFromField',fieldName:'SKU',fieldType:'text'});
    skuField.crateField();
    formValidation.emptyField(skuField);



let nameField = new CreateMainFormFields({fieldId: 'nameFromField',fieldName:'Name',fieldType:'text'});
    nameField.crateField();
    formValidation.emptyField(nameField);


let priceField = new CreateMainFormFields({fieldId: 'priceFormField',fieldName:'Price',fieldType:'number'});
    priceField.crateField();

    formValidation.emptyField(priceField);
    formValidation.valueNotMinus(priceField,[1,400]); // second arg. is range for test.


let typeChangeField = new CreateMainFormFields({fieldId: 'typeChangeSelect',fieldName:'Type Switcher',

fieldOptions: ['Size','Furniture','Weight']});
    typeChangeField.crateOptionField();
