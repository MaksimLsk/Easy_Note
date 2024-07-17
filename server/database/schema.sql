create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(80) not null,
  lastname varchar(80) not null,
  email varchar(255) not null unique,
  password varchar(150) not null
);

create table list (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table note (
  id int unsigned primary key auto_increment not null,
  context varchar(255) not null,
  list_id int unsigned not null,
  foreign key(list_id) references list(id)
);