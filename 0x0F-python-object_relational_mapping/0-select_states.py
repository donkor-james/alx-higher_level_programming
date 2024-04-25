#!/usr/bin/python3
"""scrpit that list all states from hbtn_0e_0_usa"""
import MySQLdb
import sys


conn = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=db_password, db=database, charset="utf8")
cur = conn.cursor()

cur.execute("SELECT * FROM states ORDER BY states.id ASC")

rows = cur.fetchall()

for row in rows:
	print(row)

conn.close()


if __name__ == '__main__':
	username = sys.arg[1]
	db_password = sys.arg[2]
	database = sys.arg[3]

