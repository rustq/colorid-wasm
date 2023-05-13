pub mod rng;
use once_cell::sync::Lazy;
use std::sync::Mutex;

const POOL_SIZE_MULTIPLIER: usize = 128;
const DEFAULT_SIZE: usize = 31;
const POOL_SIZE: usize = DEFAULT_SIZE * POOL_SIZE_MULTIPLIER;

static POOL: Lazy<Mutex<[u8; POOL_SIZE]>> = Lazy::new(|| Mutex::new([0; POOL_SIZE]));
static POOL_OFFSET: Lazy<Mutex<usize>> = Lazy::new(|| Mutex::new(POOL_SIZE));

mod hex;

pub fn default() -> String {
    let bytes = &mut POOL.lock().unwrap();
  
    let mut pointer = *POOL_OFFSET.lock().unwrap();
  
    let mut id: [u8; 31] = [hex::DASH; 31];

    if pointer + 12 > POOL_SIZE {
        let buf = rng::generate(POOL_SIZE);
        for i in 0..POOL_SIZE {
            bytes[i] = buf[i];
        }
        pointer = 0;
    }
  
    for i in 0..4 {
        let r = hex::hex(bytes[pointer + (i * 3)]);
        let g = hex::hex(bytes[pointer + (i * 3) + 1]);
        let b = hex::hex(bytes[pointer + (i * 3) + 2]);
        id[i * 8] = hex::NUMBER_SIGN;
        id[i * 8 + 1] = r[0];
        id[i * 8 + 2] = r[1];
        id[i * 8 + 3] = g[0];
        id[i * 8 + 4] = g[1];
        id[i * 8 + 5] = b[0];
        id[i * 8 + 6] = b[1];
    }
  
    *POOL_OFFSET.lock().unwrap() = pointer + 12;


    unsafe {
        std::str::from_utf8_unchecked_mut(&mut id).to_owned()
    }
}


#[cfg(test)]
mod test_color {
    use super::*;

    #[test]
    fn test_colorid() {
        assert_eq!(colorid!().len(), 31);
    }

}

#[macro_export]
macro_rules! colorid {
    // simple
    () => {
        $crate::default()
    };
}