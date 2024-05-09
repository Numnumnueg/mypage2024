let count = 0 ; // เอาไว้นับคะแนนที่กดแล้วถูกต้อง


function checkAnswer (answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM" ;
        result.style.color = "green" ;
        count = 1 ; // count = count + 1 ;

    } else {
        result.textContent = "Incorrect ; Try again." ;
        result.style.color = 'red' ;
    }
    

} 

function correctOption (answer) {
    const Option = document.getElementById('Option');
    const result3 = document.getElementById ('result3');
    if (answer === 'a') {
        Option.textContent = "ถูกต้อง CM ย่อมาจาก Construction Management" ;
        Option.style.color = "green" ;
        count++ ; // count = บวกคะแนนเพิ่ม 1 คะแนน ถ้ากดถูก

    } else {
        Option.textContent = "Incorrect ; Try again." ;
        Option.style.color = 'red' ;
    }

    result3.textContent = "คุณได้คะแนนทั้งหมด" + count + "คะแนน"
    count = 0 ;
}


