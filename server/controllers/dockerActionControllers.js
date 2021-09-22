const { exec } = require('child_process')

module.exports.dockerAction = (req, res) => {
    
    const { id, action } = req.body

    switch(action){

        case 'start':
            exec(`docker restart ${id}`, (err, stdout, stderr) => {
                console.log(stdout)
            })
            break
        
        case 'stop':
            exec(`docker stop ${id}`, (err, stdout, stderr) => {
                console.log(stdout)
            })
            break
        
        default:
            console.log('Nill')
            break       
    }
    res.end()    
}