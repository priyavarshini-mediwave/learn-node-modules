const express = require("express");
const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);
let posixex = path.posix.basename("/tmp/myfile.html");
console.log(posixex);
let base = path.basename("/foo/bar/baz/asdf/quux.html");
// Returns: 'quux.html'
console.log(base);
let basesuffix = path.basename("/foo/bar/baz/asdf/quux.html", ".html");
// Returns: 'quux'
console.log(basesuffix);
console.log("PATH", process.env.PATH);
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

let delim = process.env.PATH.split(path.delimiter);
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
console.log("delim", delim);
