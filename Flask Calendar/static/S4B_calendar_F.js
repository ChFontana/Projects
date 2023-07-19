// (G) SHOW EVENT FORM
show: id => {
    if (id) {
        cal.hfID.value = id;
        cal.hfStart.value = cal.events[id]["s"];
        cal.hfEnd.value = cal.events[id]["e"];
        cal.hfTxt.value = cal.events[id]["t"];
        cal.hfColor.value = cal.events[id]["c"];
        cal.hfBG.value = cal.events[id]["b"];
        cal.hfDel.style.display = "inline-block";
    } else {
        cal.hForm.reset();
        cal.hfID.value = "";
        cal.hfDel.style.display = "none";
    }
    cal.hFormWrap.show();
},