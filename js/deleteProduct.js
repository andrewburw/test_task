/*
  #############################################################
            Delete Products Script
  ############################################################

  *This script for deleteing products.
*/

let chekedCheckboxes = [];

function checkChebox(event){
   // check box onChange => this function call

   if(chekedCheckboxes.indexOf(event.value)  > -1){ // check if check box id exists in array

     chekedCheckboxes.splice(chekedCheckboxes.indexOf(event.value), 1);

   } else {

     chekedCheckboxes.push(event.value);

   }

}




function deletePoduct(){

   if (chekedCheckboxes.length === 0) {
      alert("Please select product.");
   } else if ($('#deleteProduct').val() === 'one' && chekedCheckboxes.length > 1) {
      alert("Please select only one product.");
   } else {

      sendIdToDelete(chekedCheckboxes); //call fetch function

   }
}


function sendIdToDelete(data){

  fetch('php/deleteProducts.php', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({data: data.join(',') })

    }).then((response) => response.json())
    .then((data) => {

          setTimeout(()=>{ window.location.reload() }, 1000);

          document.getElementById("buttonApply").disabled = true; // protect button from multyply button press
      })

    }
