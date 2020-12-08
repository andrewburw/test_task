-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 20 2020 г., 14:49
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `dbproduct`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(10) NOT NULL,
  `size` int(4) DEFAULT NULL,
  `height` int(4) DEFAULT NULL,
  `width` int(4) DEFAULT NULL,
  `length` int(4) DEFAULT NULL,
  `weight` int(4) DEFAULT NULL,
  `productType` varchar(23) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `price`, `size`, `height`, `width`, `length`, `weight`, `productType`) VALUES
(180, 'TR120555', 'Chair', 40, NULL, 24, 45, 15, NULL, 'Furniture'),
(181, 'TR120556', 'chair', 40, NULL, 23, 45, 15, NULL, 'Furniture'),
(182, 'TR120558', 'Chair', 40, NULL, 24, 45, 15, NULL, 'Furniture'),
(183, 'TR120666', 'Chair', 41, NULL, 24, 45, 15, NULL, 'Furniture'),
(184, 'GGWP0007', 'War and Peace', 20, NULL, NULL, NULL, NULL, 2, 'Weight'),
(185, 'GGWP0010', 'War and Peace', 20, NULL, NULL, NULL, NULL, 5, 'Weight'),
(186, 'GGWP0024', 'War and Peace', 12, NULL, NULL, NULL, NULL, 12, 'Weight'),
(188, 'GGWP0023', 'War and Peace', 15, NULL, NULL, NULL, NULL, 1, 'Weight'),
(189, 'JVC200123', 'Acme DISC', 1, 700, NULL, NULL, NULL, NULL, 'Disc'),
(190, 'JVC200124', 'Acme DISC', 1, 700, NULL, NULL, NULL, NULL, 'Disc'),
(191, 'JVC200134', 'Acme DISC', 2, 900, NULL, NULL, NULL, NULL, 'Disc'),
(192, 'JVC200200', 'Acme DISC', 1, 700, NULL, NULL, NULL, NULL, 'Disc');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
