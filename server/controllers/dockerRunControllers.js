const { exec } = require('child_process')

module.exports.dockerRun = (req, res) => {
    
    const { name, image , port, command } = req.body

    if(command === ''){
        exec(`docker run --name ${name} -d -p ${port}:${port} ${image}:latest`, (err, stdout, stderr) => {
            console.log(stdout)
        })
    } else {
        exec(`${command}`, (err, stdout, stderr) => {
            console.log(stdout)
        })
    }
    res.end()
}