/*
  #############################################################
                     ERROR HANDLER
  ############################################################
  This script is error/success box. (IF errors recived from server).
*/

function CreateErroMSG(param) {
  this.msg = param.msg;

  this.crateErrorMsg = function() {

    $("#fromResultMsg").insertHTM('beforeend',`
         <div class="alert alert-danger" role="alert">
        ${this.msg}
         </div>`);

  };

  this.crateSuccessMsg = function() {

    $("#fromResultMsg").insertHTM('beforeend',`
         <div class="alert alert-success" role="alert">
        ${this.msg}
         </div>`);

  };

}
