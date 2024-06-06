# Persistência de dados

Passos que foram feitos para persistir os dados:

- Execução do script `setup-dataset.py` que converte arrays em string para arrays em JSON.
    - Lista de gêneros
    - Lista de personagens
    - Lista de prêmios
    - Lista de avaliações por estrelas
    - Lista de cenários
    - Autores foram separados por vírgula e colocados numa array

- Trocado nome de "bookId" para "_id" .

O resultado pode ser visto no arquivo `processed_dataset.json` 

# Setup de bases de dados

Corri o script setup-container.py
Passo o nome da base de dados o nome da coleção e por fim o caminho para o JSON

# Respostas textuais

## Exercício 1

Os testes à API foram feitos com o Postman


# Exercício 2

O identificador de autores foi escolhido como o nome do autor.

# Instruções de execução

Dever ser executado:

sudo npm install mongoose
npm start 

Isto deve ser feito para o ex1 e 2 pois nao foi possivel fazer o docker compose 

# Ações necessárias

Para por o dataset na base de dados é apenas correr este comando

python3 setup-container.py livros livros "data/processed_dataset.json"

E depois é so testar
