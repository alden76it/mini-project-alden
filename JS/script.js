// start Javascript

console.log("linked success");

function validationFrom() {
    let input_bb = document.getElementById('input_bb').value;
    let input_tb = document.getElementById('input_tb').value;
    
    if (input_bb == '') {
        alert('Data input berat badan kosong');
    } else if (input_tb == '') {
        alert('Data input tinggi badan kosong');
     } else {
        let converttbTom = input_tb / 100;
        let inputTbpow = Math.pow(converttbTom, 2);
        let resultBMI = input_bb / inputTbpow;
        console.log(resultBMI)
    }

}