/*
  #####################################################
               Validation Form Script.
  #####################################################


*/

function CreateMainFormFields(param) {
  this.fieldId = param.fieldId;
  this.fieldName = param.fieldName;
  this.fieldOptions = param.fieldOptions;
  this.fieldType = param.fieldType;
  errorHandler[this.fieldId] = true; // this line add to object "errorHandler" field.( in future to check this field before form submit)
  this.crateField = function() {

    $("#mainForm").insertHTM('beforeend',`
               <div class="form-group row">
                 <label for="${this.fieldId}" class="col-sm-2 col-form-label">${this.fieldName}</label>
                 <div class="col-sm-8 ${this.fieldId}">
                   <input type="${this.fieldType}" class="form-control" maxlength="15" id="${this.fieldId}" name=${this.fieldName.toLowerCase()} placeholder="${this.fieldName}">

                 </div>
               </div>`)

  };

  this.crateOptionField = function() { // select field create
   let options =   this.fieldOptions.map((val)=>{

       return `<option value="${val.toLowerCase()}">${val}</option>`;
   })


    $("#mainForm").insertHTM('beforeend',`
      <div class="form-group row">

          <label class="col-sm-4 col-form-label h5" for="${this.fieldId}">${this.fieldName}</label>
          <div class="col-sm-8">
            <select class="form-control" id="${this.fieldId}" name=${this.fieldName.toLowerCase()} >
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





let skuField = new CreateMainFormFields({fieldId: 'skuFromField',
                                        fieldName:'SKU',
                                        fieldType:'text'});
    skuField.crateField();
    formValidation.emptyField(skuField);



let nameField = new CreateMainFormFields({fieldId: 'nameFromField',
                                          fieldName:'Name',
                                          fieldType:'text'});
    nameField.crateField();
    formValidation.emptyField(nameField);


let priceField = new CreateMainFormFields({fieldId: 'priceFormField',
                                           fieldName:'Price',
                                           fieldType:'number'});
    priceField.crateField();

    formValidation.emptyField(priceField);
    formValidation.valueNotMinus(priceField,[1,400]); //  accepted range.


let typeChangeField = new CreateMainFormFields({fieldId: 'typeChangeSelect',
                                                fieldName:'Type Switcher',
                                                fieldOptions: ['Disc','Furniture','Weight']});
    typeChangeField.crateOptionField();
