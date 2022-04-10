-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : dim. 10 avr. 2022 à 23:04
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
-- Structure de la table `medecins`
--

CREATE TABLE `medecins` (
  `id` int(11) NOT NULL,
  `num_order` varchar(255) DEFAULT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `medecins`
--

INSERT INTO `medecins` (`id`, `num_order`, `specialite`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, '25252', 'dfdffffffff', '2022-04-10 14:33:27', '2022-04-10 16:37:54', 1),
(2, '5', 'psi', '2022-04-10 14:33:57', '2022-04-10 19:18:51', 1);

-- --------------------------------------------------------

--
-- Structure de la table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `patients`
--

INSERT INTO `patients` (`id`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, '2022-04-10 13:33:27', '2022-04-10 13:33:27', 1),
(2, '2022-04-10 11:35:11', '2022-04-10 11:35:11', NULL),
(3, '2022-04-10 11:35:24', '2022-04-10 11:35:24', NULL),
(4, '2022-04-10 11:44:44', '2022-04-10 19:26:13', 1),
(5, '2022-04-10 11:46:47', '2022-04-10 19:27:07', 2),
(6, '2022-04-10 11:48:16', '2022-04-10 11:48:16', 2);

-- --------------------------------------------------------

--
-- Structure de la table `rdvs`
--

CREATE TABLE `rdvs` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MedecinId` int(11) DEFAULT NULL,
  `PatientId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `rdvs`
--

INSERT INTO `rdvs` (`id`, `date`, `createdAt`, `updatedAt`, `MedecinId`, `PatientId`) VALUES
(2, '2022-12-01 23:00:00', '2022-04-10 18:42:58', '2022-04-10 18:42:58', 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `secretaires`
--

CREATE TABLE `secretaires` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `secretaires`
--

INSERT INTO `secretaires` (`id`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, '2022-04-10 20:57:18', '2022-04-10 20:57:18', 2),
(2, '2022-04-10 20:57:21', '2022-04-10 20:57:21', 2),
(3, '2022-04-10 20:57:25', '2022-04-10 20:57:25', 1);

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
(9, 'jjjjjjjjjjjjjjjj', 'bfuhjdbhjfgfgfgfgfgfg', '1f32g153fgjh@', 564545646, 'uuuuuuuuuuuuuuuuuuuuuu', 'tttttttttttttttttt'),
(11, 'zied', 'httyh', 'ayechzied999@gmail.com', 311516, 'lnll', ',lkgn,kl');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `contact`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'zied', 'ayech', 'zied44@', 11444444, 'zied14', '1111', '2022-04-10 13:32:36', '2022-04-10 13:32:36'),
(2, 'safa', 'ayech', '', 8522222, 'safa14', '1111', '2022-04-10 13:32:36', '2022-04-10 13:32:36');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `medecins`
--
ALTER TABLE `medecins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Index pour la table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Index pour la table `rdvs`
--
ALTER TABLE `rdvs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MedecinId` (`MedecinId`),
  ADD KEY `PatientId` (`PatientId`);

--
-- Index pour la table `secretaires`
--
ALTER TABLE `secretaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `medecins`
--
ALTER TABLE `medecins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `rdvs`
--
ALTER TABLE `rdvs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `secretaires`
--
ALTER TABLE `secretaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `medecins`
--
ALTER TABLE `medecins`
  ADD CONSTRAINT `medecins_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `rdvs`
--
ALTER TABLE `rdvs`
  ADD CONSTRAINT `rdvs_ibfk_1` FOREIGN KEY (`MedecinId`) REFERENCES `medecins` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `rdvs_ibfk_2` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `secretaires`
--
ALTER TABLE `secretaires`
  ADD CONSTRAINT `secretaires_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
