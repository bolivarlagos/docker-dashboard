const { exec } = require('child_process')

module.exports.getContainers = (req, res) => {
    exec('docker ps -a', (err, stdout, stderr) => {

        let stats = stdout.split('\n')
        let tableHead = []
        let tableBody = []   
        let containerImages = []
        let containerNames = []   
        let containerIds = []

        for (let i = 0; i < stats.length; i++) {

            let innerRow = stats[i].split('  ')
            let filteredInnerRows = innerRow.filter(line => line !== '')            

            if (i === 0) {
                tableHead = [...filteredInnerRows]
            } else {
                if(filteredInnerRows[0]) containerIds.push(filteredInnerRows[0])
                if(filteredInnerRows[1]) containerImages.push(filteredInnerRows[1])
                tableBody.push(filteredInnerRows)
            }
        }    
        
        tableBody.pop()

        let actives = []
        let inactives = []

        tableBody.forEach(arr => {
            
            if(arr[4].includes('Up', [0, 1])){
                actives.push(arr[4])                
            }
            if(arr[4].includes('Exited', [0, 5])){
                inactives.push(arr[4])                
            }
        })

        res.json({ 
            head: tableHead, 
            body: tableBody, 
            images: containerImages, 
            names: containerNames,
            ids: containerIds,
            actives,
            inactives
        })
    })    
}