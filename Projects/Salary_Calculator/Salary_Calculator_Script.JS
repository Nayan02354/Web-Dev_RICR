document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const basicSalary = document.getElementById("basicSalary").value;
    
    const HAR =  basicSalary * 0.2;
    const DA = basicSalary * 0.8;

    const grossSalary = Number(basicSalary)+ Number(HAR) + Number(DA);
    document.getElementById("basicSalary").value="";

    document.getElementById("Bs").innerText = basicSalary +" ₹ ";
    document.getElementById("Har").innerText = basicSalary * 0.2 + " ₹ ";
    document.getElementById("Da").innerText = basicSalary * 0.8 + " ₹ ";
    document.getElementById("Gs").innerText = grossSalary + " ₹ ";


});