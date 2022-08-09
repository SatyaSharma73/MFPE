drop table if exists user;

create Table user(
	empid int primary key auto_increment,
	emp_username varchar(50) not null,
	emp_password varchar(50) not null
	);
    

insert into user(empid,emp_username,emp_password) values (1,'nikita','nikita');
insert into user(empid,emp_username,emp_password) values (2,'satya','satya');
insert into user(empid,emp_username,emp_password) values (3,'sudipta','sudipta');
insert into user(empid,emp_username,emp_password) values (4,'selvi','selvi');
