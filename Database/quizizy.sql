-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2023 at 09:51 PM
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
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) DEFAULT NULL,
  `answerss` varchar(255) DEFAULT NULL,
  `correct_answers` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `answerss`, `correct_answers`) VALUES
(1, 'Amazon EC2 costs are billed on a monthly basis', 0),
(2, 'Users retain full administrative access to their Amazon EC2 instances.', 0),
(3, 'Amazon EC2 instances can be launched on demand when needed..', 1),
(4, 'Users can permanently run enough instances to handle peak workloads', 0),
(5, 'AWS Storage Gatewa', 0),
(6, 'AWS Database Migration Service (AWS DMS)', 1),
(7, 'Amazon EC2', 0),
(8, 'Amazon AppStream 2.0', 0),
(9, 'AWS Config', 0),
(10, 'AWS OpsWorks', 0),
(11, 'AWS SDK', 0),
(12, 'AWS Marketplace', 1),
(13, 'AWS Config', 0),
(14, 'Amazon Route 53', 0),
(15, 'AWS Direct Connect', 0),
(16, 'Amazon Virtual Private Cloud (Amazon VPC)', 1),
(17, 'Configuring third-party applications', 0),
(18, 'Maintaining physical hardware', 1),
(19, 'Securing application access and data', 0),
(20, 'Managing guest operating systems', 0),
(21, 'AWS Regions', 0),
(22, 'Edge locations', 1),
(23, 'Availability Zones', 0),
(24, 'Virtual Private Cloud (VPC)', 0),
(25, 'Use Amazon Cloud Directory', 0),
(26, 'Audit AWS Identity and Access Management (IAM) roles', 0),
(27, 'Enable multi-factor authentication', 1),
(28, 'Enable AWS CloudTrail', 0),
(29, 'AWS Trusted Advisor', 0),
(30, 'AWS CloudTrail', 1),
(31, 'AWS X-Ray', 0),
(32, 'AWS Identity and Access Management (AWS IAM)', 0),
(33, 'Amazon Simple Notification Service (Amazon SNS)', 1),
(34, 'AWS CloudTrail', 0),
(35, 'AWS Trusted Advisor', 0),
(36, 'Amazon Route 53', 0),
(37, 'AWS Trusted Advisor', 0),
(38, 'AWS Identity and Access Management (IAM)', 0),
(39, 'AWS Billing Console', 0),
(40, 'AWS Acceptable Use Policy', 1);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `questions` varchar(255) DEFAULT NULL,
  `justifications` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `questions`, `justifications`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying computeworkloads ?', ' C – The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load'),
(2, 'Which AWS service would simplify the migration of a database to AWS?', 'B – AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the databaseAWS DMScan migrate data to and from most widely used com'),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', ' D – AWS Marketplace is a digital catalog with thousands of software listings from independent softwarevendors that makes it easy to find, test, buy, and deploy software that runs on AWS.'),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', ' D – Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launchAWS resources in a virtual network that they define.'),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?\r\n', ' B – Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?\r\n', 'B – To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide.\r\n'),
(7, 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?', ' C – Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS ManagementConsole, they will be prompted for their username and pas'),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?\r\n', 'B – AAWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Manageme'),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'A – Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, p'),
(10, 'Where can a user find information about prohibited actions on the AWS infrastructure?\r\n', '      D – The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
