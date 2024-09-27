import axios from "axios";
async function getData(number) {



const {data:response }= await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)



let posts={}



return new Promise(async(resolve,reject)=>{

    const joinResponse =  await Object.assign({},response,{posts:post});
    resolve ( joinResponse);
})

}
export default getData;

getData(1);

