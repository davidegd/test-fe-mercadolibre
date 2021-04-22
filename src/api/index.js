"use strict";
const express = require("express");
const Controller = require("./apiController");
const app = express();

app.get("/checkStatus", Controller.checkStatus);

app.get("/items", Controller.GetItems);

app.get("/items/:id", Controller.GetItemDetail);

export const Api = app;
