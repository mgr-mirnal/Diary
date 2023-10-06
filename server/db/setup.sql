DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    diary_user VARCHAR(40) NOT NULL,
    diary_date TimeStamp NOT NULL,
    diary_description VARCHAR(500) NOT NULL,
    diary_category VARCHAR(50) NOT NULL DEFAULT 'Daily',
    PRIMARY KEY (diary_id)
);

INSERT INTO diary
    (diary_user,diary_date, diary_description, diary_category)
VALUES
    ('Mirnal','2021-01-23 08:09:23', 'Get ready for school','school'),
    ('Mirnal','2021-01-25 12:09:23', 'Went out to chicken shop to get food','daily'),
    ('Mirnal','2021-04-25 09:10:23', 'went to gym','daily'),
    ('Hanieh','2021-10-25 23:59:23', 'finish my project','school'),
    ('Mirnal','2021-06-25 11:10:34', 'My younder sister birthday','dialy'),
    ('Hanieh','2023-10-04 12:10:23', 'finish profile by 12/10/2023','school')


