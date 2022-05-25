track :

CREATE TABLE track 
(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(128),
    youtube_url VARCHAR(255)
);

CREATE TABLE album
(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    genre VARCHAR(255),
    picture VARCHAR(255),
    artist VARCHAR(255)
);

SELECT *
FROM track
INNER JOIN album ON track.id = album.id;

CREATE TABLE user
(
    id INT PRIMARY KEY NOT NULL,
    userName VARCHAR(255),
    hashedPassword VARCHAR (255)
)
