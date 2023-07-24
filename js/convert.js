const CRYPTO = {
    th: 100000,
    ph: 1000000,
    eh: 10000000,
}

function convert({hase, currency}) {
    return hase * CRYPTO[currency];
}