export const green = ['rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 0.1)']
export const blue = ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 0.1)']
export const activeStatus = 'Active'
export const pausedStatus = 'Paused'
export const builder = 'http://localhost:4000/build'
export const dashboard = 'http://localhost:4000/dashboard'
export const localhost = 'http://localhost:4000'
export const options = { maintainAspectRatio: false }
export const menu = [
    {
        name: 'Dashboard', 
        route: '/dashboard',
    }, 
    {
        name: 'Containers', 
        route: '/create',
    },
    {
        name: 'Dockerfile', 
        route: '/dockerfile',
    },
    {
        name: 'Reload', 
        route: '',
    }
]
export const noData = {
    datasets: [{
        data: [2, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.2)' }],
    labels: ['Fetching', 'Total']        
}