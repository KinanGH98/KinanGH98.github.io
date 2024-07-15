let passwordConfirmation = document.getElementById("passwordConfirm");
let originalPassword = document.getElementById("password");
let dateOfBirth = document.getElementById("birthdate");

passwordConfirmation.addEventListener("input", () =>
    {
        if (passwordConfirmation.value === originalPassword.value)
            passwordConfirmation.setCustomValidity("");
        else
            passwordConfirmation.setCustomValidity("Password confirmation doesn't match your password.");
    }
);

dateOfBirth.addEventListener("input", () =>
    {
        if (getAge(dateOfBirth.value) >= 18)
            dateOfBirth.setCustomValidity("")
        else
            dateOfBirth.setCustomValidity("You must be at least 18 years old.")
    }
);

function getAge(DOB)
{
    const today = new Date();
    const birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}