-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2023 at 09:38 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizizy`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `correct_id` int(11) NOT NULL,
  `correct_answer` varchar(255) NOT NULL,
  `justifications` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `correct_id`, `correct_answer`, `justifications`) VALUES
(1, 3, 'Amazon EC2 instances can be launched on demand when needed..', ' C - The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload.'),
(2, 2, 'AWS Database Migration Service (AWS DMS)', '  B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the databaseAWS DMScan migrate data to and from most widely used c'),
(3, 3, 'AWS Marketplace', ' D - AWS Marketplace is a digital catalog with thousands of software listings from independent softwarevendors that makes it easy to find, test, buy, and deploy software that runs on AWS.'),
(4, 4, 'Amazon Virtual Private Cloud (Amazon VPC)', ' D - Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launchAWS resources in a virtual network that they define.'),
(5, 2, 'Maintaining physical hardware', '  B - Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'),
(6, 2, 'Edge locations', ' B - To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide. '),
(7, 3, 'Enable multi-factor authentication', ' C ? Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS ManagementConsole, they will be prompted for their username and pas'),
(8, 2, 'AWS CloudTrail', ' B - AAWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Managem'),
(9, 1, 'AWS CloudTrail', ' A - Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, '),
(10, 4, 'AWS Acceptable Use Policy', 'D - The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. ');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `score`) VALUES
(1, 12),
(2, 13),
(3, 13),
(4, 15),
(5, 0),
(6, 20),
(7, 0),
(8, 0),
(9, 50),
(10, 50),
(11, 60),
(12, 10),
(13, 30),
(14, 10),
(15, 30),
(16, 10),
(17, 0),
(18, 0),
(19, 0),
(20, 0),
(21, 0),
(22, 0),
(23, 0),
(24, 0),
(25, 0),
(26, 0),
(27, 0),
(28, 0),
(29, 0),
(30, 0),
(31, 0),
(32, 0),
(33, 0),
(34, 0),
(35, 0),
(36, 0),
(37, 0),
(38, 0),
(39, 0),
(40, 0),
(41, 10),
(42, 10),
(43, 10),
(44, 10),
(45, 10),
(46, 10),
(47, 10),
(48, 10),
(49, 10),
(50, 10),
(51, 10),
(52, 10),
(53, 10),
(54, 10),
(55, 10),
(56, 10),
(57, 10),
(58, 10),
(59, 10),
(60, 10),
(61, 10),
(62, 10),
(63, 10),
(64, 10),
(65, 10),
(66, 10),
(67, 10),
(68, 10),
(69, 10),
(70, 10),
(71, 10),
(72, 10),
(73, 10),
(74, 10),
(75, 10),
(76, 10),
(77, 10),
(78, 10),
(79, 10),
(80, 10),
(81, 10),
(82, 10),
(83, 10),
(84, 10),
(85, 10),
(86, 10),
(87, 10),
(88, 10),
(89, 10),
(90, 10),
(91, 10),
(92, 10),
(93, 10),
(94, 0),
(95, 30),
(96, 0),
(97, 0),
(98, 30),
(99, 10),
(100, 30),
(101, 20),
(102, 10),
(103, 30),
(104, 50),
(105, 0),
(106, 30),
(107, 30),
(108, 20),
(109, 30),
(110, 0),
(111, 0),
(112, 0),
(113, 0),
(114, 0),
(115, 0),
(116, 0),
(117, 0),
(118, 0),
(119, 0),
(120, 30),
(121, 20),
(122, 20),
(123, 30),
(124, 0),
(125, 20),
(126, 0),
(127, 0),
(128, 0),
(129, 0),
(130, 0),
(131, 0),
(132, 0),
(133, 0),
(134, 40),
(135, 50),
(136, 50),
(137, 30),
(138, 40),
(139, 40),
(140, 10),
(141, 40),
(142, 40),
(143, 50),
(144, 0),
(145, 0),
(146, 0),
(147, 0),
(148, 0),
(149, 0),
(150, 0),
(151, 20),
(152, 0),
(153, 30),
(154, 30),
(155, 0),
(156, 0),
(157, 0),
(158, 0),
(159, 0),
(160, 0),
(161, 0),
(162, 0),
(163, 0),
(164, 0),
(165, 0),
(166, 0),
(167, 0),
(168, 0),
(169, 0),
(170, 0),
(171, 0),
(172, 0),
(173, 0),
(174, 0),
(175, 0),
(176, 0),
(177, 0),
(178, 0),
(179, 0),
(180, 0),
(181, 0),
(182, 0),
(183, 0),
(184, 0),
(185, 0),
(186, 0),
(187, 0),
(188, 0),
(189, 0),
(190, 0),
(191, 0),
(192, 0),
(193, 0),
(194, 0),
(195, 0),
(196, 0),
(197, 0),
(198, 0),
(199, 0),
(200, 0),
(201, 0),
(202, 0),
(203, 0),
(204, 0),
(205, 0),
(206, 0),
(207, 0),
(208, 0),
(209, 0),
(210, 0),
(211, 30),
(212, 40);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `questions` varchar(255) DEFAULT NULL,
  `answer1` varchar(255) NOT NULL,
  `answer2` varchar(255) NOT NULL,
  `answer3` varchar(255) NOT NULL,
  `answer4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `questions`, `answer1`, `answer2`, `answer3`, `answer4`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying computeworkloads ?', 'Amazon EC2 costs are billed on a monthly basis', 'Users retain full administrative access to their Amazon EC2 instances.', 'Amazon EC2 instances can be launched on demand when needed..', 'Users can permanently run enough instances to handle peak workloads'),
(2, 'Which AWS service would simplify the migration of a database to AWS?', 'AWS Storage Gatewa', 'AWS Database Migration Service (AWS DMS)', 'Amazon EC2', 'Amazon AppStream 2.0'),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', 'AWS Config', 'AWS OpsWorks', 'AWS SDK', 'AWS Marketplace'),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', 'AWS Config', 'Amazon Route 53', 'AWS Direct Connect', 'Amazon Virtual Private Cloud (Amazon VPC)'),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?\r\n', 'Configuring third-party applications', 'Maintaining physical hardware', 'Securing application access and data', 'Managing guest operating systems'),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?\r\n', 'AWS Regions', 'Edge locations', 'Availability Zones', 'Virtual Private Cloud (VPC)'),
(7, 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?', 'Use Amazon Cloud Directory', 'Audit AWS Identity and Access Management (IAM) roles', 'Enable multi-factor authentication', 'Enable AWS CloudTrail'),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?\r\n', 'AWS Trusted Advisor', 'AWS CloudTrail', 'AWS X-Ray', 'AWS Identity and Access Management (AWS IAM)'),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'Amazon Simple Notification Service (Amazon SNS)', 'AWS CloudTrail', 'AWS Trusted Advisor', 'Amazon Route 53'),
(10, 'Where can a user find information about prohibited actions on the AWS infrastructure?\r\n', 'AWS Trusted Advisor', 'AWS Identity and Access Management (IAM)', 'AWS Billing Console', 'AWS Acceptable Use Policy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
