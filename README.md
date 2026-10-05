# 📝 Formulário de Cadastro com Firebase

Formulário web responsivo que registra depósitos (nome, e-mail e valor) em tempo real no **Cloud Firestore**, com interface moderna e animação de entrada.

🔗 **Demo online:** https://itsmeeduu.github.io/formulario-firebase/



## ✨ Funcionalidades

- Envio dos dados direto para o banco de dados do Firebase (Firestore)
- Validação dos campos no navegador (e-mail válido, valor maior que zero)
- Feedback ao usuário: botão desativado com "Enviando..." durante o envio e aviso de sucesso ou erro
- Data e hora do envio gravadas pelo servidor (`serverTimestamp`)
- Interface com gradiente, cartão que desce suavemente ao abrir a página, campos com ícones e botão com efeito ao passar o mouse
- Layout responsivo, que funciona bem no celular
- Respeita a preferência de usuários que desativam animações no sistema

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura semântica do formulário |
| CSS3 | Layout, gradientes, animações e responsividade |
| JavaScript (ES Modules) | Lógica de envio e integração com o Firebase |
| Firebase Firestore | Banco de dados NoSQL na nuvem |

## 📂 Estrutura do projeto

```
formulario-firebase/
├── index.html    # Estrutura da página
├── style.css     # Estilos e animações
├── script.js     # Conexão com o Firebase e envio dos dados
└── img/
    └── print.png # Captura de tela usada neste README
```

## 🚀 Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/ItsmeEduu/formulario-firebase.git
   ```

2. Crie um projeto no [Firebase Console](https://console.firebase.google.com), adicione um app web e ative o **Firestore Database**.
3. No `script.js`, substitua o objeto `firebaseConfig` pelas configurações do seu projeto.
4. Abra a pasta no VS Code e rode com a extensão **Live Server**. O projeto usa módulos ES, então não funciona abrindo o HTML direto do arquivo.

## 🔒 Segurança

A configuração do Firebase fica visível no código do front-end, o que é esperado nesse tipo de aplicação. Quem protege os dados são as **regras do Firestore**. Este projeto usa regras que permitem apenas **criar** documentos na coleção `depositos`, com os campos e tipos esperados, e bloqueiam leitura, alteração e exclusão pelo navegador:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /depositos/{doc} {
      allow create: if request.resource.data.keys().hasOnly(['nome', 'email', 'valor', 'dataEnvio'])
                    && request.resource.data.nome is string
                    && request.resource.data.email is string
                    && request.resource.data.valor is number
                    && request.resource.data.valor > 0;
      allow read, update, delete: if false;
    }
  }
}
```

## 🧠 O que aprendi

- Conectar uma página web ao Firebase usando o SDK modular via CDN
- Depurar erros de CORS e de importação de módulos pelo console do navegador
- Escrever regras de segurança no Firestore
- Construir interfaces com CSS puro: gradientes, `@keyframes`, `:focus-within` e `prefers-reduced-motion`
- Versionar e publicar um projeto com Git e GitHub

## 🔮 Próximos passos

- [ ] Máscara de moeda (R$) no campo de valor
- [ ] Mensagem de sucesso animada no lugar do `alert`
- [ ] Autenticação com Firebase Authentication para listar os depósitos numa tabela

## 👨‍💻 Autor

**Eduardo Ferreira de Souza**
Estudante de Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul

[![LinkedIn](https://img.shields.io/badge/LinkedIn-itsmeeduu-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/itsmeeduu)
[![GitHub](https://img.shields.io/badge/GitHub-ItsmeEduu-181717?logo=github&logoColor=white)](https://github.com/ItsmeEduu)
