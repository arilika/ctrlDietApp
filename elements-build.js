const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ctrlDiet/runtime-es2015.js',
    './dist/ctrlDiet/polyfills-es2015.js',
    './dist/ctrlDiet/scripts.js',
    './dist/ctrlDiet/main-es2015.js'
  ];

  await fs.ensureDir('elementos');
  await concat(files, 'elementos/componentes.js');
  await fs.copyFile(
    './dist/ctrlDiet/styles.css',
    'elementos/styles.css'
  );
})();
