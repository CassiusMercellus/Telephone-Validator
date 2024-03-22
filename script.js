const input = document.getElementById("user-input");
const items = document.getElementById("results-div");
let screen = [];


function check(input) {

    if (input.value === '') {
        alert('Please provide a phone number');
        return
    }

    let phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    
    const newInput = input.value.trim();
    const isValid = phoneRegex.test(newInput);
    
    screen.push({ text: newInput, valid: isValid });

    input.value = "";

    display()
}


function clear() {
    screen = [];
    display();
}

function display() {
    items.innerHTML = "";

    screen.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.setAttribute("id", `item-${index}`);
        if (item.valid === true) {
            console.log("true")
            div.classList.add("valid");
            div.innerHTML = `
            <p class="valid">Valid US Number:</p>
            <div class="valid">${item.text}</div>
        `;
        } else {
            console.log("false")
            div.classList.add("invalid");
            div.innerHTML = `
            <p class="invalid">Invalid US Number:</p>
            <div class="invalid">${item.text}</div>
        `;
        }
        items.appendChild(div);
    });
}

    
document.getElementById("check-btn").addEventListener('click', function() {
    check(input);
});
    
document.getElementById("clear-btn").addEventListener('click', function() {
    clear();
});
    
