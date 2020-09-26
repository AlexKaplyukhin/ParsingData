export function Format(obj) {
    var isoFormat = ['P'];

    if (obj.years != 0) {
        isoFormat.push(obj.years);
        isoFormat.push('Y');
    }
    if (obj.months != 0) {
        isoFormat.push(obj.months);
        isoFormat.push('M');
    }
    if (obj.days != 0) {
        isoFormat.push(obj.days);
        isoFormat.push('D');
    }
    if (obj.hours != 0 || obj.minutes != 0 || obj.seconds != 0) {
        isoFormat.push('T');
    }
    if (obj.hours != 0) {
        isoFormat.push(obj.hours);
        isoFormat.push('H');
    }
    if (obj.minutes != 0) {
        isoFormat.push(obj.minutes);
        isoFormat.push('M');
    }
    if (obj.seconds != 0) {
        isoFormat.push(obj.seconds);
        isoFormat.push('S');
    }
    if (isoFormat.length === 1) {
        isoFormat.push('T0S');
    }
    return isoFormat.join('');
}