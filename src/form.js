const themeButton = document.querySelector(".theme-mode");
const contactForm = document.querySelector(".contact-form");

themeButton.addEventListener("click", switchTheme);

function switchTheme() {
   const isDarkMode = document.querySelector(".switch-theme")
   document.body.classList.toggle("switch-theme");
   themeButton.classList.toggle("switch-theme");
   themeButton.firstElementChild.classList.toggle("fa-moon")
   contactForm.classList.toggle("switch-theme");
   if (isDarkMode) {
      contactForm.firstElementChild.src = "./assets/email-light.png"
   }else {
      contactForm.firstElementChild.src = "./assets/email-dark.png"
   }
}

/* process the form data and send it to php */

const form = document.querySelector(".contact-form form");
const formMessage = document.querySelector(".form-message");

form.addEventListener("submit", async (e) => {
   e.preventDefault()

   // let formData = {
   //    nome: document.getElementById("nome").value,
   //    email: document.getElementById("email").value,
   //    mensagem: document.getElementById("mensagem").value
   // };

   // try {
   //    const response = await fetch("http://localhost:3000/submit", {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json'
   //       },
   //       body: JSON.stringify(formData)
   //    });

   //    if (!response.ok) {
   //       throw new Error("Erro ao enviar os dados do formulário");
   //    }else {
         const inputs = document.querySelectorAll(".input-data");
         inputs.forEach((input) => {
            input.value = ""
            formMessage.classList.add("sent")
            setTimeout(() => {
               formMessage.classList.remove("sent")
            }, 3000)
         })
   //    }

   //    const result = await response.text()
   //    console.log(result);
   // }catch (error) {
   //    console.error("Erro ao enviar os dados do formulário", error);
   // }
});