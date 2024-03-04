CREATE DATABASE IF NOT EXISTS afautos;

USE afautos;

/*  Address */
CREATE TABLE IF NOT EXISTS address (
    id_addr INTEGER AUTO_INCREMENT,
    name_address VARCHAR(30) NOT NULL,
    ref VARCHAR(100),
    city VARCHAR(20) NOT NULL,
    neighborhood VARCHAR(40),
    PRIMARY KEY(id_addr)
);

/*     Users    */
CREATE TABLE IF NOT EXISTS users (
    ced_user VARCHAR(15),
    pass VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(10) UNIQUE NOT NULL,
    names VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    rol VARCHAR(20) NOT NULL,
    doc_type VARCHAR(15) NOT NULL,
    birthday DATE NOT NULL,
    
    PRIMARY KEY(ced_user),
);

CREATE TABLE IF NOT EXISTS users_address (
    ced_user VARCHAR(15),
    id_addr INTEGER,

    CONSTRAINT fk_user_address FOREIGN KEY (ced_user) REFERENCES users(ced_user),
    CONSTRAINT fk_address_users FOREIGN KEY (id_addr) REFERENCES address(id_addr),
    PRIMARY KEY(ced_user,id_addr),
)

/*  Store Process  */
CREATE TABLE IF NOT EXISTS sales (
    id_sale INTEGER AUTO_INCREMENT,
    date_order DATETIME NOT NULL,
    pay_method VARCHAR(20) NOT NULL,
    ced_user VARCHAR(15),
    id_addr INTEGER,
    PRIMARY KEY(id_sale),
    CONSTRAINT fk_user_sales FOREIGN KEY(ced_user) REFERENCES users(ced_user),
    CONSTRAINT fk_address_sales FOREIGN KEY(id_addr) REFERENCES address(id_addr)
);

CREATE TABLE IF NOT EXISTS orders (
    id_order INTEGER AUTO_INCREMENT,
    `date` DATETIME NOT NULL,
    `state` VARCHAR(15) NOT NULL,
    id_sale INTEGER,
    ced_user VARCHAR(15),
    PRIMARY KEY(id_order),
    CONSTRAINT fk_sales_orders FOREIGN KEY(id_sale) REFERENCES sales(id_sale),
    CONSTRAINT fk_user_orders FOREIGN KEY(ced_user) REFERENCES users(ced_user)
);

/*  Products   */
CREATE TABLE IF NOT EXISTS categories (
    id_cat TINYINT AUTO_INCREMENT,
    name_cat VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY(id_cat)
);

CREATE TABLE IF NOT EXISTS brands (
    id_brand SMALLINT AUTO_INCREMENT,
    name_brand VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY(id_brand)
);

CREATE TABLE IF NOT EXISTS products (
    id_prod VARCHAR(30),
    name_prod VARCHAR(30),
    `description` VARCHAR(100),
    quantity SMALLINT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    id_cat TINYINT,
    id_brand SMALLINT,
    PRIMARY KEY(id_prod),
    CONSTRAINT fk_categories_prod FOREIGN KEY(id_cat) REFERENCES categories(id_cat),
    CONSTRAINT fk_brand_prod FOREIGN KEY(id_brand) REFERENCES brands(id_brand)
);

CREATE TABLE IF NOT EXISTS products_sales (
    id_prod VARCHAR(30),
    id_sale INTEGER,
    quantity TINYINT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_products FOREIGN KEY(id_prod) REFERENCES products(id_prod),
    CONSTRAINT fk_sales FOREIGN KEY(id_sale) REFERENCES sales(id_sale),
    PRIMARY KEY(id_prod, id_sale)
);

CREATE TABLE IF NOT EXISTS products_entry (
    id_entry INTEGER AUTO_INCREMENT,
    `date` DATETIME NOT NULL,
    ced_user VARCHAR(15),
    PRIMARY KEY(id_entry),
    CONSTRAINT fk_users_entry FOREIGN KEY(ced_user) REFERENCES users(ced_user)
);

CREATE TABLE IF NOT EXISTS products_entry_detail (
    id_entry INTEGER,
    id_prod VARCHAR(30),
    quantity SMALLINT NOT NULL,
    CONSTRAINT fk_entry_detail FOREIGN KEY(id_entry) REFERENCES products_entry(id_entry),
    CONSTRAINT fk_products_detail FOREIGN KEY(id_prod) REFERENCES products(id_prod),
    PRIMARY KEY(id_entry, id_prod)
);