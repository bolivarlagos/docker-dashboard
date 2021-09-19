const { exec } = require('child_process')

module.exports.getContainers = (req, res) => {
    exec('docker ps -a', (err, stdout, stderr) => {

        let stats = stdout.split('\n')
        let tableHead = []
        let tableBody = []   
        let containerImages = []
        let containerNames = []   

        for (let i = 0; i < stats.length; i++) {

            let innerRow = stats[i].split('  ')
            let filteredInnerRows = innerRow.filter(line => line !== '')            

            if (i === 0) {
                tableHead = [...filteredInnerRows]
            } else {
                if(filteredInnerRows[1] !== undefined){
                    containerImages.push(filteredInnerRows[1])
                }
                if(filteredInnerRows[6] !== undefined){
                    containerNames.push(filteredInnerRows[6])                
                } 
                tableBody.push(filteredInnerRows)
            }
        }    
        console.log(tableHead, tableBody)
        res.json({ 
            head: tableHead, 
            body: tableBody, 
            images: containerImages, 
            names: containerNames 
        })
    })
    
}