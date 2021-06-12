'use strict';

const fs = require('fs');
const https = require('https');

getTeams(2015, 13);

async function getTeams(year, k) {
  // write your code here
  let totalPages = 1;
  const API = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${totalPages}`;

  let totalData = [];

  const test = await GetAll(13, year);
  console.log(test)

//   GET(API).then((firstData) => {

//   });

  return [];
}

async function GetAll(totalPages, year) {
  let allData = [];

  for (let i = 2; i <= totalPages; i++) {
    const newAPI = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`;
    const data = await GET(newAPI);

    allData.push(...data.data)
    // GET(newAPI).then(team => {
    //     allData = (team)
    //     console.log(allData)
    // }

    // )
  }

  return allData;
}

async function GET(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.on('data', (newData) => {
        const result = JSON.parse(newData);
        resolve(result);
      });
    });
  });
}
