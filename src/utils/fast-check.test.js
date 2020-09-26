import * as fc from 'fast-check';
import { Format } from './format'
import { parseIso } from './parse'
test('1', () => {
    fc.assert(
        fc.property(
            fc.record({
                hours: fc.nat(),
                seconds: fc.nat(),
                minutes: fc.nat(),
                days: fc.nat(),
                months: fc.nat(),
                years: fc.nat(),
            }), obj => {
                expect(parseIso(Format(obj))).toEqual(obj);
            }
        ))
});