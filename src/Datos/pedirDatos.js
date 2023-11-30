import data from "../data/data.json";

export const pedirDatos = ()=>{
return new Promise((resolve, reject)=>{
        resolve(data)
})
}

export const pedirItemId = (id) =>{
        return new Promise((resolve, reject)=>{
   const item = data.find((el)=> el.id === id)
if(item){
resolve(item)
}else{ rejct({error: "no encontrado"})
        
}
   })
}
