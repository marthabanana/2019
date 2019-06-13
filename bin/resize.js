const fs = require('fs')
const Sharp = require('sharp')

const path = './build/static/media'
const extensions = [ 'jpg', 'png' ]
const settings = [
    {
        match: /landing|map|sponsors/,
        width: 1960
    },
    // default
    {
        width: 650
    }
]

console.log('Resizing...')

fs.readdirSync(path).filter((f) =>
    extensions.indexOf(f.split('.').pop()) !== -1
).map(f => {
    const opts = settings.find(s => f.match(s.match || /./))

    Sharp(`${ path }/${ f }`)
        .resize(opts.width, 3000)
        .max()
        .toBuffer()
        .then((buffer) => {
            const file = `${ path }/${ f }`
            fs.writeFileSync(file, buffer)
            console.log(`Resized ${ f } to ${ file }`)
        })
})
