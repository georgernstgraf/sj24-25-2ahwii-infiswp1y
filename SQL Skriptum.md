# SQL

## Begriffe

### DDL

Data definition Language (zb. create table)

### DML

Data modification Language

### Datentypen sqlite3

- date
- text
- number
# create table

create table uphosts (datum date, ip text, mac text);

# Import the CSV file

sqlite> .mode csv
sqlite> .separator ;
sqlite> .import outfile.csv uphosts
