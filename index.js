#!/usr/local/bin/node
const csv = require('fast-csv');
const fs = require('fs');

function run () {
    const records = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream('./demo.csv')
        .pipe(csv.parse({ headers: true, quote: '"' }))
        .on('data', (row) => {
            records.push(row);
        })
        .on('end', () => {
            resolve(records)
        })
    });
  }
  
  (async function() {
    const csvRecords = await run();
    console.log('Records =>', csvRecords);
  })();