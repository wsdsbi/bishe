-- auto-generated definition
create table user
(
    id       bigint       not null comment '主键ID'
        primary key,
    name     varchar(30)  null comment '姓名',
    age      int          null comment '年龄',
    email    varchar(50)  null comment '邮箱',
    account  varchar(100) not null,
    password varchar(100) not null,
    status   tinyint(1)   not null
);


create table metal_info(
    id int,
    type varchar(255),
    bargin varchar(255),
    height varchar(255),
    price varchar(255),
    `desc` varchar(255),
    account varchar(255),
    owned varchar(255),
    create_time time,
    update_time time
)