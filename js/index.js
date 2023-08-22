document.getElementById('buttonText').addEventListener("click", function() {
    const input = document.getElementById('inputText').value;
    console.log(input);
    localStorage.setItem("inputPRUEBA", input);
})