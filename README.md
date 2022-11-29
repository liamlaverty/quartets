# Quartets

Simple typescript application with webpack pre-installed & configured. Includes some starter github actions that'll deploy the compiled site whenever commits are made to the `main` branch





## Use

Start watcher for development work
`npm run watch`

Start builder to build the application
`npm run build`


## Github Pages: 
https://liamlaverty.github.io/quartets/

## Github Actions: 

- Automatically builds using WebPack whenever a PR is made to the `main` branch
- Has a 1-click-deploy whenever a PR is successfully closed in the `main` branch
- https://github.com/liamlaverty/quartets/blob/main/.github/workflows/webpack.yml
