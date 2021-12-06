### Set up Instruction  
## After cloning project from github, please follow these steps to setup and run project.

##### 1. Install the widget modules for "front-end-react" folder 
```
 ...$ cd front-end-react
 ...front-end-react/ $ npm i
```

##### 2. The "npm i" command will read .json package and automatically install. After installation done, try "npm start" to run react app
```
 ...front-end-react/ $ npm start
```

##### 3. Keep this this Terminal running, the first time React project running may take a minutes. The React App will run at localhost:3000

##### 4. Open new Terminal.

##### 5. Installing the neccessary packages for "back-end-laravel" folder
```
 ...$ cd back-end-laravel
 ...back-end-laravel/ $ composer install
```

##### 6. After installing the neccessary packages, make a copy of the ".envProject" file and remane it to ".env" in the same directory with ".envProject"

##### 7. Create new MySQL database, named: "delivery"

##### 8. Init tables
```
 ...back-end-laravel/ $ php artisan migrate
```

##### 9. Generate a APP_KEY.
```
 ...back-end-laravel/ $ php artisan key:generate
```

##### 10. Finally, run php server.
```
 ...back-end-laravel/ $ php artisan serve
```

##### 11. If there are no errors, the Laravel server will run at localhost:8000