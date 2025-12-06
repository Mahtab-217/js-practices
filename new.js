const personOne={
    id:2, name:"Ali", lastName:"Qadiri", dob:Date(), phone:"0798675849"}
personOne.id=9;
personOne.name="Ali Reza";
personOne.gender="male";
personOne.age=23;
const listofStudents=[
    {
        id: 1,
        name:"Hadi",
        lastName:"Gholami",
        age: 12,
        year: new Date().getFullYear(),
    },
    {
        id: 2,
        name:"Mah",
        lastName:"Nasiri",
        age: 22,
        year: new Date().getFullYear(),
    },
    {
        id: 3,
        name:"Hamid",
        lastName:"Gholami",
        age: 32,
        year: new Date().getFullYear(),
    },
    {
        id: 4,
        name:"Nasa",
        lastName:"Azad",
        age: 28,
        year: new Date().getFullYear(),
    },
    {
        id: 5,
        name:"Hana",
        lastName:"Farzad",
        age: 92,
        year: new Date().getFullYear(),
    },
]
const students=["Ali","Zia","Ahmad","Yazdan"];
const sortedStudents=students.sort((a,b)=>{
if(a>b){
    return b-a;
}
else{
    return a-b;
}
})
const numbers=[4,5,59,234,62,32,1,3,54]
const sortedNumbers=numbers.sort((a,b)=>a-b);
const indexed=students.findIndex((index)=>index==3);
