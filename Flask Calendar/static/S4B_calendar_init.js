// (C) INIT CALENDAR
init: () => {
    // (C1) GET HTML ELEMENTS
    cal.hMth = document.getElementById("calMonth");
    cal.hYear = document.getElementById("calYear");
    cal.hCD = document.getElementById("calDays");
    cal.hCB = document.getElementById("calBody");
    cal.hFormWrap = document.getElementById("calForm");
    cal.hForm = cal.hFormWrap.querySelector("form");
    cal.hfID = document.getElementById("evtID");
    cal.hfStart = document.getElementById("evtStart");
    cal.hfEnd = document.getElementById("evtEnd");
    cal.hfTxt = document.getElementById("evtTxt");
    cal.hfColor = document.getElementById("evtColor");
    cal.hfBG = document.getElementById("evtBG");
    cal.hfDel = document.getElementById("evtDel");

    // (C2) MONTH & YEAR SELECTOR
    let now = new Date(), nowMth = now.getMonth() + 1;
    for (let [i, n] of Object.entries({
        1: "January", 2: "Febuary", 3: "March", 4: "April",
        5: "May", 6: "June", 7: "July", 8: "August",
        9: "September", 10: "October", 11: "November", 12: "December"
    })) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = n;
        if (i == nowMth) { opt.selected = true; }
        cal.hMth.appendChild(opt);
    }
    cal.hYear.value = parseInt(now.getFullYear());

    // (C3) ATTACH CONTROLS
    cal.hMth.onchange = cal.load;
    cal.hYear.onchange = cal.load;
    document.getElementById("calBack").onclick = () => cal.pshift();
    document.getElementById("calNext").onclick = () => cal.pshift(1);
    document.getElementById("calAdd").onclick = () => cal.show();
    cal.hForm.onsubmit = () => cal.save();
    document.getElementById("evtCX").onclick = () => cal.hFormWrap.close();
    cal.hfDel.onclick = cal.del;

    // (C4) DRAW DAY NAMES
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (cal.mon) { days.push("Sun"); } else { days.unshift("Sun"); }
    for (let d of days) {
        let cell = document.createElement("div");
        cell.className = "calCell";
        cell.innerHTML = d;
        cal.hCD.appendChild(cell);
    }

    // (C5) LOAD & DRAW CALENDAR
    cal.load();
},
    // ...
    window.onload = cal.init;