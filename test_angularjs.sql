-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 31 Jan 2017 pada 11.33
-- Versi Server: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test_angularjs`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `login`
--

INSERT INTO `login` (`username`, `password`, `name`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3', 'Administrator\r\n');

-- --------------------------------------------------------

--
-- Struktur dari tabel `token`
--

CREATE TABLE IF NOT EXISTS `token` (
`id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `token` text NOT NULL,
  `created_at` datetime NOT NULL,
  `expired_at` datetime NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=246 ;

--
-- Dumping data untuk tabel `token`
--

INSERT INTO `token` (`id`, `username`, `token`, `created_at`, `expired_at`) VALUES
(214, 'admin', 'UNE3gGfJG0', '2016-05-06 08:38:52', '2016-05-07 08:38:52'),
(222, 'admin', 'NqlmqKgA67', '2016-05-06 08:45:36', '2016-05-07 08:45:36'),
(225, 'admin', '4xTLDaqnhX', '2016-05-06 09:31:55', '2016-05-07 09:31:55'),
(239, 'admin', 'ddQXF9A4px', '2016-05-06 10:24:47', '2016-05-07 10:24:47'),
(240, 'admin', 'Z8RjlD3aw1', '2016-05-07 12:05:56', '2016-05-08 12:05:56'),
(242, 'admin', 'Kl23HGf1qG', '2016-05-14 06:38:06', '2016-05-15 06:38:06'),
(243, 'admin', 'B0LFSXfrkr', '2016-05-14 13:45:09', '2016-05-15 13:45:09'),
(244, 'admin', 'rQU97Karuw', '2016-05-18 11:52:52', '2016-05-19 11:52:52'),
(245, 'admin', 'lMCfzAbEoV', '2016-05-18 18:43:15', '2016-05-19 18:43:15');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL,
  `nama` text NOT NULL,
  `kota` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `kota`) VALUES
(1, 'Toriq', 'Batu'),
(2, 'Alen', 'Tangerang'),
(3, 'Khilya', 'Batu'),
(4, 'Lucky', 'Gajelas'),
(5, 'alenovan', 'alenovan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `token`
--
ALTER TABLE `token`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=246;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
