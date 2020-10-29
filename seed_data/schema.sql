-- schema

DROP TABLE IF EXISTS beaches;

CREATE TABLE beaches
(
  id serial primary key,
  name VARCHAR(20),
  photo VARCHAR(100),
  photo_credit VARCHAR(40),
  access VARCHAR(10),
  parking VARCHAR(150),
  hours VARCHAR(200),
  avail_rec VARCHAR(400),
  notes VARCHAR(200),
  latitude NUMERIC(7,3),
  longitude NUMERIC(7,3)
);
