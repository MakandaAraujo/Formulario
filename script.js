document.addEventListener('DOMContentLoaded', () => {
    const sexButtons = document.querySelectorAll('.sex-btn');
    const usoImagemSwitch = document.getElementById('image-usage'); // Corrigido para o ID correto
    const form = document.getElementById('myForm'); // Seleciona o formulário
    let selectedSex = null; // Variável para armazenar o sexo selecionado

    function selectSex(sex) {
        const buttons = document.querySelectorAll('.sex-btn');
        buttons.forEach(btn => {
            // Verifica se o texto do botão corresponde ao sexo selecionado
            if (btn.textContent === (sex === 'male' ? 'Masculino' : sex === 'female' ? 'Feminino' : 'Não Sei')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        selectedSex = sex; // Atualiza a variável com o sexo selecionado
    }

    // Adicionando evento para os botões de sexo
    sexButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const sex = btn.textContent === 'Masculino' ? 'male' : btn.textContent === 'Feminino' ? 'female' : 'unknown';
            selectSex(sex);
        });
    });

    // Gerenciar o switch de autorização de imagem
    usoImagemSwitch.addEventListener('change', () => {
        const usageText = document.getElementById('usage-text');
        if (usoImagemSwitch.checked) {
            usageText.textContent = 'Sim'; // Muda o texto para "Sim"
            console.log('Autorização: Sim');
        } else {
            usageText.textContent = 'Não'; // Muda o texto de volta para "Não"
            console.log('Autorização: Não');
        }
    });

    // Adicionar evento de submissão do formulário
    form.addEventListener('submit', (e) => {
        // Verifica se o sexo do bebê não foi selecionado
        if (!selectedSex) {
            e.preventDefault(); // Impede o envio do formulário
            alert('Por favor, selecione o sexo do bebê.'); // Alerta ao usuário
            return; // Sai da função
        }

        // Verifica se o switch de uso de imagem não está marcado
        if (!usoImagemSwitch.checked) {
            e.preventDefault(); // Impede o envio do formulário
            alert('Por favor, aceite o uso de imagem para enviar o formulário.'); // Alerta ao usuário
        }
    });
});