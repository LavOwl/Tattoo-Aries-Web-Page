DROP DATABASE IF EXISTS tattoo_dev_db;
CREATE DATABASE tattoo_dev_db;
USE tattoo_dev_db;
DROP USER IF EXISTS 'spring_app'@'localhost';
CREATE USER 'spring_app'@'localhost' IDENTIFIED BY 'dev_pass';
GRANT ALL PRIVILEGES ON tattoo_dev_db.* TO 'spring_app'@'localhost';
FLUSH PRIVILEGES;