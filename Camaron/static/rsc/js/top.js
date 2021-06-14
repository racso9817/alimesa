function setLangUrls() {
    Array.prototype.forEach.call(document.getElementsByClassName("langSwitch"), function (e) {
        let language_code = e.id.split("_")[1]
        e.href = "/" + language_code + "/"
        let complete_pathname = location.pathname
        let folders = complete_pathname.split('/')
        if (folders[1].length == 2){
            e.href = "/" + language_code + "/" + complete_pathname.replace("/" + folders[1] + "/", "")
        } else {
            e.href = "/" + language_code + complete_pathname
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    setLangUrls();
})