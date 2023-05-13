use getrandom;

pub fn generate(size: usize) -> Vec<u8> {
    let mut bytes: Vec<u8> = vec![0; size];

    getrandom::getrandom(&mut bytes).unwrap_or_else(|err| {
        // NB: getrandom::Error has no source; this is adequate display
        panic!("could not retrieve random bytes for uuid: {}", err)
    });

    bytes
}

pub fn default() -> [u8; 12] {
    let mut bytes: [u8; 12] = [0u8; 12];

    getrandom::getrandom(&mut bytes).unwrap_or_else(|err| {
        // NB: getrandom::Error has no source; this is adequate display
        panic!("could not retrieve random bytes for uuid: {}", err)
    });

    bytes
}
