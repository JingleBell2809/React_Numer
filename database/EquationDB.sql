ALTER USER "root"@"%" IDENTIFIED WITH mysql_native_password BY "Bp220244";

CREATE DATABASE NumerEquation;
USE NumerEquation;

CREATE TABLE NumerEquation.EquationsTable (
  ID int NOT NULL AUTO_INCREMENT,
  FX varchar(50) NOT NULL,
  Xl int NOT NULL,
  Xr int NOT NULL,
  PRIMARY KEY (ID)
);
INSERT INTO NumerEquation.EquationsTable VALUES (1,'x^4-13',6,7),(2,'x^3+(4*x^2)-10',5,8),(3,'x^2+3*x-9',4,9),(4,'x^3+4',1,2),(5,'2*x^3+8x-3',2,3),(6,'3*x^2+3*x-5',3,4);
