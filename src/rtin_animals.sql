-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2020 at 04:24 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db4164036`
--

-- --------------------------------------------------------

--
-- Table structure for table `rtin_animals`
--

DROP TABLE IF EXISTS `rtin_animals`;
CREATE TABLE `rtin_animals` (
  `id` bigint(20) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `female` tinyint(4) DEFAULT NULL,
  `name` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `title` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `summary` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vaccine` tinyint(4) DEFAULT NULL,
  `chip_number` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `chip_date` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `rtin_animals`
--

INSERT INTO `rtin_animals` (`id`, `type`, `female`, `name`, `birth_date`, `title`, `summary`, `text`, `image`, `vaccine`, `chip_number`, `chip_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, NULL, 'Marsik', '1994-05-21', 'Ut excepteur do duis ex duis', 'Sunt incididunt elit laborum elit. Incididunt elit ut dolor proident Lorem sunt elit ad. Dolor excepteur velit dolore pariatur dolore eiusmod officia Lorem.', 'Sint tempor in duis do aliquip aliquip esse deserunt ea. Irure reprehenderit excepteur ipsum sunt irure irure commodo. Veniam minim labore consectetur elit amet eu eu nulla eiusmod. Sit ut enim magna velit. Consequat esse id pariatur nostrud incididunt nisi consequat culpa tempor non. Dolor minim ut consequat tempor ad dolor laboris excepteur culpa.', 'https://cataas.com/cat', NULL, '276210005220036', NULL, '2020-11-05 16:12:30', '2020-11-05 16:12:30', NULL),
(2, 1, NULL, 'Mischka', '2010-02-17', 'Quis fugiat amet', 'Sint tempor in duis do aliquip aliquip esse deserunt ea. Irure reprehenderit excepteur ipsum sunt irure irure commodo. Veniam minim labore consectetur elit amet eu eu nulla eiusmod.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla atque similique, corrupti saepe deserunt illo a maiores dolorem nam odio sapiente maxime voluptatibus culpa temporibus aspernatur? Distinctio, illo voluptate!', 'https://cataas.com/cat?type=md', NULL, '276210002133569', NULL, '2020-11-05 16:12:30', '2020-11-05 16:12:30', NULL),
(3, 1, 1, 'Zlata', '2007-05-21', 'Eiusmod Lorem magna', 'Ullamco aute est aliqua deserunt. Commodo irure minim cupidatat reprehenderit ipsum sit deserunt. Sit ea commodo dolore qui mollit do aliqua pariatur.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias recusandae omnis! Fugiat laboriosam sapiente sint delectus quaerat, reprehenderit id excepturi doloribus mollitia eum at tempora! Sequi voluptates non nulla, saepe ipsam possimus impedit doloremque iste beatae, libero adipisci sint?', 'https://cataas.com/cat?filter=sepia', NULL, '276210002196075', NULL, '2020-11-05 16:12:30', '2020-11-05 16:12:30', NULL),
(4, 2, 1, 'Glascha', '2008-02-21', 'Consequat deserunt anim.', 'Cupidatat sit minim ex non nostrud irure quis voluptate nostrud dolore pariatur. Id ipsum cupidatat ad velit veniam magna velit sunt elit. Ad do fugiat est velit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla atque similique, corrupti saepe deserunt illo a maiores dolorem nam odio sapiente maxime voluptatibus culpa temporibus aspernatur? Distinctio, illo voluptate!', 'https://placedog.net/300', NULL, NULL, NULL, '2020-11-05 16:12:30', '2020-11-05 16:12:30', NULL),
(5, 1, 1, 'Marusja', '2007-05-21', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident saepe. Qui beatae nisi quaerat repudiandae. Earum unde debitis, error nesciunt deleniti rerum soluta beatae praesentium alias? Omnis, aliquid blanditiis!', 'Cillum do quis eiusmod eu consequat. Nostrud nulla qui excepteur fugiat eiusmod anim ut mollit enim. Eu aliqua non cupidatat exercitation culpa do eu ut amet eiusmod commodo eu magna velit. Dolor voluptate labore ut cupidatat dolor laboris excepteur proident sunt culpa minim commodo. Labore proident fugiat officia Lorem ullamco voluptate ut est dolore eiusmod elit non enim do. Fugiat sit non mollit eiusmod quis minim tempor sint fugiat ullamco dolore occaecat nisi veniam.', 'https://placekitten.com/300/300', NULL, NULL, NULL, '2020-11-05 16:12:30', '2020-11-05 16:12:30', NULL),
(6, 2, NULL, 'Timoty', '2004-08-14', 'Est non qui totam ', 'Dolor labore consectetur anim enim. Elit excepteur cupidatat exercitation reprehenderit. Sint consequat voluptate ex ad non in excepteur do et. Duis culpa ut eu aliqua sunt sunt nostrud ullamco fugiat. Amet ipsum occaecat id officia reprehenderit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a dolores maiores ullam quisquam, iure voluptatum dicta fugiat assumenda et aut quos esse voluptatibus hic saepe. Quae, rem. A repellendus adipisci suscipit corrupti perspiciatis eos hic asperiores vel, autem molestiae optio, voluptate provident.', 'https://placedog.net/300/?random', NULL, NULL, NULL, '2020-11-05 16:12:30', '2020-11-05 16:12:30', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rtin_animals`
--
ALTER TABLE `rtin_animals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chipNummer` (`chip_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rtin_animals`
--
ALTER TABLE `rtin_animals`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
