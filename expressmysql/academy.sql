-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: academy
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `moviecategories`
--

CREATE DATABASE IF NOT EXISTS `Academy`;
USE `Academy`;

DROP TABLE IF EXISTS `moviecategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moviecategories` (
  `category` char(32) DEFAULT NULL,
  `categoryId` int unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`categoryId`),
  KEY `categoryId` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviecategories`
--

LOCK TABLES `moviecategories` WRITE;
/*!40000 ALTER TABLE `moviecategories` DISABLE KEYS */;
INSERT INTO `moviecategories` VALUES ('Comedy',1),('Action',2),('Thriller',3),('Adventure',4),('Drama',5);
/*!40000 ALTER TABLE `moviecategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `movieId` int unsigned NOT NULL AUTO_INCREMENT,
  `movieName` char(32) DEFAULT NULL,
  `plot` text,
  `categoryId` int unsigned DEFAULT NULL,
  `year` datetime NOT NULL,
  PRIMARY KEY (`movieId`),
  KEY `movieId` (`movieId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `moviecategories` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Lord of the rings','Four hobbits take a walk',4,'2001-01-01 00:00:00'),(2,'The two towers','Two hobbits continue to walk',4,'2002-01-01 00:00:00'),(3,'The return of the king','Two hobbits finally gets there',4,'2003-01-01 00:00:00'),(4,'Batman begins','A rich man in a black mask chases bad guys',2,'2005-01-01 00:00:00'),(5,'The dark knight','The Joker and Batman are having a good time',2,'2008-01-01 00:00:00');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-29 22:19:33
