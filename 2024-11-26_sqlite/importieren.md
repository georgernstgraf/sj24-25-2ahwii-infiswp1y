# create table

create table uphosts (datum date, ip text, mac text);

# Import the CSV file

sqlite> .mode csv
sqlite> .separator ;
sqlite> .import outfile.csv uphosts
