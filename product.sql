-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 22:47:20
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `xm`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品标题',
  `detail` text COLLATE utf8_unicode_ci NOT NULL COMMENT '商品详情',
  `price` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品价格',
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品图片',
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品颜色',
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品尺寸',
  `details` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '商品页详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `detail`, `price`, `picture`, `color`, `size`, `details`) VALUES
(1, '全屏电视 E43K', '全面屏设计,海量内容', '[{\"new\":\"1399元\"},{\"old\":\"1599元\"}]', '[{\"src\":\"img/tele1.webp\"},{\"src\":\"img/14-1.jpg\"},{\"src\":\"img/b-141.jpg\"},{\"src\":\"img/b-143.jpg\"},{\"src\":\"img/b-144.jpg\"},{\"src\":\"img/b-145.jpg\"}]', '黑色', '43英寸', '全面屏设计/无边视野/世界精彩一览无余'),
(2, '全面屏设计 55英寸E55K', '潮流全面屏设计', '[{\"new\":\"2399元\"},{\"old\":\"1599元\"}]', '[{\"src\":\"img/tele2.webp\"},{\"src\":\"img/14-21.jpg\"},{\"src\":\"img/b14-21.jpg\"},{\"src\":\"img/b14-22.jpg\"},{\"src\":\"img/b14-23.jpg\"},{\"src\":\"img/b14-24.jpg\"}]', '灰色', '55英寸', '潮流全面屏设计 视野更广阔 / 4K超高清画质 细腻如真 / 杜比音效带来震撼体验 / 内置小爱同学 语音操控更便捷 / 智能PatchWall系统 / 2G+8G大存储空间 / 海量好内容 满足全家人的观看需求'),
(3, '小米电视4A 60英寸', '人工智能语音系统,超高清画质', '[{\"new\":\"2799元\"},{\"old\":\"3699元\"}]', '[{\"src\":\"img/tele3.webp\"},{\"src\":\"img/14-31.png\"},{\"src\":\"img/b14-31.jpg\"},{\"src\":\"img/b14-32.jpg\"},{\"src\":\"img/b14-33.jpg\"},{\"src\":\"img/b14-34.jpg\"}]', '黑色', '60英寸', '4K HDR 超高清画质 / 人工智能语音系统 / 2G+8G大存储空间 / 海量视频好内容 / 64位四核高性能处理器'),
(4, '小米电视4S 75英寸', '4K HDR,人工智能语音', '[{\"new\":\"4699元\"},{\"old\":\"5999元\"}]', '[{\"src\":\"img/tele4.jpg\"},{\"src\":\"img/tele4.jpg\"},{\"src\":\"img/b14-31.jpg\"},{\"src\":\"img/b14-32.jpg\"},{\"src\":\"img/b14-33.jpg\"},{\"src\":\"img/b14-34.jpg\"}]', '黑色', '75英寸', '人工智能语音系统/4K 超高清屏/64位四核处理器/海量影视内容/杜比音效'),
(5, '小米全屏电视65英寸 E65K', '全面屏设计', '[{\"new\":\"2999元\"},{\"old\":\"3299元\"}]', '[{\"src\":\"img/tele21.webp\"},{\"src\":\"img/16-1.jpg\"},{\"src\":\"img/b16-1.jpg\"},{\"src\":\"img/b16-2.jpg\"},{\"src\":\"img/b16-3.jpg\"},{\"src\":\"img/b16-4.jpg\"}]', '黑色', '65英寸', '全面屏/4K HDR/内置小爱同学/杜比+DTS/64位四核处理器'),
(6, '小米电视E32C', '全面屏设计,人工智能系统', '[{\"new\":\"949元\"},{\"old\":\"1099元\"}]', '[{\"src\":\"img/tele22.webp\"},{\"src\":\"img/tele22.webp\"},{\"src\":\"img/b16-1.jpg\"},{\"src\":\"img/b16-2.jpg\"},{\"src\":\"img/b16-3.jpg\"},{\"src\":\"img/b16-4.jpg\"}]\r\n', '黑色', '32英寸', '全面屏高清分辨率/智能家居控制中心/PatchWall/海量内容/DTS解码/多核处理器'),
(7, 'Redmi智能电视A55', '澎湃音效影院级体验', '[{\"new\":\"2188元\"},{\"old\":\"2199元\"}]', '[{\"src\":\"img/tele23.webp\"},{\"src\":\"img/16-2.jpg\"},{\"src\":\"img/b16-1.jpg\"},{\"src\":\"img/b16-2.jpg\"},{\"src\":\"img/b16-3.jpg\"},{\"src\":\"img/b16-4.jpg\"}]', '黑色', '55英寸', '超高清画质/立体声澎湃音效/海量影音资源/64位四核处理器/超窄边框'),
(8, 'Redmi智能电视MAX 98\"', '98英寸巨幕 MEMC运动补偿', '[{\"new\":\"1999元\"},{\"old\":\"null\"}]', '[{\"src\":\"img/tele24.webp\"},{\"src\":\"img/tele24.webp\"},{\"src\":\"img/b16-1.jpg\"},{\"src\":\"img/b16-2.jpg\"},{\"src\":\"img/b16-3.jpg\"},{\"src\":\"img/b16-4.jpg\"}]', '黑色', '98英寸', '98英寸巨幕/MEMC运动补偿/4K超高清/192分区/动态背光/内置小爱同学/大腔体四单元音箱');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
