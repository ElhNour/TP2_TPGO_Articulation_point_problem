//const readline = require('readline-sync');
/*function draw(nb_elmnt,neighbors){
    var edges=[]
    for (let i=0;i<nb_elmnt;i++){
        var neighbor;
        for(let j=0;j<neighbors[i].length;j++) {
            edges.push({from:i,to:neighbor[i][j]})
        }
       
    }
    //console.log(edges)
    /*var edges=[{
        from: 0,
        to: 1
    },
    {
        from: 0,
        to: 2
    }
    ,
    {
        from: 2,
        to: 3
    },
    {
        from: 2,
        to: 4
    }
]

let adj=new Array(nb_elmnt)
edges.forEach(el=>{
    if((adj[el.from])== null){
        adj[el.from]=[];
        adj[el.from][0]=el.to;
    }
    else{
        (adj[el.from]).push(el.to)
    }
    if((adj[el.to])== null){
        adj[el.to]=[];
        adj[el.to][0]=el.from;
    }
    else{
        (adj[el.to]).push(el.from)
    }
})
    //console.log(adj)
return adj;
}*/

function APUtil(u, visited, disc, low, parent, ap,adj,time) {
    var children = 0;
    visited[u] = true;

    disc[u] = time;
    low[u] = time;
    time += 1;
    // disc[u] = low[u] = ++time; 

    var tab = adj[u]
    for (var i = 0; i < tab.length; i++) {
        var v = tab[i];
        if (!visited[v]) {
            children++;
            parent[v] = u;
            APUtil(v, visited, disc, low, parent, ap,adj,time);


            low[u] = Math.min(low[u], low[v]);


            if ((parent[u] === -1) && (children > 1)) {
                ap[u] = true;
            }



            if ((parent[u] !== -1) && (low[v] >= disc[u])) {
                ap[u] = true;
            }



        }
        else if (v !== parent[u]) {
            low[u] = Math.min(low[u], disc[v]);

        }
    }
}
function AP(nb_elmnt,neighbors) {

    let time=0;
    let visited = Array(nb_elmnt).fill(null).map(() => false)
    let disc = Array(nb_elmnt).fill(null).map(() => 0)
    let low = Array(nb_elmnt).fill(null).map(() => 0)
    let parent = Array(nb_elmnt).fill(null).map(() => -1)
    let ap = Array(nb_elmnt).fill(null).map(() => false)
    //let adj = new Array(this.v).fill(null).map(() => []);
   // let adj=draw(nb_elmnt,neighbors)
let adj=neighbors
    for (var i = 0; i < nb_elmnt; i++) {
        if (visited[i] === false)
            APUtil(i, visited, disc, low, parent, ap,adj,time);
    }

    console.log('Les points d\'articulations sont : ')
    for (var j = 0; j < nb_elmnt; j++) {
        if (ap[j] === true) {
            console.log('noeud ',j,'\n')
        }

    }


}
/*
function main(){
let nb_elmnt=readline.questionInt('Veuillez introduire le nombre de noeuds: ')
AP(nb_elmnt)
}*/
//main();
export default{AP};