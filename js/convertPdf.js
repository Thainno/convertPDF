const btnGenerate = document.querySelector("#generate-pdf")

btnGenerate.addEventListener("click", () => {

    // Conteúdo do PDF
    const content = document.querySelector("#content").value
    
    // Configuração do arquivo final de PDF
    const options = {
        margin: [25, 30, 25, 30],
        filename: "nomeDoArquivo.pdf",
        html2canvas: {sacle: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Gerar e baixar o PdF
    html2pdf().set(options).from(content).save()
})