// ==UserScript==
// @name         NotificationWakeUp_bezAutopobierania
// @version      1.2.0
// @description  Sweet Dreams!!! ;)
// @author       Adam Charusta
// @match        http://e-ross/_layouts/15/ItApp/sd/EventList.aspx
// @updateURL https://github.com/forscanning/notificationWakeUp/blob/master/src/userscripts/auto-download.user.js
// @downloadURL https://github.com/forscanning/notificationWakeUp/blob/master/src/userscripts/auto-download.user.js
// ==/UserScript==

(function () {
    const trElementsList = [...document.querySelectorAll('#ctl00_PlaceHolderMain_Tabs_tabNiePodjete_GridZglNieprzydzielone tbody > tr')];
    trElementsList.splice(0, 1);

    if (trElementsList.length >= 100) {
        trElementsList.length = 100;
    }

    if (trElementsList.length > 1) {
        const createPopup = () => {
            const div = document.createElement('div');
            div.id = "div"
            div.style.backgroundColor = "#ddd";
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.left = "0%";
            div.style.top = "0%";
            div.style.position = "absolute";
            div.style.cursor = "pointer";
            div.innerText = "!!!KLIKNIJ ABY WYŁĄCZYĆ ALARM!!!!";
            div.style.fontSize = '72px';
            div.style.textAlign = 'center';
            div.style.lineHeight = '100vh';
            div.addEventListener("click", (e) => endSong(e));
            document.body.appendChild(div);
        }

        const endSong = event => {
            audio.pause();
            document.body.removeChild(event.target);
        }
        const itemChildrenList = [];

        trElementsList.forEach(item => {
            const itemChildren = [...item.children];
            itemChildrenList.push(itemChildren[4]);
        })

        const audio = document.createElement('audio');
        audio.setAttribute('src', 'http://www.mikefromchurch.com/ringtones/RINGTONES-wav/hawaii_five-o.wav');
        audio.setAttribute('loop', 'true');
        audio.setAttribute('preload', 'none');

        document.body.appendChild(audio);


        for (let i = 0; i < itemChildrenList.length; i++) {
            if (itemChildrenList[i].innerText != "Modem GSM" && itemChildrenList[i].innerText != "Modem DSL" && itemChildrenList[i].innerText != "Switch" && itemChildrenList[i].innerText != "Brak połączenia" && itemChildrenList[i].innerText != "Joby SQL") {
                audio.play();
                createPopup();
                break;
            }
        }
    }
})();