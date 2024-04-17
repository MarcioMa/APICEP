// Função para buscar informações de endereço com base no CEP
function buscarEnderecoPorCEP(cep) {
    // URL da API de busca de CEP dos Correios
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    // Faz a requisição GET para obter informações do endereço
    fetch(apiUrl)
        .then(response => {
            // Verifica se a requisição foi bem-sucedida (código de status 200)
            if (response.ok) {
                // Extrai os dados da resposta no formato JSON
                return response.json();
            } else {
                // Se a requisição falhar, lança um erro com o código de status
                throw new Error('Erro ao acessar a API de busca de CEP: ' + response.status);
            }
        })
        .then(data => {
            // Exibe as informações do endereço
            console.log(data)
            console.log('CEP:', data.cep);
            console.log('Logradouro:', data.logradouro);
            console.log('Bairro:', data.bairro);
            console.log('Cidade:', data.localidade);
            console.log('Estado:', data.uf);
        })
        .catch(error => {
            // Captura qualquer erro que ocorrer durante o processo
            console.error(error);
        });
}

// Exemplo de uso da função de busca de endereço por CEP
const cep = '75200000'; // CEP de São Paulo, por exemplo
buscarEnderecoPorCEP(cep);