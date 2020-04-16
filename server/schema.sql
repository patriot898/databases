CREATE DATABASE chat;

USE chat;

  /* Describe your table here.*/
  /* may need to include a time-sent column for mrssages*/
CREATE TABLE messages (

  id integer primary key, user-id text, text text, roomname text, foreign key (user-id) references users (id)
);

CREATE TABLE users (
  id integer primary key, username text
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

