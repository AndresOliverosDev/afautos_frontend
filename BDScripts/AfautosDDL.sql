DROP DATABASE afautos;
CREATE DATABASE IF NOT EXISTS Afautos;

USE Afautos;

 /*     USUARIOS    */

CREATE TABLE IF NOT EXISTS RolUsuar (
    idRol TINYINT AUTO_INCREMENT,
    nomRol VARCHAR(10) UNIQUE NOT NULL,

    PRIMARY KEY(idRol)
);

CREATE TABLE IF NOT EXISTS TipDoc (
    idTipDoc TINYINT,
    nomDoc VARCHAR(10) UNIQUE NOT NULL,

    PRIMARY KEY(idTipDoc)
);

CREATE TABLE IF NOT EXISTS Usuarios (
    idUsuar VARCHAR(15),
    pass VARCHAR(20) UNIQUE NOT NULL /*TEMPORAL*/,
    email VARCHAR(100) UNIQUE NOT NULL,
    telef VARCHAR(10) UNIQUE NOT NULL,
    priNom VARCHAR(15) NOT NULL,
    segNom VARCHAR(15),
    priApe VARCHAR(15),
    segApe VARCHAR(15),
    idRol TINYINT,
    idTipDoc TINYINT,

    PRIMARY KEY(idUsuar),
    CONSTRAINT FK_RolUsuar_US FOREIGN KEY(idRol)
        REFERENCES RolUsuar(idRol),
    CONSTRAINT FK_TipDoc_US FOREIGN KEY(idTipDoc)
        REFERENCES TipDoc(idTipDoc)
);

/*  DIRECCIONES */

CREATE TABLE IF NOT EXISTS Departamentos (
    idDep TINYINT AUTO_INCREMENT,
    nomDep VARCHAR(30) UNIQUE NOT NULL,

    PRIMARY KEY(idDep)
);

CREATE TABLE IF NOT EXISTS Ciudades (
    idCiu SMALLINT AUTO_INCREMENT,
    nomCiud VARCHAR(30) UNIQUE NOT NULL,
    idDep TINYINT,

    PRIMARY KEY(idCiu),
    CONSTRAINT FK_Depart_CI FOREIGN KEY(idDep)
        REFERENCES Departamentos(idDep)
);

CREATE TABLE IF NOT EXISTS Barrios (
    idBarr SMALLINT AUTO_INCREMENT,
    nomBarr VARCHAR(30) NOT NULL,
    idCiu SMALLINT,

    PRIMARY KEY(idBarr),
    CONSTRAINT FK_Ciud_BA FOREIGN KEY(idCiu)
		REFERENCES Ciudades(idCiu)
);

CREATE TABLE IF NOT EXISTS Direcciones (
    idDirec INTEGER AUTO_INCREMENT,
    Direc VARCHAR(15) NOT NULL,
    ref VARCHAR(100),
    idUsuar VARCHAR(15),
    idBarr SMALLINT,

    PRIMARY KEY(idDirec),
    CONSTRAINT FK_Usuar FOREIGN KEY(idUsuar)
        REFERENCES Usuarios(idUsuar),
    CONSTRAINT FK_Bar_DI FOREIGN KEY(idBarr)
        REFERENCES Barrios(idBarr)
);

/*  PROCESOS TIENDA   */

CREATE TABLE IF NOT EXISTS Ventas (
    idVent INTEGER AUTO_INCREMENT,
    fecha DATETIME NOT NULL,
    formPago VARCHAR(20) NOT NULL,
    idUsuar VARCHAR(15),
    idDirec INTEGER,

    PRIMARY KEY(idVent),
    CONSTRAINT FK_Usuar_VE FOREIGN KEY(idUsuar)
        REFERENCES Usuarios(idUsuar),
    CONSTRAINT FK_Direc_VE FOREIGN KEY(idDirec)
        REFERENCES Direcciones(idDirec)
);

CREATE TABLE IF NOT EXISTS Pedidos (
    idPed INTEGER AUTO_INCREMENT,
    fecha DATETIME NOT NULL,
    estado VARCHAR(15) NOT NULL,
    idVent INTEGER,
    idUsuar VARCHAR(15),

    PRIMARY KEY(idPed),
    CONSTRAINT FK_Vent_PE FOREIGN KEY(idVent)
        REFERENCES Ventas(idVent),
    CONSTRAINT FK_Usua_PE FOREIGN KEY(idUsuar)
        REFERENCES Usuarios(idUsuar)
);

/*  PRODUCTOS   */

CREATE TABLE IF NOT EXISTS Categorias (
    idCat TINYINT AUTO_INCREMENT,
    nomCat VARCHAR(30) UNIQUE NOT NULL,

    PRIMARY KEY(idCat)
);

CREATE TABLE IF NOT EXISTS Marcas (
    idMarc SMALLINT AUTO_INCREMENT,
    nomMarc VARCHAR(30) UNIQUE NOT NULL,
    
    PRIMARY KEY(idMarc)
);

CREATE TABLE IF NOT EXISTS Productos (
    idProd VARCHAR(30),
    nomProd VARCHAR(30),
    descr VARCHAR(100),
    cant SMALLINT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    idCat TINYINT,
    idMarc SMALLINT,
    
    PRIMARY KEY(idProd),
    CONSTRAINT FK_idCat_PR FOREIGN KEY(idCat)
      REFERENCES Categorias(idCat),
    CONSTRAINT FK_Marc_PR FOREIGN KEY(idMarc)
      REFERENCES Marcas(idMarc)
);

CREATE TABLE IF NOT EXISTS ProdVenta (
    idProd VARCHAR(30),
    idVent INTEGER,
    cant TINYINT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    
    CONSTRAINT FK_Prod_PV FOREIGN KEY(idProd)
      REFERENCES Productos(idProd),
    CONSTRAINT FK_Vent_PV FOREIGN KEY(idVent)
        REFERENCES Ventas(idVent),
    /*CONSTRAINT PK_ProdVenta_IdProd_IdVent*/ PRIMARY KEY(idProd,idVent)
);

CREATE TABLE IF NOT EXISTS IngreProd (
    idIngre INTEGER AUTO_INCREMENT,
    fecha DATETIME NOT NULL,
    idUsuar VARCHAR(15),

    PRIMARY KEY(idIngre),
    CONSTRAINT FK_Usuar_IN FOREIGN KEY(idUsuar)
        REFERENCES Usuarios(idUsuar)
);

CREATE TABLE IF NOT EXISTS DetaIngreProd (
    idIngre INTEGER,
    idProd VARCHAR(30),
    cant SMALLINT NOT NULL,

    CONSTRAINT FK_Ingre_DIP FOREIGN KEY(idIngre)
        REFERENCES IngreProd(idIngre),
    CONSTRAINT FK_Prod_DIP FOREIGN KEY(idProd)
        REFERENCES Productos(idProd),
    /*CONSTRAINT PK_DetaIngreProd*/ PRIMARY KEY(idIngre,idProd)
);

                                        /*      TRIGGERS      */

/*Triggers para limitar cantidad de Departamentos, Ciudades y barrios*/

/* Departamentos */
DELIMITER $$
CREATE TRIGGER maxDepart
    BEFORE INSERT ON Departamentos
        FOR EACH ROW
            BEGIN
				SELECT COUNT(*) INTO @count FROM Departamentos;
                IF @count > 32 THEN
					SIGNAL SQLSTATE "45000" SET MESSAGE_TEXT =  "El numero de departamentos es suoerior al permitido";
				END IF;
END;
$$
DELIMITER ;

/* Ciudades */
DELIMITER $$
	CREATE TRIGGER MaxCiud
		BEFORE INSERT ON Ciudades
			FOR EACH ROW
				BEGIN
					SELECT COUNT(*) INTO @count FROM Ciudades;
						IF @count >	
$$
DELIMITER ;