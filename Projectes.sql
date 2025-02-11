-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: projectes
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumnes`
--

DROP TABLE IF EXISTS `alumnes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnes` (
  `idalu` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idsapa` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dni_alumne` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom_alumne` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cognoms_alumne` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data_naixement_alumne` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lloc_naixement_alumne` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nacionalitat_alumne` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adressa_alumne` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codi_postal_alumne` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `poblacio_alumne` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefon_alumne` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobil_alumne` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_alumne` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota_preinscripcio` decimal(10,4) DEFAULT NULL,
  `centre_procedencia` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `via_acces` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nivell_angles` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `altres_titulacions` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `targeta_sanitaria_alumne` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `carnet_conduir` tinyint DEFAULT NULL,
  `vehicle_propi` tinyint DEFAULT NULL,
  `malaltia` tinyint DEFAULT NULL,
  `malaltia_tipus` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discapacitat` tinyint DEFAULT NULL,
  `discapacitat_tipus` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nese` tinyint DEFAULT NULL,
  `nese_tipus` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `situacio_familiar` tinyint DEFAULT NULL,
  `situacio_familiar_tipus` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dni_tutor1` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom_tutor1` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cognoms_tutor1` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parentiu_tutor1` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefon_tutor1` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hores_tutor1` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_tutor1` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `professio_tutor1` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formacio_tutor1` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dni_tutor2` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom_tutor2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cognoms_tutor2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parentiu_tutor2` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefon_tutor2` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hores_tutor2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_tutor2` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `professio_tutor2` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formacio_tutor2` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` tinyint DEFAULT NULL,
  `comentari` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`idalu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnes`
--

LOCK TABLES `alumnes` WRITE;
/*!40000 ALTER TABLE `alumnes` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curr_estudis`
--

DROP TABLE IF EXISTS `curr_estudis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curr_estudis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `curriculum` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estudis` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `curriculum_estudis` (`curriculum`,`estudis`),
  KEY `fk_curr_estudis_idx` (`estudis`),
  CONSTRAINT `fk_curr_estudis` FOREIGN KEY (`estudis`) REFERENCES `estudis` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curr_estudis`
--

LOCK TABLES `curr_estudis` WRITE;
/*!40000 ALTER TABLE `curr_estudis` DISABLE KEYS */;
INSERT INTO `curr_estudis` VALUES (1,'C24','ASIX'),(2,'C24','DAW'),(3,'C24','DViRV'),(4,'C24','IAiBD'),(5,'C24','IO'),(6,'C24','SMX');
/*!40000 ALTER TABLE `curr_estudis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curr_moduls`
--

DROP TABLE IF EXISTS `curr_moduls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curr_moduls` (
  `id` int NOT NULL AUTO_INCREMENT,
  `curriculum` int NOT NULL,
  `curs` int NOT NULL,
  `ordre` int NOT NULL,
  `codi` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sigles` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hores_c` int NOT NULL,
  `hores_e` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_curriculum_idx` (`curriculum`),
  CONSTRAINT `fk_curriculum` FOREIGN KEY (`curriculum`) REFERENCES `curr_estudis` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curr_moduls`
--

LOCK TABLES `curr_moduls` WRITE;
/*!40000 ALTER TABLE `curr_moduls` DISABLE KEYS */;
INSERT INTO `curr_moduls` VALUES (1,6,1,16,'0221','HW','Muntatge i manteniment d’equips',132,99),(2,6,1,1,'0222','SOM','Sistemes operatius monolloc',99,33),(3,6,1,2,'0223','OFI','Aplicacions ofimàtiques',132,99),(4,6,1,3,'0225','XL','Xarxes locals',132,66),(5,6,1,5,'0156','ANG','Anglès professional',66,0),(6,6,1,6,'1664','DSP','Digitalització aplicada als sectors productius',33,0),(7,6,1,7,'1708','SSP','Sostenibilitat aplicada al sistema productiu',33,0),(8,6,1,8,'1709','IPO1','Itinerari personal per a l\'ocupabilitat I',99,0),(9,6,2,10,'0224','SOX','Sistemes operatius en xarxa',132,66),(10,6,2,11,'0226','SEG','Seguretat informàtica',99,33),(11,6,2,12,'0227','SERV','Serveis de xarxa',132,66),(12,6,1,4,'0228','WEB','Aplicacions web',66,53),(13,6,2,13,'1710','IPO2','Itinerari personal per a l\'ocupabilitat II',66,0),(14,6,2,15,'1713','PROJ','Projecte intermodular',198,0),(15,6,2,14,'S001','IP','Introducció a la programació',66,0),(18,1,2,9,'0371','HW','Fonaments de maquinari',66,33),(19,1,1,2,'0372','BD','Gestió de bases de dades',132,66),(20,1,1,3,'0373','LM','Llenguatge de marques i sistemes de gestió d’informació',66,33),(21,1,2,12,'0376','WEB','Implantació d’aplicacions web',66,33),(22,1,1,4,'0377','SGBD','Administració de sistemes gestors de bases de dades',33,33),(23,1,1,7,'0179','ANG','Anglès professional',66,0),(24,1,2,14,'1665','DIGI','Digitalització aplicada als sectors productius',33,0),(25,1,1,5,'1708','SOST','Sostenibilitat aplicada al sistema productiu',33,0),(26,1,1,6,'1709','IPO1','Itinerari personal per a l\'ocupabilitat I',99,0),(27,1,1,1,'0370','PAX','Planificació i administració de xarxes',132,53),(28,1,2,10,'0374','ASO','Administració de sistemes operatius',132,66),(29,1,2,11,'0375','SERV','Serveis de xarxa i internet',66,66),(30,1,2,13,'0378','SEG','Seguretat i alta disponibilitat',66,33),(31,1,2,15,'1710','IPO2','Itinerari personal per a l\'ocupabilitat II',66,0),(33,1,1,8,'S003','PROG','Programació',66,0),(34,2,1,16,'0373','LM','Llenguatges de marques i sistemes de gestió d’informació',66,33),(35,2,1,1,'0483','SI','Sistemes informàtics',99,66),(36,2,1,2,'0484','BD','Bases de dades',132,66),(37,2,1,3,'0485','PROG','Programació',198,66),(38,2,2,8,'0487','ED','Entorns de desenvolupament',66,33),(39,2,1,6,'0179','ANG','Anglès professional',66,0),(40,2,2,13,'1665','DIGI','Digitalització aplicada als sectors productius',33,0),(41,2,1,4,'1708','SOST','Sostenibilitat aplicada al sistema productiu',33,0),(42,2,1,5,'1709','IPO1','Itinerari personal per a l\'ocupabilitat I',99,0),(43,2,2,9,'0612','DWEC','Desenvolupament web en entorn client',99,66),(44,2,2,10,'0613','DWES','Desenvolupament web en entorn servidor',99,66),(45,2,2,11,'0614','DESPL','Desplegament d’aplicacions web',66,53),(46,2,2,12,'0615','INTER','Disseny d’interfícies web',66,66),(47,2,2,14,'1710','IPO2','Itinerari personal per a l\'ocupabilitat II',66,0),(48,2,2,15,'0616','PROJ','Projecte intermodular de desenvolupament d\'aplicacions web',198,0),(49,2,1,7,'S005','AD','Accés a dades',66,0),(51,1,1,17,'0369','ISO','Implantació de sistemes operatius',132,99),(52,1,2,16,'0379','PROJ','Projecte intermodular d\'administració de sistemes en xarxa',198,0),(53,6,1,9,'S002','AOFI','Ampliació ofimàtica',66,0);
/*!40000 ALTER TABLE `curr_moduls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudis`
--

DROP TABLE IF EXISTS `estudis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudis` (
  `id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `etapa` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudis`
--

LOCK TABLES `estudis` WRITE;
/*!40000 ALTER TABLE `estudis` DISABLE KEYS */;
INSERT INTO `estudis` VALUES ('ASIX','CFGS','Administració de Sistemes Informàtics en Xarxa'),('DAW','CFGS','Desenvolupament d\'Aplicacions Web'),('DViRV','CE','Desenvolupament de Videojocs i Realitat Virtual'),('IAiBD','CE','Intel·ligència Artificial i Big Data'),('IO','CFGB','Informàtica d\'Oficina'),('SMX','CFGM','Sistemes Microinformàtics i Xarxes');
/*!40000 ALTER TABLE `estudis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mat_matricules`
--

DROP TABLE IF EXISTS `mat_matricules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mat_matricules` (
  `idnum` int NOT NULL AUTO_INCREMENT,
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estat` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idioma` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idioma_nom` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lpd` tinyint NOT NULL,
  `email_contacte` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idalu` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `curriculum` int NOT NULL,
  `estudis` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `curs` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `curs_n` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ncurs` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `repetidor` tinyint DEFAULT NULL,
  `pendents` tinyint DEFAULT NULL,
  `grup_mat` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `grup_alt` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `autoritza_correus` tinyint DEFAULT NULL,
  `autoritza_paracetamol` tinyint DEFAULT NULL,
  `autoritza_orientacio` tinyint DEFAULT NULL,
  `autoritza_digital` tinyint DEFAULT NULL,
  `autoritza_imatge` tinyint DEFAULT NULL,
  `autoritza_cicles` tinyint DEFAULT NULL,
  `autoritza_sortides` tinyint DEFAULT NULL,
  `autoritza_enquestes` tinyint DEFAULT NULL,
  `utilitzacio_mobils_xarxes` tinyint DEFAULT NULL,
  `funcionament_aules_informatica` tinyint DEFAULT NULL,
  `prestec_portatils` tinyint DEFAULT NULL,
  `taller_informatica` tinyint DEFAULT NULL,
  `carta_compromis` tinyint DEFAULT NULL,
  `normativa_dual` tinyint DEFAULT NULL,
  `material` decimal(10,2) DEFAULT NULL,
  `preu_curs` decimal(10,2) DEFAULT NULL,
  `preu_modul` decimal(10,2) DEFAULT NULL,
  `moduls` int DEFAULT NULL,
  `preu_unitat` decimal(10,2) DEFAULT NULL,
  `unitats` int DEFAULT NULL,
  `unitats2` int DEFAULT NULL,
  `import` decimal(10,2) DEFAULT NULL,
  `bonifica` int DEFAULT NULL,
  `import_total` decimal(10,2) DEFAULT NULL,
  `dni_signatura` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom_signatura` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `carnet` tinyint DEFAULT NULL,
  PRIMARY KEY (`idalu`,`estudis`,`curs`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `idnum_UNIQUE` (`idnum`),
  KEY `fk_curr_idx` (`curriculum`),
  CONSTRAINT `fk_curr` FOREIGN KEY (`curriculum`) REFERENCES `curr_estudis` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_idalu` FOREIGN KEY (`idalu`) REFERENCES `alumnes` (`idalu`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=370 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mat_matricules`
--

LOCK TABLES `mat_matricules` WRITE;
/*!40000 ALTER TABLE `mat_matricules` DISABLE KEYS */;
/*!40000 ALTER TABLE `mat_matricules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mat_moduls`
--

DROP TABLE IF EXISTS `mat_moduls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mat_moduls` (
  `idmat` int NOT NULL,
  `idmodul` int NOT NULL,
  `matricula` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idmat`,`idmodul`),
  KEY `fk_modul_idx` (`idmodul`),
  CONSTRAINT `fk_mat` FOREIGN KEY (`idmat`) REFERENCES `mat_matricules` (`idnum`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_modul` FOREIGN KEY (`idmodul`) REFERENCES `curr_moduls` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mat_moduls`
--

LOCK TABLES `mat_moduls` WRITE;
/*!40000 ALTER TABLE `mat_moduls` DISABLE KEYS */;
/*!40000 ALTER TABLE `mat_moduls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuaris`
--

DROP TABLE IF EXISTS `usuaris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuaris` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `usuari` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Identificador',
  `actiu` tinyint DEFAULT NULL,
  `admin` tinyint DEFAULT NULL COMMENT 'Admin',
  `tipus` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tipus',
  `password` varchar(72) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Contrasenya',
  `dni` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'DNI',
  `nom` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nom',
  `cognoms` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Cognoms',
  `mail` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'E-mail',
  `naixement` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'D. naixement',
  `sexe` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Sexe',
  PRIMARY KEY (`id`),
  UNIQUE KEY `identificador_UNIQUE` (`usuari`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_usuaris_tipus` (`tipus`),
  CONSTRAINT `fk_usuaris_tipus` FOREIGN KEY (`tipus`) REFERENCES `usuaris_tipus` (`tipus`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuaris`
--

LOCK TABLES `usuaris` WRITE;
/*!40000 ALTER TABLE `usuaris` DISABLE KEYS */;
INSERT INTO `usuaris` VALUES (33,'psanchez@sapalomera.cat',1,1,'profe',NULL,NULL,'Pere','Sánchez',NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuaris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuaris_tipus`
--

DROP TABLE IF EXISTS `usuaris_tipus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuaris_tipus` (
  `tipus` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tipus',
  `descripcio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Descripció',
  PRIMARY KEY (`tipus`),
  UNIQUE KEY `tipus_UNIQUE` (`tipus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuaris_tipus`
--

LOCK TABLES `usuaris_tipus` WRITE;
/*!40000 ALTER TABLE `usuaris_tipus` DISABLE KEYS */;
INSERT INTO `usuaris_tipus` VALUES ('altres','Altres'),('alum','Alumnat'),('profe','Professorat'),('secre','Secretaria');
/*!40000 ALTER TABLE `usuaris_tipus` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-06 11:54:40
