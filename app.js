let n = 0
function numberFormat(n) {
    return n.toString().padStart(3, '0')
}
function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
const lis = items.map((item,k) => <li key={k}>{item}</li>)
    const title = <React.Fragment>
        <h1 id={'title '+ n}>Bonjour les gens</h1>
        <span>{numberFormat(n)}</span>
        <ul>
            {lis}
        </ul>
    </React.Fragment>
    ReactDOM.render(title, document.querySelector('#app'))
}
render()
////////////////////////////////////////////////////Syntax classic//////////////////////////////////////////////
// let n=0
// function render1() {
//     const title = React.createElement('h1', {}, 'Bonjour tout le monde', React.createElement('span', {}, n))
//     ReactDOM.render(title, document.querySelector('#app'))
//     // console.log(title)
// }
// function render(){
//     document.querySelector("#app").innerHTML = "<h1> Bonjour tout le monde </h1> <span> "+n+"</span>"
// }
render()
window.setInterval(() => {
    n++
    render()
}, 1000); //en 'ms'
