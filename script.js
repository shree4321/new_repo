
// callback function

// const datas=[
//     {name:"Ajay", profession:"engineer"},
//     {name:"Anuj", profession:"engineer"}
// ];

// function getDatas(){

//     setTimeout(()=>{
//         let output ="";
//         datas.forEach((data,index)=>{
//             output += `<li> ${data.name} </li>`;
//             // console.log(`${index}`);
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createdata(newdata, callback){
//     setTimeout(()=>{
//         datas.push(newdata);
//         callback();
//     },2000);
// }

// // getDatas();
// createdata({name:"Prem", profession:"engineer"}, getDatas);





//promise
// const datas=[
//     {name:"Ajay", profession:"engineer"},
//     {name:"Anuj", profession:"engineer"}
// ];

// function getDatas(){

//     setTimeout(()=>{
//         let output ="";
//         datas.forEach((data,index)=>{
//             output += `<li> ${data.name} </li>`;
//             // console.log(`${index}`);
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createdata(newdata){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newdata);
//             let error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("not applicable")
//             }
//         },2000);
//     })
    
// }

// // getDatas();
// createdata({name:"Prem", profession:"engineer"}).then(getDatas).catch(err =>{ console.log(err)})

//async & await function
const datas=[
    {name:"Ajay", profession:"engineer"},
    {name:"Anuj", profession:"engineer"}
];

function getDatas(){

    setTimeout(()=>{
        let output ="";
        datas.forEach((data,index)=>{
            output += `<li> ${data.name} </li>`;
            // console.log(`${index}`);
        })
        document.body.innerHTML = output
    }, 1000);
}
function createdata(newdata){

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                datas.push(newdata);
                let error=false;
                if(!error){
                    resolve();
                }else{
                    reject("not applicable")
                }
            },2000);
        })
        
    }
    
async function start(){
    await createdata({name:"Prem", profession:"engineer"})
    getDatas();
}

start();