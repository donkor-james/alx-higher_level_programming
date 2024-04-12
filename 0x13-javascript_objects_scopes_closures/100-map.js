#!/usr/bin/node
const list = require("./100-data.js").list;
const new_list = [];
console.log(list);
list.map((item, index) => (new_list[index] = item * index));
console.log(new_list);
