/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.7.36-log : Database - spark_design
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`spark_design` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `spark_design`;

/*Table structure for table `action_sum` */

DROP TABLE IF EXISTS `action_sum`;

CREATE TABLE `action_sum` (
  `adate` varchar(50) DEFAULT NULL,
  `view_products` int(11) DEFAULT NULL,
  `shopping_cart` int(11) DEFAULT NULL,
  `generate_order` int(11) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `action_sum` */

insert  into `action_sum`(`adate`,`view_products`,`shopping_cart`,`generate_order`,`payment`) values ('2021/1/21',301,160,96,33),('2021/1/18',275,174,80,30),('2021/1/29',335,162,94,23),('2021/1/25',368,192,119,29),('2021/1/14',252,133,98,37),('2021/1/10',275,143,93,22),('2021/1/12',247,145,88,32),('2021/1/23',261,126,72,44),('2021/1/27',352,175,121,28),('2021/1/16',344,207,103,39),('2021/1/30',353,201,124,32),('2021/2/2',412,261,145,88),('2021/1/9',337,180,116,37),('2021/1/7',257,149,107,31),('2021/1/26',334,196,119,30),('2021/2/1',360,226,102,45),('2021/1/20',317,189,107,35),('2021/1/31',335,218,139,64),('2021/1/13',336,177,113,22),('2021/1/11',267,134,81,28),('2021/1/28',394,196,148,43),('2021/1/24',335,219,138,26),('2021/1/19',320,183,112,40),('2021/1/8',234,118,73,25),('2021/1/17',309,201,113,30),('2021/1/22',381,215,148,29),('2021/1/15',264,141,81,28),('2021/2/3',374,218,130,68);

/*Table structure for table `all_behavior_analyse` */

DROP TABLE IF EXISTS `all_behavior_analyse`;

CREATE TABLE `all_behavior_analyse` (
  `action` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `all_behavior_analyse` */

insert  into `all_behavior_analyse`(`action`,`number`) values ('签到成功',398),('注册成功',2093),('加入购物车',502),('点击推荐课程',995),('再注册',350),('搜索课程',1298),('其它',148),('登录',2275),('退出',283),('签到',284),('购买课程',219),('分享课程',369),('查看课程详情',2475),('注册',2159),('注册失败',383);

/*Table structure for table `career_number` */

DROP TABLE IF EXISTS `career_number`;

CREATE TABLE `career_number` (
  `career` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `career_number` */

insert  into `career_number`(`career`,`number`) values ('IT',21),('公务员',34),('考研',22),('医学',25),('财会',21),('教师',18),('事业单位',27),('英语',16),('Office',14),('法考',20),('建造',18);

/*Table structure for table `cluster_user` */

DROP TABLE IF EXISTS `cluster_user`;

CREATE TABLE `cluster_user` (
  `source` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `cluster_user` */

insert  into `cluster_user`(`source`,`number`) values ('百度',97),('小红书',84),('微信',80);

/*Table structure for table `res_number` */

DROP TABLE IF EXISTS `res_number`;

CREATE TABLE `res_number` (
  `res` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `res_number` */

insert  into `res_number`(`res`) values (0.6072633459019646),(0.3326797385620915),(1018),(0.5643409116362414),(8929),(5039),(3060);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `nickname` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`username`,`password`,`nickname`) values ('11111','1111',NULL),('hanerbin','123456',NULL),('hansanbin','123456',NULL),('hanyibin','123456',NULL),('lisi','123456',NULL),('lllll','123456',NULL),('root','password','管理员1'),('wangwu','123456',NULL),('zhangsan','123456','张三');

/*Table structure for table `user_anaylse` */

DROP TABLE IF EXISTS `user_anaylse`;

CREATE TABLE `user_anaylse` (
  `province` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_anaylse` */

insert  into `user_anaylse`(`province`,`number`) values ('青海',19),('福建',38),('甘肃',23),('澳门',7),('湖北',37),('重庆',57),('广东',51),('山东',40),('省市',1),('北京',53),('贵州',26),('上海',53),('黑龙江',29),('湖南',54),('辽宁',31),('浙江',60),('内蒙古',11),('陕西',30),('香港',4),('山西',45),('河北',47),('云南',24),('宁夏',3),('广西',13),('安徽',34),('江西',41),('台湾',3),('吉林',32),('新疆',2),('江苏',56),('天津',40),('河南',29),('四川',41),('海南',33),('西藏',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
