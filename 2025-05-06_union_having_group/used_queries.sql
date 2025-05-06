SELECT
    count(DISTINCT city)
FROM
    customers;

-- union
SELECT
    city
FROM
    suppliers
UNION
SELECT
    city
FROM
    customers;

--
SELECT
    city
FROM
    suppliers
WHERE
    city NOT IN (
        SELECT
            city
        FROM
            customers
    );

--
SELECT
    'Customer' AS TYPE,
    ContactName,
    City,
    Country
FROM
    Customers
UNION
SELECT
    'Supplier',
    ContactName,
    City,
    Country
FROM
    Suppliers;

--
SELECT
    COUNT(),
    Country
FROM
    Customers
GROUP BY
    country
ORDER BY
    count();

--
SELECT
    COUNT(),
    Country
FROM
    Customers
GROUP BY
    country
HAVING
    count() > 5
ORDER BY
    count();