drop database if exists burger_db;
create database burger_db;

use burger_db;

create table Burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) not null,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);