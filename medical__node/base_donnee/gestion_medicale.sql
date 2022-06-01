-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mer. 01 juin 2022 à 10:16
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
-- Base de données : `gestion_medicale`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `calenders`
--

CREATE TABLE `calenders` (
  `id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MedecinId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `calenders`
--

INSERT INTO `calenders` (`id`, `date`, `createdAt`, `updatedAt`, `MedecinId`) VALUES
(1, '2022-04-05 13:07:19', '2022-05-20 11:13:55', '2022-05-20 11:13:55', NULL),
(2, '2022-04-05 13:07:19', '2022-05-20 11:14:20', '2022-05-20 11:14:20', NULL),
(3, '2022-05-11 13:07:19', '2022-05-20 11:20:26', '2022-05-20 11:20:26', 1),
(4, '2022-05-03 07:46:16', '2022-05-20 12:46:29', '2022-05-20 12:46:29', 1),
(5, '2022-05-06 19:54:23', '2022-05-20 14:54:39', '2022-05-20 14:54:39', 1),
(6, '2022-05-18 00:07:23', '2022-05-20 15:03:31', '2022-05-20 15:03:31', 1),
(7, '2022-05-20 17:55:58', '2022-05-20 18:04:18', '2022-05-20 18:04:18', 1),
(8, '2022-05-20 18:40:43', '2022-05-20 18:40:51', '2022-05-20 18:40:51', 1),
(9, '2022-05-20 18:42:58', '2022-05-20 18:43:05', '2022-05-20 18:43:05', 1),
(10, '2022-05-20 21:43:15', '2022-05-20 21:43:26', '2022-05-20 21:43:26', 1),
(11, '2022-05-21 13:29:27', '2022-05-21 21:29:43', '2022-05-21 21:29:43', 1),
(12, '2022-05-22 20:30:52', '2022-05-21 21:31:04', '2022-05-21 21:31:04', 1),
(13, '2022-05-22 17:37:00', '2022-05-22 17:37:04', '2022-05-22 17:37:04', 1),
(14, '2022-05-15 17:37:17', '2022-05-22 17:37:24', '2022-05-22 17:37:24', 1),
(15, '2022-05-24 19:40:23', '2022-05-22 17:40:32', '2022-05-22 17:40:32', 1),
(16, '2022-05-24 19:40:23', '2022-05-22 17:40:35', '2022-05-22 17:40:35', 7),
(17, '2022-05-23 19:49:18', '2022-05-22 19:49:26', '2022-05-22 19:49:26', 1),
(18, '2022-05-18 19:49:18', '2022-05-22 19:49:48', '2022-05-22 19:49:48', 1),
(19, '2022-05-22 20:03:13', '2022-05-22 20:03:46', '2022-05-22 20:03:46', 2),
(20, '2022-05-22 20:05:22', '2022-05-22 20:05:25', '2022-05-22 20:05:25', 2),
(21, '2022-05-18 14:05:22', '2022-05-22 20:05:35', '2022-05-22 20:05:35', 2),
(22, '2022-05-24 11:15:41', '2022-05-23 09:16:26', '2022-05-23 09:16:26', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `fichepatients`
--

CREATE TABLE `fichepatients` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `hour` varchar(255) DEFAULT NULL,
  `jour` varchar(255) DEFAULT NULL,
  `month` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MedecinId` int(11) DEFAULT NULL,
  `PatientId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `fichepatients`
--

INSERT INTO `fichepatients` (`id`, `nom`, `prenom`, `contact`, `age`, `sexe`, `hour`, `jour`, `month`, `year`, `createdAt`, `updatedAt`, `MedecinId`, `PatientId`) VALUES
(6, 'amar', 'ahmad', 24555888, 38, 'Femme', '17', '13', '10', '2008', '2022-05-22 16:22:03', '2022-05-22 16:22:03', 1, 1),
(7, 'amar', 'ahmad', 24555888, 38, 'Homme', '20', '29', '10', '2007', '2022-05-22 16:25:11', '2022-05-22 16:25:11', 1, NULL),
(8, 'aziz', 'yahya', 45555555, 21, 'Femme', '0', '13', '10', '2004', '2022-05-22 17:45:15', '2022-05-22 17:45:15', 2, NULL),
(9, 'zied', 'fbgjhfj', 75886, 45, 'Femme', '13', '13', '10', '2024', '2022-05-23 09:19:36', '2022-05-23 09:19:36', 1, NULL);

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
(1, '14', 'dentiste', '2022-05-19 18:27:37', '2022-05-30 11:22:24', NULL),
(2, '47', 'dentiste', '2022-05-19 16:38:14', '2022-05-19 16:38:14', 7),
(3, '45', 'Cardiologists', '2022-05-19 20:40:15', '2022-05-30 11:27:24', NULL),
(4, '270', 'gynecologists', '2022-05-22 16:30:17', '2022-05-30 12:31:33', 8),
(5, '27', 'Cardiologists', '2022-05-22 16:31:06', '2022-05-22 16:31:06', NULL),
(6, '27', 'Cardiologists', '2022-05-22 16:31:15', '2022-05-22 16:31:15', 7),
(7, '18', 'cardiologists', '2022-05-22 16:53:54', '2022-05-22 16:53:54', 10),
(8, '94', 'Allergists', '2022-05-22 17:33:19', '2022-05-30 12:29:40', 17),
(9, '45', 'dentiste', '2022-05-23 09:15:10', '2022-05-23 09:15:10', 18);

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
(1, '2022-05-19 23:56:53', '2022-05-19 23:56:53', 2);

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
(2, '2022-05-19 23:57:11', '2022-05-19 23:57:11', '2022-05-19 23:57:11', 2, 1),
(3, '2022-05-20 00:09:09', '2022-05-20 00:09:09', '2022-05-20 00:09:09', 2, 1),
(4, '2022-05-20 11:45:39', '2022-05-21 11:45:39', '2022-05-21 11:45:39', 3, 1);

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
(1, '2022-05-19 16:16:09', '2022-05-19 16:16:09', 6),
(2, '2022-05-19 16:16:13', '2022-05-19 16:16:13', 6),
(3, '2022-05-22 17:27:07', '2022-05-22 17:27:07', 16);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `age`, `email`, `contact`, `username`, `password`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'aaaa', 'bbbb', '12', 'nnnnn', 13165, 'ijnj@', 'kk', 'image-1652973600503.png', '2022-05-19 09:58:40', '2022-05-19 09:58:40'),
(2, 'zied', 'fbgjhfj', '45', 'ayechzied999@gmail.com', 75886, 'cfkdbkj', 'bkjbj', 'image-1652973600503.png', '2022-05-19 15:20:05', '2022-05-19 15:20:05'),
(3, 'zied', 'qqqqq', '12', 'ayechzied888@gmail.comhgj', 1313, '156', '5415', 'image-1652976212605.jpeg', '2022-05-19 16:03:32', '2022-05-19 16:03:32'),
(4, 'zied', 'qqqqq', '12', 'ayechzied777@gmail.comhgj', 1313, '156', '5415', 'image-1652976471208.jpeg', '2022-05-19 16:07:51', '2022-05-19 16:07:51'),
(5, 'zied12', 'jjjjjjjjjjjj', '12', 'ayechzied666@gmail.comhgj', 1313, '156', '5415', 'image-1652976699808.jpeg', '2022-05-19 16:11:39', '2022-05-19 16:11:39'),
(6, 'zied', 'httyh', '54156415', 'ayechzied555@gmail.com', 4545, 'jhytj', 'jyjuy', 'image-1652976966360.jpeg', '2022-05-19 16:16:06', '2022-05-19 16:16:06'),
(7, 'zied', 'httyh', '64', 'ayechzied444@gmail.com', 45454, '545', '454', 'image-1652978281989.jpeg', '2022-05-19 16:38:03', '2022-05-19 16:38:03'),
(8, 'amar', 'ahmad', '38', 'amar@hotmail.com', 24555888, 'amar14', 'amar', 'image-1652992800191.jpeg', '2022-05-19 20:40:00', '2022-05-19 20:40:00'),
(9, 'zied', 'bhbh', '454', 'hjbhjbhj', 4646, '545', '545', 'image-1653238269506.jpeg', '2022-05-22 16:51:10', '2022-05-22 16:51:10'),
(10, 'sami', 'ahmed', '15', 'sami18@gmail.com', 245558887, 'sami45', 'sami', 'image-1653238418049.jpeg', '2022-05-22 16:53:38', '2022-05-22 16:53:38'),
(11, 'moez', 'ali', '23', 'moez8@gmail.com', 87555511, 'moeez45', 'moez', 'image-1653238720257.png', '2022-05-22 16:58:40', '2022-05-22 16:58:40'),
(12, 'moez', 'ali', '23', 'moez8@gmail.com', 87555511, 'moeez45', 'moez', 'image-1653238739646.png', '2022-05-22 16:59:00', '2022-05-22 16:59:00'),
(13, 'moez', 'ali', '23', 'moez8@gmail.com', 87555511, 'moeez45', 'moez', 'image-1653238792635.png', '2022-05-22 16:59:53', '2022-05-22 16:59:53'),
(14, 'ahmed', 'mohamed', '25', 'ahmed@gmail.fr', 25888888, 'ahmed14', 'ahmed', 'image-1653239017300.png', '2022-05-22 17:03:37', '2022-05-22 17:03:37'),
(15, 'ahmed', 'mohamed', '25', 'ahmed@gmail.fr', 25888888, 'ahmed14', 'ahmed', 'image-1653239282485.png', '2022-05-22 17:08:03', '2022-05-22 17:08:03'),
(16, 'ahmed', 'mohamed', '25', 'ahmed@gmail.fr', 25888888, 'ahmed14', 'ahmed', 'image-1653239341157.png', '2022-05-22 17:09:01', '2022-05-22 17:09:01'),
(17, 'aziz', 'yahya', '21', 'aziz44@hotmail.fr', 45555555, 'azizy5', 'aziz', 'image-1653240546089.jpeg', '2022-05-22 17:29:07', '2022-05-22 17:29:07'),
(18, 'ahmed', 'ahmed44', '38', 'ahmed16@gmail.com', 225556666, 'ahmed12', 'ahmed', 'image-1653297283461.jpeg', '2022-05-23 09:14:43', '2022-05-23 09:14:43');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Index pour la table `calenders`
--
ALTER TABLE `calenders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MedecinId` (`MedecinId`);

--
-- Index pour la table `fichepatients`
--
ALTER TABLE `fichepatients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MedecinId` (`MedecinId`),
  ADD KEY `PatientId` (`PatientId`);

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
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `calenders`
--
ALTER TABLE `calenders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `fichepatients`
--
ALTER TABLE `fichepatients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `medecins`
--
ALTER TABLE `medecins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `rdvs`
--
ALTER TABLE `rdvs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `secretaires`
--
ALTER TABLE `secretaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `calenders`
--
ALTER TABLE `calenders`
  ADD CONSTRAINT `calenders_ibfk_1` FOREIGN KEY (`MedecinId`) REFERENCES `medecins` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `fichepatients`
--
ALTER TABLE `fichepatients`
  ADD CONSTRAINT `fichepatients_ibfk_1` FOREIGN KEY (`MedecinId`) REFERENCES `medecins` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fichepatients_ibfk_2` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
