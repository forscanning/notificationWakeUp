// ==UserScript==
// @name         NotificationWakeUp_zAutopobieraniem
// @version      2.2.0
// @description  Sweet Dreams!!! ;)
// @author       Adam Charusta
// @match        http://e-ross/_layouts/15/ItApp/sd/EventList.aspx
// @updateURL https://github.com/forscanning/notificationWakeUp/blob/master/src/userscripts/auto-download.user.js
// @downloadURL https://github.com/forscanning/notificationWakeUp/blob/master/src/userscripts/auto-download.user.js
// ==/UserScript==
(function () {

    const createCookie = (name, val, time) => {
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        document.cookie = `${cookieName}=${cookieVal}; max-age=${time}`;
    }

    const getCookie = (name) => {
        const cookies = document.cookie.split(/; */);
        if (cookies.length >= 1) {
            for (let i = 0; i < cookies.length; i++) {
                const cookieName = cookies[i].split("=")[0];
                const cookieVal = cookies[i].split("=")[1];
                if (cookieName === name) {
                    return cookieVal
                }
            }
        }
    }

    const trElementsList = [...document.querySelectorAll('#ctl00_PlaceHolderMain_Tabs_tabNiePodjete_GridZglNieprzydzielone tbody > tr')];
    trElementsList.splice(0, 1);

    if (trElementsList.length >= 100) {
        trElementsList.length = 100;
    }

    if (trElementsList.length >= 1) {
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

        const notAlarmList = [];

        trElementsList.forEach(item => {
            itemChildrenList.push({
                id: item.children[0].innerText,
                category: item.children[4].innerText,
                href: ((item.children[9]).children)[0].href,
            })
        })

        const audio = document.createElement('audio');
        audio.setAttribute('src', 'https://www.kozco.com/tech/organfinale.wav');
        audio.setAttribute('loop', 'true');
        audio.setAttribute('preload', 'none');

        document.body.appendChild(audio);

        for (let i = 0; i < trElementsList.length; i++) {
            if (itemChildrenList[i].category !== "Modem GSM" && itemChildrenList[i].category !== "Modem DSL" && itemChildrenList[i].category !== "Switch" && itemChildrenList[i].category !== "Brak po³¹czenia" && itemChildrenList[i].category !== "Joby SQL") {
                audio.play();
                createPopup();
                break;
            } else {
                if (itemChildrenList[i].category !== "Joby SQL" && itemChildrenList[i].category !== "Brak po³¹czenia") {
                    notAlarmList.push(itemChildrenList[i]);
                }
            }
        }

        if (typeof getCookie('numberOfQuest') === 'undefined' || getCookie('numberOfQuest') <= 0) {
            createCookie('numberOfQuest', notAlarmList.length, 300);
        }

        if (notAlarmList.length >= 1 || typeof getCookie('numberOfQuest') !== "undefined") {
            if (getCookie('numberOfQuest') !== 0) {
                const cookie = Number(getCookie('numberOfQuest')) || false;

                if (getCookie('numberOfQuest') > 0) {
                    window.open('http://e-ross/_layouts/15/ItApp/sd/EventList.aspx', '_blank');
                    createCookie('numberOfQuest', cookie - 1, 300);
                    window.open(itemChildrenList[getCookie('numberOfQuest')].href, '_self');
                }
            }
        }
    }
})();
