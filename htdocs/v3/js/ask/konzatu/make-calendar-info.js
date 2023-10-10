(function () {
    "use strict";
    var jsonPath = '/v3/js/ask/konzatu/schedules-info.json'

    var iconAttrs = [
        {
            "src": "/v3/image/ask/konzatu/red.svg",
            "alt": "つながりにくい時間帯",
            "class": "icon-status"
        },
        {
            "src": "/v3/image/ask/konzatu/yellow.svg",
            "alt": "比較的つながりやすい時間帯",
            "class": "icon-status"
        },
        {
            "src": "/v3/image/ask/konzatu/blue.svg",
            "alt": "つながりやすい時間帯",
            "class": "icon-status"
        }
    ];


    function getShiftedDateObject(year, month, day) {
        var shiftYear = typeof year === "number" ? year : 0;
        var shiftMonth = typeof month === "number" ? month : 0;
        var shiftDay = typeof day === "number" ? day : 0;

        var date = new Date();
        date.setYear(date.getFullYear() + shiftYear);
        date.setMonth(date.getMonth() + shiftMonth);
        date.setDate(date.getDate() + shiftDay);

        return date;
    }

    var DateWrapper = function (dateObject) {
        this.year = dateObject.getFullYear();
        this.month = dateObject.getMonth() + 1;
        this.date = dateObject.getDate();
        this.day = dateObject.getDay();
        this.label = this.dayOfWeekJapanese[dateObject.getDay()];
    };
    DateWrapper.prototype.dayOfWeekJapanese = ["日", "月", "火", "水", "木", "金", "土"];

    function getWeek(data) {
        var week = [];

        function findScheduleIndex(month, date) {
            for (var i = 0; i < data.schedules.length; i++) {
                if (data.schedules[i].month === month && data.schedules[i].date === date) {
                    return i;
                }
            }
            return -1;
        }

        for (var i = 0; i < 7; i++) {
            var dateWrapperObject = new DateWrapper(getShiftedDateObject(0, 0, i));
            var schedule;

            var schedulesIndex = findScheduleIndex(dateWrapperObject.month, dateWrapperObject.date);
            if (schedulesIndex > -1) {
                schedule = data.schedules[schedulesIndex].states;
            } else {
                schedule = data.defaultSchedules[dateWrapperObject.day].states;
            }

            week.push(
                {
                    "date": dateWrapperObject,
                    "schedule": schedule
                }
            );

        }
        return week;
    }

    function create(data) {
        var i, j;
        var week = getWeek(data);
        var table = document.createElement('table');
        var thead = document.createElement('thead');
        var theadDayOfWeekTr = document.createElement('tr');
        var theadDateTr = document.createElement('tr');

        theadDayOfWeekTr.appendChild(document.createElement('th'));
        theadDateTr.appendChild(document.createElement('th'));
        for (i = 0; i < week.length; i++) {
            var dayOfWeekTh = document.createElement('th');
            var dateTh = document.createElement('th');
            dayOfWeekTh.innerText = week[i].date.date + "日";
            dateTh.innerText = week[i].date.label;

            theadDayOfWeekTr.appendChild(dayOfWeekTh);
            theadDateTr.appendChild(dateTh);
        }
        thead.appendChild(theadDayOfWeekTr);
        thead.appendChild(theadDateTr);

        var tbody = document.createElement('tbody');
        for (i = 0; i < data.timetables.length; i++) {
            var tbodyDateTr = document.createElement('tr');

            var tbodyDateTh = document.createElement('th');
            tbodyDateTh.innerText = data.timetables[i][0];
            tbodyDateTr.appendChild(tbodyDateTh);

            for (j = 0; j < week.length; j++) {
                var tbodyDateTd = document.createElement('td');
                var scheduleStatus = week[j]["schedule"][i];
                if (scheduleStatus > 0) {
                    var statusIcon = document.createElement('img');
                    statusIcon.src = iconAttrs[week[j]["schedule"][i] - 1].src;
                    statusIcon.setAttribute("alt", iconAttrs[week[j]["schedule"][i] - 1].alt);
                    statusIcon.setAttribute("class", iconAttrs[week[j]["schedule"][i] - 1].class);

                    tbodyDateTd.appendChild(statusIcon);
                } else {
                    tbodyDateTd.innerText = "-";
                }
                tbodyDateTr.appendChild(tbodyDateTd);
            }
            tbody.appendChild(tbodyDateTr);
        }

        table.appendChild(thead);
        table.appendChild(tbody);


        var target = document.getElementById("calendar");

        table.setAttribute("class", "status-calendar");
        target.appendChild(table);
    }

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status !== 0) {
            if (this.response) {
                var res = this.response;
                if (JSON) {
                    if (navigator.userAgent.indexOf('Trident') !== -1) {
                        res = JSON.parse(this.response);
                    }
                }

                create(res);
            }
        }
    };
    xmlHttpRequest.open('GET', jsonPath, true);
    xmlHttpRequest.responseType = 'json';
    xmlHttpRequest.send(null);
}());