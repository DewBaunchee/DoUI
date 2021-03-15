function formListener() {
    let array = document.getElementsByClassName("bookNowField");
    for(let i = 0; i < array.length; i++) {
        if(array[i].value.length == 0) {
            document.getElementsByClassName("submitBtn")[0].setAttribute("disabled", "true");
            return;
        }
    }
    document.getElementsByClassName("submitBtn")[0].removeAttribute("disabled");
}