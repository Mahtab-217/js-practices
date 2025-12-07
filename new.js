const nameList=["Yasin ","Laila","Yazdan","Naz","Ali","Frishta"];
const sortedNames=nameList.sort((a,b)=>{
    return b.localeCompare(a);
});
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
   const result=students.findIndex((student)=>{
    return student.name==="Muhammad Reza";
   });
   if(result!== -1){
    console.log("Student exists");

   }
   else{
    console.log("Students was not found");
   }
