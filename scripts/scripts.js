const form = document.querySelector("#form")
const subject = document.querySelector(".subject-input")
const mensagem = document.querySelector('.assunto-textarea')
const enviarEmail = async () => {
    const url = "https://api-para-disparar-emails.onrender.com/enviar-email"
    const r = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'subject': subject.value, 'body': mensagem.value })
    }).then(() => console.log("deu certo a requisicao")).catch(() => console.log('deu errado'))
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    console.log("enviando")
    await enviarEmail()
    console.log("enviou")
})
