//buat array 2 dimensi nya
const numbersOrig = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
]
// js deep copy untuk reset nanti
let numbers = structuredClone(numbersOrig);

//////////////////////////////////////////////////
///////////// function untuk merender ////////////
//////////////////////////////////////////////////

const fnRenderTd = (val) => {
    const mapResult = numbers.map((number, idx) => {
        
        return `
    <table>
        <tr>
            <td name="txt" >${number[0]} </td>
            <td name="txt" >${number[1]}</td>
            <td name="txt" >${number[2]} </td>
            <td name="txt" >${number[3]} </td>
            <td name="txt" ><button id="btn" onclick="fnSort(${idx})">sort</button></td>
        </tr>
        
    </table>`
    }) 
    //utk ambil render
    document.getElementById('render').innerHTML = mapResult.join('')
}

//////////////////////////////////////////////////////
////// function untuk mengurutkan kesamping /////////
////////////////////////////////////////////////////

const fnSort = (idx) => {
    //buat variabel awal
    let numberResult
    //evaluasi 2 kondisi 
    if (numbers[idx][0] < numbers[idx][1]) {
        // sorting descending
        numberResult = numbers[idx].sort((a ,b) => {
            //retun nilai
            return b - a
        })       
    } else {
        // sorting ascending
        numberResult = numbers[idx].sort((a ,b) => {
            //retun nilai
            return a - b
        })
    }
    //render ulang, dan dijadikan argument
    fnRenderTd(numberResult)
}


/////////////////////////////////////////////////////////////
////// function untuk mengurutkan kebawah dan ke atas ////////
///////////////////////////////////////////////////////////


//function Sort Vertikal
const fnSortVertikal = (idx) => {
    let arrBaru = []
            // idx = 1 => [ 2, 6, 10, 14] idx berasal dari value yang disimpan pada HTML
            // mengambil value pada variabel numbers ke variabel arrBaru
        for (var i = 0 ; i< numbers.length ; i++) {
            arrBaru.push(numbers[i][idx])
        }

        // mengurutkan arrBaru
        if (arrBaru[0] < arrBaru[1]){
             //  mengurutkan arrBaru dari kecil ke besar
        for (let i = 0 ; i < arrBaru.length ; i++){
            //buat variabel sementara nya
            let temp
            for (let j = 0 ; j < arrBaru.length ; j++){
                if(arrBaru [i] > arrBaru [j]){
                    //pindahkan ke variabel sementara
                    temp = arrBaru[i]
                    // index ke satu (j pindah ke i)
                    arrBaru[i] = arrBaru[j]
                    //index ke 2 (i pindah ke j)
                    arrBaru[j] = temp
                } 
            }
        }

    } else {
        
      //  mengurutkan arrBaru dari besar ke kecil
      for (let i = 0 ; i < arrBaru.length ; i++){
        //buat variabel sementara nya
        let temp
        for (let j = 0 ; j < arrBaru.length ; j++){
            if(arrBaru [i] < arrBaru [j]){
                //pindahkan ke variabel sementara
                temp = arrBaru[i]
                // index ke satu (j pindah ke i)
                arrBaru[i] = arrBaru[j]
                //index ke 2 (i pindah ke j)
                arrBaru[j] = temp
            } 
        }
    }

    }

        //memindahkan value dari variabel arrBesar ke variabel numbers
        for (let i = 0; i < arrBaru.length; i++) {
            numbers[i][idx] = arrBaru[i]

        }
        // return 
       
        fnRenderTd(numbers)
}
///////////////////////////////////////////////
////////////////// RESET /////////////////////
/////////////////////////////////////////////

function fnReset() {
    numbers = structuredClone(numbersOrig);
    fnRenderTd(numbers);
  }
  
//default
fnRenderTd()

/////////////////////////////////////////////////////////////
// ///////////////////// LEFT ROTATE ///////////////////////
///////////////////////////////////////////////////////////
function mirror(numbers) {
    return numbers.map((arr) => arr.reverse());
  }
  
  function transpose(numbers) {
    let newNumber = [];
    for (let idx = 0; idx < numbers.length; idx++) {
      let newArr = [];
      for (let idx2 = 0; idx2 < numbers.length; idx2++) {
        newArr.push(numbers[idx2][idx]);
      }
      newNumber.push(newArr);
    }
    return newNumber;
  }
  
  function rotate(numbers, direction) {
    if (direction === "left") {
      return transpose(mirror(numbers));
    } else if (direction === "right") {
      return mirror(transpose(numbers));
    }
  }
  
  function fnLeft() {
    numbers = rotate(numbers, "left");
    fnRenderTd(numbers);
  }
  
  /////////////////////////////////////////////////////////////
  // ///////////////////// RIGHT ROTATE ///////////////////////
  ///////////////////////////////////////////////////////////
  function fnRight() {
    numbers = rotate(numbers, "right");
    fnRenderTd(numbers);
  }
  
  fnRenderTd(numbers);
  
