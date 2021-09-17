let checkbox = document.querySelector("input.sale");
checkbox.addEventListener("click", function(){
    if (checkbox.checked == true){
        showDiscountedOnly();
    }else{
        showAll();
    }
});

function showDiscountedOnly(){
    let termekek = document.querySelectorAll(".product");
    for (let k in termekek){
        let leiras = termekek[k].innerHTML;
        if(leiras){
            if (!leiras.includes("product-old-price")){
                termekek[k].style.display= "none";
            }
        }
    }
}

function showAll(){
    let termekek = document.querySelectorAll(".product");
    console.log(termekek);
    for (let k in termekek){
        if (!isNaN(k)){
            termekek[k].style.display= "inline-block";
        }
    }
}

let dropdown = document.querySelector("select.order");
dropdown.addEventListener("change", function(){
    switch (dropdown.options[dropdown.selectedIndex].value){
        case "0" : arNovekszik();
            break;
        case "1" : arCsokken();
            break;
        case "2" : abcSorrend();
            break;
        case "3" : cbaSorrend();
            break;
    }
})

let products = Array.from(document.querySelectorAll(".product"));
let productsContainer = document.querySelector(".products");

function refill(){
    productsContainer.innerHTML = "";
    for (let k in products){
        productsContainer.appendChild(products[k]);
    }
}

function abcSorrend(){
    products.sort((firstProduct, lastProduct) => firstProduct.children[1].children[0].textContent.localeCompare(lastProduct.children[1].children[0].textContent));
    refill();
}

function cbaSorrend(){
    abcSorrend();
    products.reverse();
    refill();
}

function arNovekszik(){
    products.sort((firstProduct, lastProduct) => parseInt(firstProduct.children[1].children[1].textContent.replace(".", "")) - parseInt(lastProduct.children[1].children[1].textContent.replace(".", "")));
    refill();
}

function arCsokken(){
    arNovekszik();
    products.reverse();
    refill();
}











