<img src="https://user-images.githubusercontent.com/11075892/189524235-e20dfc88-6986-468c-8920-349887e516ce.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524254-ff66b01a-ea54-4025-8c99-fbc413814c8a.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524263-537b3569-6c45-4ee7-8139-e0fddf9b2226.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524266-aa3bb68c-0cbb-4120-916d-257ecc0db246.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524271-e3c92f62-4ef1-4703-8438-640ae436c8fc.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524273-4c569f99-3ba4-4c70-a22e-ed67b1be34f3.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524274-d3b4faea-b1a1-42fd-a32b-a16ded1a007e.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524281-e6cf4b57-a932-4795-9dc7-22675d209af0.svg" width="100px" />

# ColorID


[![license](https://img.shields.io/npm/l/colorid.js?color=red)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/colorid.js?color=cyan)](https://www.npmjs.com/package/colorid.js) [![downloads](https://img.shields.io/npm/dm/colorid.js)](https://www.npmjs.com/package/colorid.js)

`The ColorID in JavaScript`

`一款基于颜色表示身份的随机 ID 生成器`

## Install

```shell
$ npm i colorid.js
```

## Usage

```js
import colorid from "colorid.js";

colorid(); // => 60d643-d643d0-43d0c6-d0c687
```


## Performance

```rust
crypto.randomUUID    8,374,567 ops/sec
colorid              3,233,853 ops/sec
nanoid               2,842,500 ops/sec
uuid v4                901,464 ops/sec
```


Benchmark configuration: Ubuntu, Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz, Node.js 18.9.0

[(runs: 8291927511)](https://github.com/rustq/colorid.js/runs/8291927511)


## License

[MIT](https://opensource.org/licenses/MIT)

## Links

[rustq: https://github.com/rustq](https://github.com/rustq)
[rustq/colorid: https://github.com/rustq/colorid](https://github.com/rustq/colorid)