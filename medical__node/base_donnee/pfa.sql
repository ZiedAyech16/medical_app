-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mar. 29 mars 2022 à 16:39
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pfa`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `prenom` text NOT NULL,
  `email` text NOT NULL,
  `contact` int(11) NOT NULL,
  `password` varchar(40) NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `email`, `contact`, `password`, `username`) VALUES
(1, 'fdcvhg', 'jvhgjvh', 'jhvh', 1245252, 'hgvhg', 'vjjhvj'),
(2, 'zied', 'ayech', 'zied@hotmail.fr', 124545, '1111', 'zied4545'),
(3, 'zied', 'ayech', 'zied@hotmail.fr', 124545, '1111', 'zied4545'),
(4, 'user.nom', 'user.prenom', 'user.email', 0, 'user.password', 'user.username'),
(5, 'user.nom', 'user.prenom', 'user.email', 0, 'user.password', 'user.username'),
(6, 'guyfg', 'bfuhjdbhj', 'vghjvgjh@', 5645, 'kbnkj', 'kjnkjk'),
(7, 'guyfg', 'bfuhjdbhj', 'vghjvgjh@', 5645, 'kbnkj', 'kjnkjk'),
(8, 'guyfg', 'bfuhjdbhj', 'vghjvgjh@', 5645, 'kbnkj', 'kjnkjk'),
(9, 'guyfg', 'bfuhjdbhj', 'vghjvgjh@', 5645, 'kbnkj', 'kjnkjk'),
(10, 'guyfg', 'bfuhjdbhj', 'vghjvgjh@', 5645, 'kbnkj', 'kjnkjk'),
(11, 'zied', 'httyh', 'ayechzied999@gmail.com', 311516, 'lnll', ',lkgn,kl');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
