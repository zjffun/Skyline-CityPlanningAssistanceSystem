DROP DATABASE IF EXISTS caps;
CREATE DATABASE IF NOT EXISTS caps CHARSET utf8;
GRANT ALL ON caps.* to 'caps'@'%' IDENTIFIED BY '123456';
GRANT ALL ON caps.* to 'caps'@'localhost' IDENTIFIED BY '123456';
FLUSH PRIVILEGES;
SET NAMES utf8;
USE caps;

#用户
CREATE TABLE user(
	user_id int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户ID',
	user_name varchar(64) NOT NULL COMMENT '用户名',
	user_pwd varchar(32) NOT NULL COMMENT '用户密码',
	phone char(16) COMMENT '联系电话',
	email varchar(255) COMMENT '电子邮箱',
	avatar varchar(255) COMMENT '头像',
	user_role enum('管理员','环保','林业','发改委','企业','个人') NOT NULL DEFAULT '管理员' COMMENT '用户角色',
	PRIMARY KEY (user_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT '用户';

insert into user(user_name, user_pwd) values('root', '123456');
insert into user(user_name, user_pwd) values('admin', '123456');
insert into user(user_name, user_pwd, user_role) values('env', '123456', '环保');
insert into user(user_name, user_pwd, user_role) values('fo', '123456', '林业');
insert into user(user_name, user_pwd, user_role) values('ndrc', '123456', '发改委');
insert into user(user_name, user_pwd, user_role) values('per', '123456', '个人');
insert into user(user_name, user_pwd, user_role) values('firm', '123456', '企业');

#方案申请
CREATE TABLE application(
	ap_id int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '申请ID',
	ap_name varchar(255) NOT NULL COMMENT '申请名称',
	ap_intro text COMMENT '申请简介',
	area varchar(255) NOT NULL COMMENT '申请区域文件',
	doc varchar(255) NOT NULL COMMENT '申请书',
	user_id int UNSIGNED NOT NULL COMMENT '申请用户ID',-- user
	PRIMARY KEY (ap_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT '方案申请';

#方案审查
CREATE TABLE application_examine (
	ae_id int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '申请审查ID',
	ae_status enum('通过','未通过','继续审核') NOT NULL COMMENT '申请审查状态',
	ae_reply varchar(255) COMMENT '申请审查回执',
	dep enum('环保','林业','发改委') NOT NULL COMMENT '审查部门',
	sign text COMMENT '审查者签字（Base64编码）',
	ap_id int UNSIGNED NOT NULL COMMENT '申请的ID',-- application
	PRIMARY KEY (ae_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT '方案审查';








