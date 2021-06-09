const sign_in_btn = document.queryselector("#sign-in-btn");
const sign_up_btn = document.queryselector("#sign-up-btn");
const container = document.queryselector(".container");

sign_up_btn.addeventlistener("click", () =>{
    container.classlist.add("sign-up-mode");

});
sign_in_btn.addeventlistener("click", () =>{
    container.classlist.remove("sign-up-mode");

});

