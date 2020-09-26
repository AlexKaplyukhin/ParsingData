import { Format } from './format'
test('1', () => {
    expect(Format({
        hours: 4,
        seconds: 30,
        minutes: 5,
        days: 3,
        months: 2,
        years: 2,
    })).toEqual('P2Y2M3DT4H5M30S');
});
test('2', () => {
    expect(Format({
        seconds: 30,
        minutes: 5,
        hours: 4,
        days: 0,
        months: 0,
        years: 0,
    })).toEqual('PT4H5M30S');
});
test('3', () => {
    expect(Format({
        hours: 0,
        seconds: 0,
        minutes: 0,
        days: 3,
        months: 2,
        years: 2,
    })).toEqual('P2Y2M3D');
});
test('4', () => {
    expect(Format({
        hours: 0,
        seconds: 30,
        minutes: 0,
        days: 0,
        months: 0,
        years: 0,
    })).toEqual('PT30S');
});
test('5', () => {
    expect(Format({
        hours: 0,
        seconds: 30,
        minutes: 5,
        days: 3,
        months: 2,
        years: 2,
    })).toEqual('P2Y2M3DT5M30S');
});
test('6', () => {
    expect(Format({
        hours: 0,
        seconds: 0,
        minutes: 0,
        days: 0,
        months: 0,
        years: 0,
    })).toEqual('PT0S');
});