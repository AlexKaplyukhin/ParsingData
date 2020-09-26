new Vue({
    el: '#id',
    data: {
        props: {
            day: Number,
            dayS: Number,
            hour: Number,
            hourS: Number,
            minute: Number,
            minuteS: Number,
            second: Number,
            secondS: Number,
            timeInSeconds: Number,
            mathThisDay: Number,
            mathThisHour: Number,
            mathThisMinute: Number,
        },
    },
    methods: {
        mathTime: function() {
            timeInSeconds = second + minute * 60 + hour * 360 + day * 24 * 360;
        },

        mathDay: function() {
            mathThisDay = timeInSeconds % (day * 24 * 360);
            dayS = (timeInSeconds - mathThisDay) / (day * 24 * 360);
        },

        mathHour: function() {
            mathThisHour = mathThisDay % (hour * 360);
            hourS = (mathThisDay - mathThisHour) / (hour * 360);
        },
        mathMinute: function() {
            mathThisMinute = mathThisHour % (minute * 60);
            minuteS = (mathThisHour - mathThisMinute) / (minute * 60);
        },
        mathSecond: function() {
            secondS = mathThisMinute;
        }
    }
})