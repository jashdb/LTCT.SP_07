### Set up Instruction  
## After cloning project from github, please follow these steps to setup and run project.

##### 1. Install the widget modules for "front-end-react" folder 
```
 ...$ cd front-end-react
 ...front-end-react/ $ npm i
```

##### 2. The "npm i" command will read .json package and automatically install. After installation done, try "npm start"
```
 ...front-end-react/ $ npm start
```

##### 3. Installing the neccessary packages for "back-end-laravel" folder
```
 ...$ cd back-end-laravel
 ...back-end-laravel/ $ composer install
```

##### 4. Generate a APP_KEY.
```
 ...back-end-laravel/ $ php artisan key:generate
```

##### 5. Finally, run php server.
```
 ...back-end-laravel/ $ php artisan serve
```