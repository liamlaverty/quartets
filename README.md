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

## Using as a template: 

- If you use this repo as a template, you need to reconfigure the Github Pages to work with the new Github Actions
- Click settings, then Pages
  - In the "Build and deployment" section click the "Source" dropdown, then click "Github Actions"
  - In the newly opened window, create a new Yml file named `build-and-deploy-pages.yml`
  - Copy the contents of `~/.github/workflows/build-and-deploy.yml` into your new `yml` file
  - Commit the change
  - Return to Settings -> Pages, and check that it's setup correctly
  - Navigate to the Actions page to see the new workflow (you should be prompted to approve a deployment when the `build` action is complete
  
