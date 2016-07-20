DROP TABLE IF EXISTS holidays;


CREATE TABLE holidays (
id serial primary key,
holiday varchar,
date varchar,
description varchar,
date_based boolean
);
