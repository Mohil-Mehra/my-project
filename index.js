var a= document.querySelector("h1")
var b= document.querySelector("h2")
var c= document.querySelector("h3")

a.addEventListener("click",function(){
         
    a.style.backgroundColor = "blue"
    a.style.color='red'
})

b.addEventListener("click",function(){
         
    b.style.backgroundColor = "green"
    b.style.color='yellow'
})

c.addEventListener("click",function(){
         
    c.style.backgroundColor = "yellow"
    c.style.color='green'
})


var array = [{name:"Mohil",
              city:"bhopal",
              Image:"https://img.zorores.com/_r/300x400/100/f9/b5/f9b501458823539b6a2004f2cdb98a4a/f9b501458823539b6a2004f2cdb98a4a.jpg", 
},
{
    name:"gourav",
    city:"gadarwara",
    Image:"https://img.zorores.com/_r/300x400/100/d9/bb/d9bb23228e5a641b5a3e9386382dae3a/d9bb23228e5a641b5a3e9386382dae3a.jpg",
},
{
    name:"ved",
    city:"indore",
    Image:"https://img.zorores.com/_r/300x400/100/ba/ee/baee528e64275e7da4964d30274d0fe7/baee528e64275e7da4964d30274d0fe7.jpg",
},
];

var containe="" ;

array.forEach(function(value){

    containe += `
    <div class="h-[30vw] w-[25vw] rounded-[10px] bg-[#3C3C3C]">
            <div class="h-[8vw] ml-[2vw] mt-[2vw] w-[8vw] rounded-full bg-[url(${value.Image})] bg-cover"></div>
            <h1 class="ml-[2vw] mt-[2vw] text-2xl font-bold ">${value.name}</h1>
            <h5 class="ml-[2vw] mt-[10px] leading-[18px] ">${value.city}</h1>
             <button class="text-white rounded-[10px] mt-[25px] bg-blue-500 p-[10px] ml-[1vw] " >Add friend</button>   
        </div>
        `
})

  document.querySelector(".cards").innerHTML= containe;



