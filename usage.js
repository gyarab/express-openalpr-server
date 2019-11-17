const api = "http://localhost:4500/plates";
const base64Img = require("base64-img");
const path = require("path");
const fetch = require("node-fetch");

const img = process.argv[2];

console.log(img);

const test = () => {
  base64Img.base64(path.join(process.cwd(), img), (err, image) => {
    if (err) {
      console.error(err);
      return;
    }
    const payload = {
      image,
      country_code: "eu"
    };
    fetch(api, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
      });
  });
};

test();
