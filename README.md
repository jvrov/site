# Portfólio — João Vitor Roventini

Portfólio em português com interface escura, apresentação, tecnologias, projetos, experiência, formação e contato.

## Estrutura

- `index.html`: conteúdo, navegação, SEO e Open Graph.
- `css/style.css`: identidade visual, componentes, responsividade e movimento reduzido.
- `js/main.js`: menu móvel, seção ativa, entrada das seções e botão de topo.
- `assets/sculpture.svg`: composição vetorial decorativa local.
- `assets/favicon.svg`: ícone do site.
- `assets/og-image.png`: imagem de compartilhamento.
- `about.html`: preserva o endereço antigo e encaminha para `index.html#about`.

A composição e os estilos foram adaptados da interface aprovada no Lovable para HTML/CSS/JavaScript nativos. A imagem decorativa original foi substituída por uma composição vetorial local. Não há React, dependências npm, backend ou etapa de build. As fontes Manrope e IBM Plex Mono carregam pelo Google Fonts, com fontes do sistema como alternativa. O conteúdo permanece legível sem JavaScript.

## Prévia local

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra http://127.0.0.1:8000. Encerre com Ctrl+C.

## GitHub Pages

Nas configurações de Pages, use **Deploy from a branch**, selecione a branch de publicação e `/ (root)`. Caminhos relativos permitem servir o projeto em `/site/`. Não é necessário compilar. URL esperada: https://jvrov.github.io/site/ . Ao mudar o endereço, atualize canonical, og:url e og:image em `index.html`.

## Atualizar conteúdo

Edite diretamente as seções de `index.html`. Tecnologias não usam níveis de domínio ou porcentagens. Formação: Engenharia de Software na PUC-Campinas, conclusão prevista em 2027; cursos complementares de Linux, Excel Avançado e Cibersegurança na PUC-Campinas. A experiência representa projetos acadêmicos e pessoais, sem empregos fictícios.

O projeto em destaque `rh-auto` é descrito a partir do README e do código público: extração de PDFs, análise com a API da OpenAI e dashboard em Dash/Plotly. Fontes: https://github.com/jvrov/rh-auto/blob/main/README.md e https://github.com/jvrov/rh-auto/blob/main/app/contract_analyzer.py . O diagrama do card é ilustrativo e não representa métricas de produção. Nenhuma demonstração online foi fornecida.

E-mail e currículo não foram fornecidos. O contato usa LinkedIn e GitHub; adicione o PDF e um botão de download quando houver currículo real disponível.

## Verificação

Confira navegação por teclado, menu móvel (incluindo Escape), seção ativa, links, movimento reduzido e ausência de rolagem horizontal em diferentes larguras. O site é editado neste repositório; a prévia do Lovable é independente e não recebe estas alterações.
