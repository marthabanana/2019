const fs = require('fs')

const paths = [ 'artists', 'activities' ]
const exclude = [ 'index.js' ]

const stringify = ({ imports, entities }) =>
`// This is an automatically generated file.
// Manual edits to this file will be overriden by
// the "npm run fixtures" command
${ imports.join('; ') }
export default { ${ entities.join(', ') } }
`.trim()

paths.forEach(path => {
    console.log(`Generating ${ path } fixtures...`)

    const imports = []
    const entities = []

    fs.readdirSync(`./src/${ path }/fixtures`).filter((f) =>
        exclude.indexOf(f) === -1
    ).map(f =>
        f.split('.')[0]
    ).filter(f =>
        !!f
    ).forEach(f => {
        const fNorm = f.replace(/[\W]+/g, '')
        imports.push(`import ${ fNorm } from './${ f }'`)
        entities.push(`'${ f }': { ...${ fNorm }, id: '${ f }' }`)
    })

    fs.writeFileSync(`./src/${ path }/fixtures/index.js`, stringify({
        imports,
        entities,
    }))

    console.log(`${ path } fixtures done!`)
})
