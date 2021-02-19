-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 18, 2021 at 11:56 AM
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
-- Database: `apiusers`
--

-- --------------------------------------------------------

--
-- Table structure for table `passwordtokens`
--

CREATE TABLE `passwordtokens` (
  `id` int(11) UNSIGNED NOT NULL,
  `token` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `used` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'william', 'a@a.com.br', '123456', 0),
(3, 'william', 'a2@a.com.br', '123456', 0),
(5, 'william', 'a3@a.com.br', '123456', 0),
(6, 'william', 'a4@a.com.br', '$2b$10$OizDmtZdNnwJFf1M4EAw/eUBwvjRqcCDBaQ9PBJbm2rzslxzLnUzS', 0),
(8, 'william', 'a5@a.com.br', '$2b$10$rXaQ5JcOJrLio5X9VK3Fnee5iE1mP.Nz26am72XyDI2sxQiPYoWpq', 0),
(9, 'william2', 'a6@a.com.br', '$2b$10$kc/I78zIgUUZA.1efLI1YO59p7ycRzO2C3HWI6ruT2VCHoSiL3CIi', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `passwordtokens`
--
ALTER TABLE `passwordtokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `passwordtokens`
--
ALTER TABLE `passwordtokens`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
