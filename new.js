const nameList=["Yasin ","Laila","Yazdan","Naz","Ali","Frishta"];
const sortedNames=nameList.sort((a,b)=>{
    return b.localeCompare(a);
});
// const reversed=nameList.reverse();
const numbers=["z","l","e","j","r","a"];
const sortedNumbers=numbers.sort((a,b)=>{
return b.localeCompare(a);
})
  const founded= numbers.findIndex((letter)=>{
  return letter==="j";
})

const students=[
{
    id: 1,
    name: "Muhammad",
    lastName:"Alizada",
    score:90
},
{
    id: 2,
    name: "Muhammad Reza",
    lastName:"Rahmani",
    score:99
},
{
    id: 3,
    name: "Muhammad Taha",
    lastName:"Rahman",
    score:99
},
]

 
const UpdatedStudents=[...students,{id:4,name:"Ali",lastName:"Alizada",score:89},{id:5,name:"Jawid",lastName:"Nasiri",score:90}];
