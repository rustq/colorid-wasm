mod utils;

use wasm_bindgen::prelude::*;
use colorid as native;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(js_name = colorid)]
pub fn colorid() -> String {
    native::colorid!()
}
