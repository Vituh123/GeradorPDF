window.jsPDF = window.jspdf.jsPDF;

function generatePDF() {
    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Cria um novo documento PDF
    const doc = new jsPDF();

    // Adiciona o conteúdo ao PDF
    doc.text(`Nome: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Telefone: ${phone}`, 10, 30);
    doc.text('Experiência:', 10, 40);
    doc.text(experience, 10, 50);
    doc.text('Educação:', 10, 70);
    doc.text(education, 10, 80);

    // Salva o PDF com o nome "curriculo.pdf"
    doc.save('curriculo.pdf');
}
