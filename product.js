
//Get product details and bind data with async await method

async function getProductDetails() {
    try {

        
        


        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();
        console.log(products);
        let index = 1;
        let allItems = "";
        let productItems = "";
        document.querySelector(".loading").computedStyleMap.display="none";


        products.forEach(product => {


// To get correct alinment  get the first item data separatly
            if (index === 1) {
                productItems += `
            <div class="item margin-from-bottom">    
            <div class="item-img">
            <img src="${product.image}" alt="" />
            </div>
            <div class="item-text">
            <h2>${product.title}</h2>
            <h3>${product.price} / lb</h3>
            <h4>${product.description}</h4>
        </div>
        </div>
        `;



// Get other item data after first item data
            } else {

                allItems += `
                <div id="otheritem" class="item margin-from-left margin-from-bottom">
                <div class="item-img">
                <img src="${product.image}" alt="" />

            </div>

            <div class="item-text">
                <h2>${product.title}</h2>
                <h3>${product.price} / lb</h3>
                <h4>${product.description}</h4>
            </div>
            </div>
            `;





            }
            index++;



        });
//Bind first item data
        document.querySelector("#container").innerHTML = productItems;

 // Bind other item data      
        document.querySelector("#container").innerHTML = allItems;



    }
    catch (err) {

        console.log(`Somthing wrong has happended with the API: ${err}`);

    }


}

// calling data feching and data binding function
getProductDetails();






