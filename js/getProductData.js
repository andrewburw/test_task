/*
  #####################################################
          GET PRODUCTS DATA
  #####################################################

     *This script GETs product data from server and renders it in to the page.
*/

fetch('php/showProducts.php', {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    }

  }).then((response) => response.json())
  .then((data) => {

 let iId = 0;
    Array.from(data).map((item, i) => {


   if (i % 4 === 0 ) {
        _createProductsLine('id' +i);
      iId = i;
   }

    $('.id'  + iId).insertHTM('afterbegin',`  <div class="col-sm-3">

          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="${item['id']}" onchange="checkChebox(this)" >
              </div>
              <br />
              <div class="text-center">
                <p class="h5">${item['sku']}</p>
                <p class="h5">${item['name']}</p>
                <p class="h5">${item['price']} $</p>
               ${item['size'] !== null ?   '<p class="h5"> Size: ' + item['size'] + ' MB</p>': ''  }
               ${item['weight'] !== null ? '<p class="h5"> Weight: ' + item['weight'] + ' KG</p>': ''  }
               ${item['height'] !== null ? '<p class="h5"> Dimension: ' + item['height'] + 'x' + item['width'] + 'x' + item['length']+ '</p>': ''  }

              </div>
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
