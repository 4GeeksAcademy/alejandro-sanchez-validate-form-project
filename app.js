
document.getElementById("myForm").addEventListener("submit", function(event) {
    let completed = true;
    let errorMessage = document.getElementById("errorMessage");

    // Hide the error message by default
    errorMessage.style.display = 'none';

    const fields = [
        { id: "inputCard#", name: "Card#", regex: /^\d{16}$/ },
        { id: "inputCVC#", name: "CVC#", regex: /^\d{3,4}$/ },
        { id: "inputAmount", name: "Amount", regex: /^\d+$/ },
        { id: "inputFirstName", name: "First Name", regex: /^.+$/ },
        { id: "inputLastName", name: "Last Name", regex: /^.+$/ },
        { id: "inputCity", name: "City", regex: /^.+$/ },
        { id: "inputState", name: "State", regex: /^(?!Pick a state).+$/ },
        { id: "inputZip", name: "Postal Code", regex: /^\d{5}$/ },
        { id: "message", name: "Message", regex: /^.+$/}
    ];

    fields.forEach(field => {
        let value = document.getElementById(field.id).value.trim();
        if (!field.regex.test(value)) {
            document.getElementById(field.id).classList.add('is-invalid');
            completed = false;
        }
    });

    // Additional validation for radio buttons
    const cardTypes = document.querySelectorAll('input[name="inlineRadioOptions"]');
    let cardTypeSelected = false;
    cardTypes.forEach(cardType => {
        if (cardType.checked) {
            cardTypeSelected = true;
        }
    });

    if (!cardTypeSelected) {
        document.getElementById('inputCards').classList.add('is-invalid');
        completed = false;
    }

    if (!completed) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    }
});