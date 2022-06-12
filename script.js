
// // //weight and height is kg and meter respectively

// // // let markWeight = 78;
// // // let markHeight = 1.69;
// // // let johnWeight = 92;
// // // let johnHeight = 1.95;
 
// // // markBMI = markWeight/ markHeight ** 2;
// // // johnBMI =  johnWeight / johnHeight ** 2;

// // // console.log(Boolean ( markBMI > johnBMI));

// // function Bmi(){
// //     let mass1 = document.getElementById("Mass").value;

// // let weight1 = document.getElementById("Weight").value;


// // let mass2 = document.getElementById("Mass").value;

// // let weight2 = document.getElementById("Weight").value;


// // markBMI1 = mass1/ weight1 ** 2;
// // markBMI2 = mass2/ weight2 ** 2;

// // document.write(Boolean(markBMI1>markBMI2));




// // }



// const age = 23;

//  const drink = age >= 56 ? 'wine 🥤' : 'water 💧' ; 
//  console.log(drink);
 

//  let drink1;
//  if(age>=16){
//      drink1 = 'wine';

//  }else{
//      drink1 = 'water';
//  }

//  console.log(drink1);

// console.log(`i like to drink ${age >= 56 ? 'wine 🥤' : 'water 💧'}`);

let  country = 'Nepal';
let continent =  'Asian';
let population =  130000000; 

console.log( country , continent , population);

const isIsland = false ;


console.log(typeof(isIsland ));
console.log(typeof( population ));
console.log(typeof(country));
// console.log(typeof(language));

// isIsland = true;

population > 33000000 ? console.log( "Portugal's population is above average."):
console.log("Poerugal's population is below average.")




// function returnText(){
//     let language = document.getElementById("new").value;

//     switch(language){
//         case 'chinese':
//         case 'mandarin' : 
//             document.getElementById("message").innerHTML = "Most number of native speakers!";
//             break;
//         case 'spanish':
//             document.getElementById("message").innerHTML ='2nd place in number of native speaker';
//             break;
//         case 'english':
//             document.getElementById("message").innerHTML = "3rd place";
//             break;
//         case  'hindi':
//             document.getElementById("message").innerHTML =' Number 4';
//             break;
//         case 'arabic':
//             document.getElementById("message").innerHTML ='5th most spoken language';
//             break;
//         default:
//             document.getElementById("message").innerHTML ='great language too :D' ;   
    
    
//     }
// }

document.getElementById("new").addEventListener("keyup", function(event) {
    if (event.key === 'Enter'){

       let language = document.getElementById("new").value;   
       switch(language){
        case 'chinese':
        case 'mandarin' : 
            document.getElementById("message").innerHTML = "Most number of native speakers!";
            break;
        case 'spanish':
            document.getElementById("message").innerHTML ='2nd place in number of native speaker';
            break;
        case 'english':
            document.getElementById("message").innerHTML = "3rd place in number of native speaker";
            break;
        case  'hindi':
            document.getElementById("message").innerHTML ='  4th place in number of native speaker';
            break;
        case 'arabic':
            document.getElementById("message").innerHTML ='5th most spoken language';
            break;
        default:
            document.getElementById("message").innerHTML ='great language too :D' ;   
    
        }
    }
  
    
});


// switch(language){
//     case 'chinese':
//     case 'mandarin' : 
//         console.log("Most number of native speakers!");
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speaker');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case  'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('great language too :D') ;   














