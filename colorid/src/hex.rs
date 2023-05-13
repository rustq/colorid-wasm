pub const NUMBER_SIGN: u8 = b'#';
pub const DASH: u8 = b'-';

pub const UPPER_U8: [u8; 16] = [
    b'0', b'1', b'2', b'3', b'4', b'5', b'6', b'7', b'8', b'9', b'A', b'B',
    b'C', b'D', b'E', b'F',
];

pub fn hex(number: u8) -> [u8; 2] {
    let low = number % 16;
    let high = (number - low) / 16;
    [UPPER_U8[high as usize], UPPER_U8[low as usize]]
}