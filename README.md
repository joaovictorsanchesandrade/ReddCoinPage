
# **ReddCoin Page**

Uma aplicação simples para visualizar transações e movimentações da blockchain ReddCoin utilizando apenas a chave pública do usuário.
O objetivo é oferecer uma interface leve, acessível e fácil de usar para acompanhar operações na rede.

---

## **Sobre o Criador**

**João Victor Sanches Andrade**
Tenho 17 anos e estudo programação há aproximadamente 3 anos.
Minha motivação para este projeto é aprofundar meu domínio em **JavaScript**, explorando boas práticas, organização de código e arquitetura front-end.

---

## **Estrutura de Pastas**

```
├── assets
│   ├── fonts
│   ├── icons
│   └── images
├── css
├── js
│   ├── domain
│   ├── pages
│   ├── services
│   └── utils
└── pages
```

### **Descrição das Pastas**

* **assets/**
  Contém arquivos de mídia, como fontes, ícones e imagens utilizadas no projeto.

* **css/**
  Armazena todos os arquivos de estilo responsáveis pela aparência das páginas.

* **pages/**
  Contém os arquivos HTML das páginas da aplicação.

* **js/**
  Pasta principal de scripts JavaScript, dividida por responsabilidade:

  * **domain/**
    Onde ficam as regras de negócio — a lógica mais “pura” do sistema.
  * **pages/**
    Scripts específicos para cada página, responsáveis pela interatividade local.
  * **services/**
    Módulos responsáveis por acessar APIs, buscar dados ou fornecer fontes de informação.
  * **utils/**
    Funções utilitárias reutilizáveis em diversas partes do projeto.

