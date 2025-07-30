const fs = require('fs');
const path = require('path');

exports.onPostBuild = () => {
  const src = path.join(__dirname, 'src/images/thumbnail.jpg');
  const destDir = path.join(__dirname, 'public/images');
  const dest = path.join(destDir, 'thumbnail.jpg');

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
};
