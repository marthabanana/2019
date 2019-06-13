const imagemin = require('imagemin');
const JPG = require('imagemin-jpeg-recompress');
const PNG = require('imagemin-pngquant');

console.log('Optimizing...');

imagemin([
    'build/static/media/*.{jpg,png}'
], 'build/static/media', {
    plugins: [
        JPG({
            min: 50,
            max: 80,
            progressive: true,
        }),
        PNG({
            quality: '50-80',
        })
    ]
}).then(files => {
    console.log(`Optimized ${ files.length } images!`);
}, err =>
    console.log(err)
);
