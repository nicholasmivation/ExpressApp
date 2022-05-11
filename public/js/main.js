function deletearticle() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("delete-article").innerHTML = this.responseText;
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}
