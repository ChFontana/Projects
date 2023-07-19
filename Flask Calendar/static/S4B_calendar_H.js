// (H) SAVE EVENT
save: () => {
    // (H1) COLLECT DATA
    // s & e : start & end date
    // c & b : text & background color
    // t : event text
    var data = {
        s: cal.hfStart.value.replace("T", " "),
        e: cal.hfEnd.value.replace("T", " "),
        t: cal.hfTxt.value,
        c: cal.hfColor.value,
        b: cal.hfBG.value
    };
    if (cal.hfID.value != "") { data.id = parseInt(cal.hfID.value); }

    // (H2) DATE CHECK
    if (new Date(data.s) > new Date(data.e)) {
        alert("Start date cannot be later than end date!");
        return false;
    }

    // (H3) SAVE
    cal.ajax("save", data, res => {
        if (res == "OK") {
            cal.hFormWrap.close();
            cal.load();
        } else { alert(res); }
    });
    return false;
},