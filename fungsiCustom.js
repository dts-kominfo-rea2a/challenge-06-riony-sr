// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let hasil = [];
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) {
      return fnCallback(err, null);
    }

    let parJson = JSON.parse(data);
    let kata = parJson.message.split(" ");
    hasil.push(kata[1]);

    fs.readFile(file2, "utf8", (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }

      let parJson2 = JSON.parse(data);
      hasil.push(parJson2[0].message.split("halo ").join(""));

      fs.readFile(file3, "utf8", (err, data) => {
        if (err) {
          return fnCallback(err, null);
        }

        let parJson3 = JSON.parse(data);
        hasil.push(parJson3[0]["data"].message.split("halo ").join(""));
        fnCallback(null, hasil);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
