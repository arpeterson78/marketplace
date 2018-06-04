DROP DATABASE IF EXISTS marketplace_db;
CREATE DATABASE marketplace_db;

USE marketplace_db;

CREATE TABLE marketplace_items (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id)
);