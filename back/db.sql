USE DATABASE web;

DROP TABLE userInfo;

CREATE TABLE userInfo(  
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `userId` VARCHAR(255) NOT NULL,
    `pwd` INT(11) NOT NULL
);

SELECT * FROM `userInfo`;

DESC userInfo;

INSERT INTO `userInfo`(userId, pwd) VALUES ('test', '1234');

DROP TABLE board;

CREATE TABLE board(  
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `userId` VARCHAR(255) NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `hit` INT(11) DEFAULT 0 NOT NULL
);

DESC board;

SELECT * FROM board;

INSERT INTO board(userId, subject, content) VALUES('test', 'test', '안녕하세요 테스트입니다~~');


