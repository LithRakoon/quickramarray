const submitButton = document.getElementById("submit");
const inputField = document.getElementById("twitter");
const output = document.getElementById("output");

submitButton.addEventListener("click", ()=> {
    if (inputField.value == "") {
        alert("Please fill in the field")
        return;
    }

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', "[]")
    }

    let old_data = JSON.parse(localStorage.getItem('data'))

    old_data.push(inputField.value)

    localStorage.setItem('data', JSON.stringify(old_data))

    output.value = localStorage.getItem('data')

    document.getElementById("twitter").value = ""
})