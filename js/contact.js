function validateForm() {

    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="message"]').value;

    if (!name || !email || !message) {
        alert("필수 항목을 입력하세요");
        return false;
    }

    return true;
}