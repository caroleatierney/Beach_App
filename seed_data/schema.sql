drop table if exists beaches;

CREATE TABLE beaches
(
  id serial primary key,
  name VARCHAR(20),
  photo VARCHAR(100),
  photo_credit VARCHAR(40),
  access VARCHAR(10),
  parking VARCHAR(150),
  hours VARCHAR(60),
  avail_rec VARCHAR(200),
  notes VARCHAR(200)
);
