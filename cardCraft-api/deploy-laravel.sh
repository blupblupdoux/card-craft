# cd cardcraft.sarah-bobtchev-melin.com/cardcraft/api/
# chmod +x ./deploy-laravel.sh && ./deploy-laravel.sh

cp ../.env ./.env

cp ../.htaccess-quasar ../public/.htaccess

composer install

php artisan key:generate

php artisan migrate

php artisan route:clear

php artisan cache:clear

php artisan view:clear

php artisan serve