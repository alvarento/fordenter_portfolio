# 🚀 FordEnter Portifólio de Projetos

Este é um projeto Angular criado para exibir o portifólio de projetos interativos consumidos a partir de uma planilha do Google Sheets em formato CSV. A aplicação usa **Angular Signals**, **Angular Material**, **Swiper.js**. Esta página foi desenvolvido especialmente para exibição dos projetos feitos durante minha trajetória no programa [FordEnter](https://www.ford.com.br/sobre-a-ford/ford-enter/).

## 🧱 Tecnologias utilizadas

- [Angular 19+](https://angular.dev/)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Material](https://material.angular.dev/)
- [Swiper.js](https://swiperjs.com/)
- [PapaParse](https://www.papaparse.com/) (parser de CSV)
- Google Sheets (como CMS via CSV público)

## 📂 Estrutura do Projeto


```bash

src/
│
├── app/
│ ├── components/
│ │ └── project-card/ # Card individual de projeto
│ ├── services/
│ │ └── project.service.ts # Lógica de consumo de dados CSV
│ ├── interfaces/
│ │ └── project-infos.interface.ts
│ └── custom-swiper/
│ └── custom-swiper.component.ts/html/scss
│
├── assets/
│ └── icons/ # SVGs customizados (GitHub, LinkedIn, etc)
│ └── fonts/ # Fontes personalizadas
│
└── styles/
└── fonts.scss # @font-face e importações globais
```

## 🧠 Funcionalidades

- ✅ Consumo de dados em CSV a partir de um Google Sheet
- ✅ Conversão para JSON com PapaParse
- ✅ Exibição em cards com layout responsivo e Swiper.js
- ✅ Tooltips com informações adicionais
- ✅ Links opcionais para demo e código-fonte
- ✅ SVGs customizados com `MatIconRegistry`
- ✅ Indicador de loading enquanto dados são carregados
- ✅ Suporte a fontes personalizadas

### :link: Deploy Online

#### Veja a versão final hospedada:

:point_right: [Acesse aqui](https://alvarofordenter.site)

---
### 👤 Autor
Desenvolvido com 💙 por **Álvaro Nascimento**
- 🔗 [Linkedin](https://www.linkedin.com/in/alvarento)
- 📧 alvarento@hotmail.com
