


////////////////////////////////////////
//////////////SHOW DATA////////////////
//////////////////////////////////////

function showData(){
    let print = ``


    for (let i =0; i<numbers.length; i++){
        print += `<tr>`
        for (let j=0; j<numbers.length; j++){
            print += `<td> ${numbers[i][j]}</td>`
        }
        print += `<td><button  id="sortDataSamping${i}" onclick="sortDataSampingAsc${i}">sort</button></td>`
        print += `</tr>`
    }

    print += `<tr>`
    for (let i=0; i<numbers.length; i++){
        print += `<td><input type="button" id="sortDataBawah${i}" value="Sort" onClick="sortDataBawahAsc(${i})"></td>`
    }
    print += '</tr>'

    document.getElementById("table").innerHTML = print
 }


showData()



///////////////////////////////////////////////
////////mengurutkan ke samping////////////////
/////////////////////////////////////////////


function sortDataSampingDesc(index){
    let sortData = numbers[index] // [1, 2, 3, 4]
    sortData = sortData.sort(function(a, b){ return b-a }) // [4, 3, 2, 1]
    numbers[index] = sortData 
    // [ [4, 3, 2, 1], [..., ..., ...], ... ]

    showData()

    let button = document.getElementById(`sortDataSamping${index}`)
    button.onclick = function(){ // Anonymous function untuk menahan function didalamnya agar tidak langsung dijalankan
        sortDataSampingAsc(index)
    }
}

function sortDataSampingAsc(index){
    let sortData = numbers[index]
    sortData = sortData.sort(function(a, b){ return a-b }) 
    numbers[index] = sortData 

    showData()
}