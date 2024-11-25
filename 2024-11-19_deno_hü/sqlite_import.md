# csv importieren

## schema erstellen

```sh
$ sqlite3 nmap_data.db
SQLite version 3.45.1 2024-01-30 16:01:20
Enter ".help" for usage hints.
sqlite> CREATE TABLE scans (date date, host TEXT, mac TEXT);
sqlite>
```

```sql
sqlite3 nmap_data.db <<EOF
.mode csv
.separator ;
.import outfile.csv scans
EOF
```
