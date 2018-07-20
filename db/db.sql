DROP DATABASE IF EXISTS expense_manager;
CREATE DATABASE IF NOT EXISTS expense_manager CHARACTER SET utf8 COLLATE utf8_general_ci;

GRANT ALL ON expense_manager.* TO "expense_manager"@"localhost" IDENTIFIED BY "expense_manager";
GRANT ALL ON expense_manager.* TO "expense_manager"@"%" IDENTIFIED BY "expense_manager";

USE expense_manager;

DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS categories (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(64),
  description VARCHAR(256),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE InnoDB;

DROP TABLE IF EXISTS expenses;
CREATE TABLE IF NOT EXISTS expenses (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_id INT UNSIGNED,
  title VARCHAR(64),
  transaction_date DATE NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX(category_id)
) ENGINE InnoDB;

