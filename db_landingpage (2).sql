-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 21, 2021 lúc 08:41 PM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_landingpage`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `campaigns`
--

CREATE TABLE `campaigns` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `campaigns`
--

INSERT INTO `campaigns` (`id`, `name`, `content`, `created_at`, `updated_at`) VALUES
(1, 'ITraisesIT', 'IT raises IT is a crowdfunding program to join forces with PNV so that the project of building technology for future information technology engineers can continue in the future.This is a very difficult part.', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `corporate_partner`
--

CREATE TABLE `corporate_partner` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `year-partner` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discovers`
--

CREATE TABLE `discovers` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `day` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discovers`
--

INSERT INTO `discovers` (`id`, `title`, `day`, `image`, `content`, `created_at`, `updated_at`) VALUES
(2, 'I chose to say no', '13 May 2021', 'discover1.jpg', 'H. was born and raised in a mountainous area in Hung Hoa district, Quang Tri province. She is from the Van Kieu ethnic group. H.’s family includes her parents, 2 brothers, 3 younger sisters. They are farmers and have to depend on the field of cassava for ', NULL, NULL),
(3, 'Blossom in the storm', '5 May 2021 | News, Vietnam', 'discover2.jpg', 'Born and raised in Da Nang city, from a young age, Q. was self-conscious of her own situation. Separated parents, Q. lived with her mother, sister, and a half-brother from a young age. The young girl’s family only relies on her mother’s meager salary of j', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donaters`
--

CREATE TABLE `donaters` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `donaters`
--

INSERT INTO `donaters` (`id`, `name`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'Hoa', 'hoa.le22@student.passerellesnumeriques.org', '0333587611', NULL, NULL),
(2, 'h', 'h@gmail.com', '546545', '2021-07-16 19:37:13', '2021-07-16 19:37:13'),
(3, 'h', 'jason@gmail.com', '5454547545f7667', '2021-07-16 19:43:06', '2021-07-16 19:43:06'),
(4, 'h', 'hoahhh@gmail.com', '16548656132', '2021-07-16 19:59:22', '2021-07-16 19:59:22'),
(5, 'lu', 'lu.ho22@student.passerellesnumeriques.org', '0544878545', '2021-07-16 20:44:36', '2021-07-16 20:44:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `describe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` year(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `events`
--

INSERT INTO `events` (`id`, `name`, `describe`, `year`, `created_at`, `updated_at`) VALUES
(1, 'play', 's11', 2121, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `leaders`
--

CREATE TABLE `leaders` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `leaders`
--

INSERT INTO `leaders` (`id`, `name`, `job`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Oanh Huynh', 'External Relations Manager', 'oanhhuynh.png', NULL, NULL),
(2, 'Thanh Doan', 'Selection Manager', 'thanhdoan.png', NULL, NULL),
(3, 'Ngoc Chau', 'Education Manager', 'ngocchau.png', NULL, NULL),
(4, 'Trang Vo', 'Country Representative', 'trangvo.png', NULL, NULL),
(5, 'Lucas Sinrod', 'Training and IT Manager', 'lucas.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_07_16_140233_create_donaters_table', 2),
(5, '2021_07_16_140613_create_partners_table', 2),
(6, '2021_07_16_140750_create_discovers_table', 2),
(7, '2021_07_16_140935_create_campaigns_table', 2),
(8, '2021_07_16_141203_create_sharing_table', 2),
(9, '2021_07_16_141444_create_leaders_table', 2),
(10, '2021_07_19_135258_create_selections_table', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `partners`
--

CREATE TABLE `partners` (
  `id` int(10) UNSIGNED NOT NULL,
  `namecompany` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `partners`
--

INSERT INTO `partners` (`id`, `namecompany`, `image`, `created_at`, `updated_at`) VALUES
(1, 'JPMorgan', 'JPMorgan_partner.jpg', NULL, NULL),
(2, 'pycogroup', 'pycogroup_partner.png', NULL, NULL),
(3, 'thales', 'thales_partner.jpg', NULL, NULL),
(4, 'danavtc', 'danavtc_partner.png', NULL, NULL),
(5, 'enouvo', 'enouvo_partner.png', NULL, NULL),
(6, 'kms', 'kms_partner.png', NULL, NULL),
(7, 'laidon', 'laidon_partner.png', NULL, NULL),
(8, 'lekhanh', 'lekhanh_partner.png', NULL, NULL),
(9, 'linkbynet', 'linkbynet_partner.png', NULL, NULL),
(10, 'blance', 'blance_partner.png', NULL, NULL),
(11, 'amanjaya', 'amanjaya_partner.png', NULL, NULL),
(12, 'microsoft', 'microsoft_partner.jpg', NULL, NULL),
(13, 'luciole', 'luciole_partner.png', NULL, NULL),
(14, 'motorola', 'motorola_partner.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `selections`
--

CREATE TABLE `selections` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `selections`
--

INSERT INTO `selections` (`id`, `name`, `age`, `phone`, `school`, `address`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Hồ Thị Lữ', '20', '073284722', 'Nội Trú Tỉnh Quảng Trị', 'Quảng Trị', 'lu.ho68contact@gmail.com', '2021-07-19 07:40:54', '2021-07-19 07:40:54'),
(2, 'Lê Thị Mai Hoa', '20', '02363377', 'Binh Dinh', 'Binh Dinh', 'hoa.le22@student.passerellsnumeriques.org', '2021-07-19 07:42:16', '2021-07-19 07:42:16'),
(3, 'Hồ Văn Lu', '20', '066979964', 'fsgsg', 'fsgdg', 'lu.ho22@student.passerellsnumeriques.org', '2021-07-19 08:56:24', '2021-07-19 08:56:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sharing`
--

CREATE TABLE `sharing` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `share` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sharing`
--

INSERT INTO `sharing` (`id`, `name`, `job`, `image`, `share`, `created_at`, `updated_at`) VALUES
(1, 'Ngo Thi My Hoai', 'Student, class 2022, PN Vietnam', 'student1_sharing.png', 'As a girl, many people once questioned my choice to pursue an IT major. They said I should choose other career paths, like becoming a teacher or a tour guide, that I would never be as good as boys in IT. At that time, I did not know how to answer. I just ', NULL, NULL),
(2, 'Lucas SINROD', 'IT and Training Manager, PN Vietnam', 'student2_sharing.png', 'The IT world is full of machines and AI, and so can be characteristically cold. Through PN I have rediscovered the human side of technology. With every smiling face or curious question, PN students remind me why I learned to code. Computers are fascinatin', NULL, NULL),
(3, 'Nguyen Huu Cuong', 'PNV alumna, class 2019, Full stack Developer,mgm technology partners', 'student3_sharing.png', 'We were the first batch in the expansion to a full three-year training program. We had more time to learn the cutting-edge technologies that companies need. We developed our soft skills that helped us in our career paths. Moreover, the Specialization modu', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `phone`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Hoa', 'hoa.le22@student.passerellesnumeriques.org', NULL, '123456789', '0333587611', NULL, NULL, NULL),
(2, 'Lu', 'lu.ho22@student.passerellesnumeriques.org', NULL, '123456789', '0312489555', NULL, NULL, NULL),
(3, 'pha', 'pha.nguyen22@student.passerellesnumeriques.org', NULL, '123456789', '021545789', NULL, NULL, NULL),
(4, 'vi', 'vi.le22@student.passerellesnumeriques.org', NULL, '123456789', '0234578545', NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `discovers`
--
ALTER TABLE `discovers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `donaters`
--
ALTER TABLE `donaters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `donaters_email_unique` (`email`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `leaders`
--
ALTER TABLE `leaders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `partners_namecompany_unique` (`namecompany`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `selections`
--
ALTER TABLE `selections`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sharing`
--
ALTER TABLE `sharing`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `discovers`
--
ALTER TABLE `discovers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `donaters`
--
ALTER TABLE `donaters`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `leaders`
--
ALTER TABLE `leaders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `selections`
--
ALTER TABLE `selections`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `sharing`
--
ALTER TABLE `sharing`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
