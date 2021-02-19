-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 18, 2021 at 11:54 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guiapress`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `slug`, `body`, `createdAt`, `updatedAt`, `categoryId`) VALUES
(4, 'Fdd', 'Fdd', '<p>Ddd</p>\r\n<p>&nbsp;</p>\r\n<p>oooppp</p>', '2021-02-08 19:56:37', '2021-02-09 19:25:10', 5),
(5, 'DdDDDD', 'DdDDDD', '<p>Ddddqqqqq</p>', '2021-02-08 20:01:25', '2021-02-09 19:28:01', 1),
(6, 'Ggsgd', 'Ggsgd', '<p>Gdgdvvx <strong>hshxhdb</strong> hdhxhdbd</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', '2021-02-08 22:54:04', '2021-02-08 22:54:04', 6),
(7, 'Ggsgd', 'Ggsgd', '<p>Gdgdvvx <strong>hshxhdb</strong> hdhxhdbd</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', '2021-02-08 23:01:02', '2021-02-08 23:01:02', 6),
(8, 'zzzzzzzz', 'zzzzzzzz', '<p>Gdgdvvx <strong>hshxhdb</strong> hdhxhdbd</p>\r\n<p>&nbsp;</p>\r\n<p><img src=\"https://images-na.ssl-images-amazon.com/images/I/5197X9MoxZL._AC_SX425_.jpg\" width=\"178\" height=\"226\" /> teexo ao lado</p>\r\n<p>texto embaixo</p>\r\n<table border=\"1\">\r\n<tbody>\r\n<tr>\r\n<td>oi&nbsp;</td>\r\n<td>blau</td>\r\n<td>pimba</td>\r\n</tr>\r\n<tr>\r\n<td>1</td>\r\n<td>2</td>\r\n<td>3</td>\r\n</tr>\r\n<tr>\r\n<td>3</td>\r\n<td>5</td>\r\n<td>3</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p>dsadsadas</p>', '2021-02-09 14:13:03', '2021-02-09 19:23:25', 5);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, 'Desenvolvimento de softwareg', 'Desenvolvimento-de-software', '2021-02-08 12:15:25', '2021-02-08 15:53:12'),
(5, 'Pimba blauhhx', 'Pimba-blauhhx', '2021-02-08 15:19:05', '2021-02-08 15:55:13'),
(6, 'Desenvolvimento de software2', 'Desenvolvimento-de-software2', '2021-02-08 15:46:07', '2021-02-08 15:46:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'a@b.com.br', '$2b$10$7ezfYd.t.nq1qnDLXa82vuYr49yjly0LDpt2lteBMb95M9EL.0nnW', '2021-02-10 00:19:54', '2021-02-10 00:19:54'),
(2, 'a@a.com.br', '$2b$10$jV9mcD1flpTx0FdwxpqtueSNuDaGHapebNRF89KklnKLWCRhl1/3u', '2021-02-10 07:50:16', '2021-02-10 07:50:16'),
(3, 'a@a', '$2b$10$68IPQOIbsIEKH8eFOwijve6WbGqOnomR3fU3EnxMjjmzDgQ18cCOO', '2021-02-10 08:45:06', '2021-02-10 08:45:06'),
(4, 'b@b.com.br', '$2b$10$FuJ2pzgs7mNneY.nRLE86e7gUcz4QUeNIDDaMANNyw6a7aXxOqKYG', '2021-02-10 08:45:45', '2021-02-10 08:45:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
