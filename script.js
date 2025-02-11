function contratar(valor, dados) {
    let numeroInput = event.target.previousElementSibling;
    let numero = numeroInput.value.trim();

    if (numero === "") {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Exibir valor do plano selecionado e pagamento via Pix
    document.getElementById("valorPlano").innerText = valor.toFixed(2);
    document.getElementById("pagamento").classList.remove("hidden");

    // Enviar dados para o WhatsApp
    let mensagem = `Olá! Quero contratar o plano de R$${valor} que oferece ${dados} por dia. Meu número: ${numero}. Já realizei o pagamento via Pix.`;
    let url = `https://api.whatsapp.com/send?phone=27997294468&text=${encodeURIComponent(mensagem)}`;

    setTimeout(() => {
        window.open(url, "_blank");
    }, 20000); // Abre o WhatsApp após 2 segundos
}