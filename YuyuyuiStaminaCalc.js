(function() {
    'use strict';
    const maxStaminaEdit = document.getElementById('maxStamina');
    const calcResult = document.getElementById('calcResult');
    const cookieName = "CalYuyuiStamina";
    let maxStamina;

    function calcStamina() {
        const recoverPerHour = 60 / 5;
        maxStamina = parseInt(maxStaminaEdit.value);
        
        calcResult.innerText = "";
        for (let i = 1; i <= 24; i++) {
            let targetStamina = maxStamina - recoverPerHour * i;
            if (targetStamina > 0) {
    //            calcResult.innerHTML += `${i}時間放置するとしたら、${targetStamina}以下に減らしておいてください。<br>`;
                let p = document.createElement('p');
                p.classList.add('result');
                p.innerHTML = `${i}時間放置するとしたら、${targetStamina}以下に減らしておいてください。`;
                calcResult.appendChild(p);
            }
            else {
                break;
            }
        }
        let hour = Math.floor(maxStamina / recoverPerHour);
        let min = (maxStamina - recoverPerHour * hour) * 5;
        let p = document.createElement('p');
        p.innerHTML = `全開するまでに、<strong class="recover">${hour}時間 ${min}分</strong>掛かります。`;
        calcResult.appendChild(p);
    }

    maxStaminaEdit.onchange = (event) => {
        calcStamina();
        document.cookie = `${cookieName}=${maxStamina};max-age=1728000`;
    }

    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)CalYuyuiStamina\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieValue.length > 0) {
        maxStaminaEdit.value = cookieValue;
        calcStamina();    
    }
    else {
        ;
    }

})();

