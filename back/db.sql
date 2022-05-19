USE DATABASE

CREATE TABLE userInfo(  
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `userId` VARCHAR(255) NOT NULL,
    `pwd` INT(11) NOT NULL
);

SELECT * FROM `userInfo`;

DESC userInfo;

INSERT INTO `userInfo`(userId, pwd) VALUES ('test', '1234');



CREATE TABLE board(  
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `userId` VARCHAR(255) NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL
);

DESC board;

INSERT INTOf


