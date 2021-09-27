const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

module.exports.build = (req, res) => {
    
    const { name, file } = req.body
    const dockerFilesDir = path.join(__dirname, '..', '..', 'dockerfiles')
    const dockerFile = path.join(__dirname, '..', '..', 'dockerfiles', 'Dockerfile')

    if(fs.existsSync(dockerFilesDir)){
        fs.writeFileSync(dockerFile, file)
    } else {
        fs.mkdirSync(dockerFilesDir)
        fs.writeFileSync(dockerFile, file)
    }

    exec(`docker build -t ${name}:latest ${dockerFilesDir}`, (err, stdout, stderr) => {
        console.log(stdout)
    })
    
    res.end()    
}