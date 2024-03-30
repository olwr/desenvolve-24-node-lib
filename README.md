# Validando Links

Biblioteca criada para validar links em artigos escritos no formato Markdown. Com o uso de expressões regulares, a lib encontra os pares de título e link, e pode criar 2 listas: sem validação e com validação. 

Tudo roda pela linha de comando, sendo necessários 2 argumentos na seguinte ordem: caminho do arquivo/diretório e comando de validação (opcional).

```bash
node src/cli.js ./arquivos --valida
```

Com o uso do script dentro do package.json, este comando também é possível:

```bash
npm run cli ./arquivos -- --valida
```

Projeto desenvolvido duranto o programa Desenvolve 24, parceria Grupo Boticário e Alura, no curso "Node.js: Criando sua primeira biblioteca".

### Tecnologias
![ide: vs code](https://img.shields.io/badge/IDE-visual_studio_code-lightblue?style=plastic&logo=visualstudiocode&logoColor=0078D4&labelColor=white&color=0078D4)
![tech: git](https://img.shields.io/badge/git-orangered?style=plastic&logo=git&logoColor=FF4500&labelColor=white)
![lang: javascript](https://img.shields.io/badge/lang.-javascript-gold?style=plastic&logo=javascript&logoColor=FFD700&labelColor=191919)
![environment: node.js](https://img.shields.io/badge/environment-node.js-seagreen?style=plastic&logo=node.js&logoColor=3CB371&label=environment&labelColor=212121&color=3CB371)
![lang: markdown](https://img.shields.io/badge/lang.-markdown-black?style=plastic&logo=markdown&logoColor=191919&labelColor=white)
![lib: chalk](https://img.shields.io/badge/lib-chalk-crimson?style=plastic&logo=npm&logoColor=DC143C&labelColor=white)
