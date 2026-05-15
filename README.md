# My React Native First App

Uma aplicação mobile desenvolvida em **React Native** com **Expo** que calcula o Índice de Massa Corporal (IMC) de forma simples e intuitiva.

## 📱 Funcionalidades

- ✅ Cálculo automático de IMC (Índice de Massa Corporal)
- ✅ Interface amigável e responsiva
- ✅ Validação de entrada de dados
- ✅ Feedback tátil ao insira dados inválidos
- ✅ Histórico de cálculos realizados
- ✅ Suporte para múltiplas plataformas (iOS, Android e Web)

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI (instalado globalmente)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/TauanGB/My-React-Native-First-App.git
cd My-React-Native-First-App
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação:
```bash
npm start
```

## 📲 Executar em Diferentes Plataformas

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Linguagem tipada para maior segurança
- **React Hooks** - Gerenciamento de estado com `useState`

## 📋 Estrutura do Projeto

```
src/
├── components/
│   ├── Main/
│   │   └── index.tsx
│   ├── Title/
│   │   ├── index.tsx
│   │   └── style.ts
│   └── Form/
│       ├── index.tsx
│       ├── style.ts
│       └── ResultImc/
│           ├── index.tsx
│           └── style.ts
```

## 🎨 Componentes

### **Main**
Componente principal que renderiza o formulário

### **Title**
Exibe o título da aplicação

### **Form**
Formulário interativo que:
- Recebe altura e peso do usuário
- Valida os dados de entrada
- Calcula o IMC
- Exibe o resultado
- Mantém histórico dos cálculos

### **ResultImc**
Componente que exibe o resultado do cálculo do IMC

## 📐 Como Usar

1. Inicie a aplicação
2. Digite sua **altura em metros** (ex: 1.75)
3. Digite seu **peso em quilos** (ex: 70)
4. Toque no botão **"Calcular"**
5. O resultado do IMC será exibido
6. Todos os cálculos anteriores aparecem no histórico abaixo

## 📝 Notas

- Os valores de altura e peso aceitam números decimais (use vírgula ou ponto como separador)
- A aplicação fornece feedback tátil quando há erros de validação
- O histórico de cálculos é mantido durante a sessão

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Autor

**Tauan GB**

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.
