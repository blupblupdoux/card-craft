cd cardcraft.sarah-bobtchev-melin.com/cardcraft/api/

composer install

php artisan key:generate

php artisan migrate

php artisan route:clear

php artisan cache:clear

php artisan view:clear

cp ../.env ./api/.env

php artisan serve