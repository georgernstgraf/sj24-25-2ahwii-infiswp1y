1.
INSERT INTO
    persons (id, firstname, lastname, sex)
VALUES
    (1, 'Henrik', 'Münch', 'male');

INSERT INTO
    persons (id, firstname, lastname, sex)
VALUES
    (2, 'Luzie', 'Kupprion', 'female');

INSERT INTO
    persons (id, firstname, lastname, sex)
VALUES
    (3, 'Kerim', 'Friedrich', 'male');

2.
INSERT INTO
    persons (id, firstname, lastname, sex)
VALUES
    (4, NULL, 'Hechler', NULL),
    (5, 'Valeria', NULL, 'female'),
    (6, NULL, NULL, NULL);

INSERT INTO
    persons (id)
VALUES
    (7);

3.
SELECT
    *
FROM
    persons
WHERE
    sex IS NULL;

INSERT INTO
    persons (firstname, lastname, sex)
VALUES
    ('Sonja', 'Rogner', 'female');

SELECT
    *
FROM
    persons
WHERE
    firstname IS NULL
    OR lastname IS NULL;

4.
SELECT
    *
FROM
    persons
WHERE
    id IS NOT NULL;

SELECT
    *
FROM
    persons
WHERE
    sex IS NOT NULL;