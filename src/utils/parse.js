export function parseIso(iso) {
    var units = ['Y', 'M', 'D', 'H', 'S'];
    var indexOfT = iso.indexOf('T')
    var lastSymbolIndex = 0;
    let object = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 0,
        years: 0,
    };
    for (let index = 1; index < iso.length; index++) {
        var char = iso[index];
        if (index === indexOfT) {
            lastSymbolIndex = index;
        } else if (units.includes(char)) {
            var number = Number.parseInt(iso.slice(lastSymbolIndex + 1, index + 1), 10)
            switch (char) {
                case 'Y':
                    object['years'] = number;
                    break;
                case 'M':
                    if (indexOfT === -1) {
                        object['months'] = number;
                    } else if (index > indexOfT) {
                        object['minutes'] = number;
                    } else {
                        object['months'] = number;
                    }
                    break;
                case 'D':
                    object['days'] = number;
                    break;
                case 'H':
                    object['hours'] = number;
                    break;
                case 'S':
                    object['seconds'] = number;
                    break;
            }

            lastSymbolIndex = index;

        }

    }
    return object;

}