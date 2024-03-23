const validate = () => {
    let forms = document.querySelectorAll('.needs-validation');
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (form.checkValidity()) {
                const payload = {
                    name: form.querySelector('#nome').value,
                    surname: form.querySelector('#surname').value,
                    birthDate: form.querySelector('#birthday').value,
                    profession: form.querySelector('#profission').value,
                    documentNumber: form.querySelector('#cpf').value,
                    email: form.querySelector('#email').value,
                    password: form.querySelector('#pwd').value,
                    phone: form.querySelector('#telefone').value,
                    address: form.querySelector('#address').value,
                };
                alert(`Cadastro realizado com sucesso! \n ${JSON.stringify(payload)}`);
                console.log(payload);
            } else {
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
};

window.addEventListener('load', validate);
