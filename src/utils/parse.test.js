import { parseIso } from './parse'
test('1', () => {
    expect(parseIso('P2Y2M3DT4H5M30S')).toEqual({
        seconds: 30,
        minutes: 5,
        hours: 4,
        days: 3,
        months: 2,
        years: 2,
    });
});

test('2', () => {
    expect(parseIso('P2Y2M3D')).toEqual({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 3,
        months: 2,
        years: 2,
    });
});


test('3', () => {
    expect(parseIso('P11M')).toEqual({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 11,
        years: 0,
    });
});

test('4', () => {
    expect(parseIso('PT4H5M30S')).toEqual({
        seconds: 30,
        minutes: 5,
        hours: 4,
        days: 0,
        months: 0,
        years: 0,
    });
});
test('5', () => {
    expect(parseIso('PT0S')).toEqual({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 0,
        years: 0,
    });
});