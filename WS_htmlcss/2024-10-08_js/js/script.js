function callback() {
    console.log("callback was called");
    console.log(Date());
    let btn = document.getElementsByTagName("button")[0];
    btn.classList.remove("btn-danger");
    btn.classList.add("btn-success");
}