# Project installation

## Set up
Clone the github repo: `git clone git@github.com:blupblupdoux/card-craft.git`

## Frontend

### Install quasar CLI if needed  
Check if installed: `quasar -v`  
Install: `npm i -g @quasar/cli`

### Create project

Create: `npm init quasar`  
- Quasar CLI
- Quasar V2 (with Vue3)
- Javascript
- Sass (SCSS syntax)
- ESLint, State Management (Pinia), Axios, Vue-i18n
- Prettier

### Run project

Go to created folder: `cd cardCraft-front`   
Run dev server: `quasar dev`

## Backend

### Create api

`composer create-project laravel/laravel cardCraft-api`

Remove all useless items  
- ressources folder
- routes declared in cardCraft-api/routes/web.php
- cardCraft-api/vite.config.js

### Run api

Go to created folder: `cd cardCraft-api`   
Run php server: `php artisan serve`