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

        document.getElementById("resultBMI").innerText = input_bb / inputTbpow;

        if (resultBMI < 18.5) {
            document.getElementById("comment").innerHTML = "Kekurangan berat badan";
        }
        else if (resultBMI >= 18.5 && resultBMI <= 25) {
            document.getElementById("comment").innerHTML = "Normal (Ideal)";
        }
        else if (resultBMI >= 25 && resultBMI <= 29.9) {
            document.getElementById("comment").innerHTML = "Kelebihan berat badan";
        } 
        else if (resultBMI >= 30) {
            document.getElementById("comment").innerHTML = "Kegemukan (obesitas)";
        }
        return false;
        
        let statusBb = document.getElementById("comment").value;
    }

}