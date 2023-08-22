const span = document.getElementById('data');

let valores = localStorage.getItem("inputPRUEBA");


span.innerHTML += 
`
    <p> ${valores} </p>
`