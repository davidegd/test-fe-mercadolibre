import fs from "fs";

const loadManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (error) {
    console.log(error);
  }
};

export default loadManifest;
