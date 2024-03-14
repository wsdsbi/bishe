datebase：testmybatisplus

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


-- auto-generated definition
create table metal_info
(
    id          int auto_increment
        primary key,
    type        varchar(255)  null,
    bargin      varchar(255)  null,
    height      varchar(255)  null,
    price       varchar(255)  null,
    `desc`      varchar(255)  null,
    owned       varchar(255)  null,
    create_time datetime      null,
    update_time datetime      null,
    account     varchar(255)  null,
    status      int default 1 not null,
    address     varchar(255)  null,
    date        datetime      null,
    station     varchar(255)  null,
    constraint metal_info_id_uindex
        unique (id)
);

