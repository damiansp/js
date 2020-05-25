const express = require('express');

let app = express().use(express.static(__dirname + '/public')).listen(3000);
