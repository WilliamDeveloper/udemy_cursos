drop table jobs;

CREATE TABLE jobs(
  id integer primary key autoincrement,
  title text,
  salary text,
  company text,
  email text,
  new_job integer,
  description text,
  createdAt text,
  updatedAt text
);