drop table if exists liked_by;
drop table if exists offer;
drop table if exists employee;

create table Employee(
	id int primary key auto_increment,
    name varchar(50) not null,
    department varchar(50),
    gender varchar(6) not null,
    age int not null,
    contact_number bigint,
    email varchar(100) unique,
    points_gained int default 0,
    check (gender in ('Male','Female','other')),
    check ( age > 0 )
    );
    
create table Offer(
	id int primary key auto_increment,
    name varchar(50) not null,
    description varchar(500),
    category varchar(50) not null,
    open_date timestamp ,
    closed_date timestamp,
    engaged_date timestamp,
    engaged_emp_id int,
    emp_id int not null,
    likes int default 0,
    foreign key(engaged_emp_id) references Employee(id) on delete cascade,
    foreign key(emp_id) references Employee(id) on delete cascade
    );

create table liked_by(
	emp_id int,
    offer_id int,
    liked_on timestamp default now(),
    primary key(emp_id,offer_id),
    foreign key(emp_id) references Employee(id) on delete cascade,
    foreign key(offer_id) references Offer(id) on delete cascade
    );
    
    
insert into Employee(id,name,gender,age,department,contact_number,email) values(1,'Nikita Dubey','Female',22,'FSE',8240365151,'Nikita@Dubey.com');
insert into Employee(id,name,gender,age,department,contact_number,email) values(2,'Satya Sharma','Male',22,'FSE',8240365152,'satya@sharma.com');
insert into Employee(id,name,gender,age,department,contact_number,email) values(3,'Sudipta','Female',22,'FSE',8240365153,'Sudipta@gmail.com');
insert into Employee(id,name,gender,age,department,contact_number,email) values(4,'Selvi','Female',22,'FSE',8240365154,'Selvi@gmail.com');

insert into Offer(id,name,description,category,open_date,emp_id) values(1,'Brand New Iphone 12 Pro Max','Iphone 12 Pro Max 256gb grey brand new condition with box, cable and back cover .' ,'Electronics','2022-08-04',1);
insert into Offer(id,name,description,category,open_date,emp_id) values(2,'Interior live plants frame','Variety of plants and pots in ceramic and plastic trays.' ,'Plants','2022-07-15',2);
insert into Offer(id,name,description,category,open_date,emp_id) values(3,'Queen size cot without storage','5 X 6.5 queen size without storage cot -6800 With storage -8900.','Furniture','2022-08-02',3);
insert into Offer(id,name,description,category,open_date,emp_id) values(4,'Glossy sofa set','Factory price new sofa set direct from factory v own manufacture different types of sofa set with warranty call now' ,'Furniture','2022-07-25',1);
insert into Offer(id,name,description,category,open_date,emp_id) values(5,'Kitchen accessories for sale','All wooden range drawers with SS fittings for sale its our new flat need to upgrade that why we sale..' ,'Accessories','2022-08-01',2);
insert into Offer(id,name,description,category,open_date,emp_id) values(6,'Solar inverter 144v','MPPT Solar inverter single phase' ,'Electronics','2022-07-30',3);
insert into Offer(id,name,description,category,open_date,emp_id) values(7,'Zebronic home theatre for sale','Zebronic home theatre for sale ...two speakers available' ,'Furniture','2022-07-30',4);
insert into Offer(id,name,description,category,open_date,emp_id) values(8,'R2 Bluetooth Neckband Bluetooth Headset','Model Name :R2 Bluetooth Neckband , Color :Black, Yellow, Inline Remote :Yes' ,'Electronics','2022-08-02',2);
insert into Offer(id,name,description,category,open_date,emp_id) values(9,'Dell Brand new Laptop','Model : 5570 , 3 years old , fully working condition' ,'Electronics','2022-08-01',2);





