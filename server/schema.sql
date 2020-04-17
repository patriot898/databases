CREATE DATABASE chat;

USE chat;

  /* Describe your table here.*/
  /* may need to include a time-sent column for mrssages*/
CREATE TABLE messages (

  id integer primary key NOT NULL AUTO_INCREMENT, userid integer, text text, roomname text, foreign key (userid) references users(id)
);

CREATE TABLE users (
  id integer primary key NOT NULL AUTO_INCREMENT, username text
);
/* Create other tables and define schemas for them here! */

-- postmessage query
-- 'INSERT INTO messages (userid, text, roomname) values ((SELECT id FROM users WHERE username =  "David"), "Hello" , "Mainroom")';

-- 'INSERT INTO users (username) VALUES ("David");'



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

