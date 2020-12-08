/*
  #####################################################
          GET PRODUCTS DATA
  #####################################################

     *This script GET product data from server and renders it in to the page.
*/

fetch('php/showProducts.php', {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    }

  }).then((response) => response.json())
  .then((data) => {
 console.log(data)
 let iId = 0;
    Array.from(data).map((item, i) => {


   if (i % 4 === 0 ) {
        _createProductsLine('id' +i);
      iId = i;
   }

    $('.id'  + iId).insertHTM('afterbegin',`  <div class="col-sm-3">

          <div class="card" style="width: 18rem;">
            <div class="card-body">
                  ${item}
            </div>
          </div>`)

    })

  });




  function _createProductsLine(id){
   // Row generator
       const products = document.createElement('div');
      products.classList.add('row');
      products.classList.add('mt-4');
      products.classList.add(id);

  $('.main').insertChildNode(products);

  return products;

  }
