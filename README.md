<img src="https://user-images.githubusercontent.com/11075892/189524235-e20dfc88-6986-468c-8920-349887e516ce.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524254-ff66b01a-ea54-4025-8c99-fbc413814c8a.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524263-537b3569-6c45-4ee7-8139-e0fddf9b2226.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524266-aa3bb68c-0cbb-4120-916d-257ecc0db246.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524271-e3c92f62-4ef1-4703-8438-640ae436c8fc.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524273-4c569f99-3ba4-4c70-a22e-ed67b1be34f3.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524274-d3b4faea-b1a1-42fd-a32b-a16ded1a007e.svg" width="100px" /><img src="https://user-images.githubusercontent.com/11075892/189524281-e6cf4b57-a932-4795-9dc7-22675d209af0.svg" width="100px" />

# ColorID


[![license](https://img.shields.io/npm/l/colorid.js?color=red)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/colorid.js?color=cyan)](https://www.npmjs.com/package/colorid.js) [![downloads](https://img.shields.io/npm/dm/colorid.js)](https://www.npmjs.com/package/colorid.js)

Color as Identify - The unique 4-colors-ID string generator in `JavaScript`

The performance of `ColorID` is better than `UUID` and `NanoID` (The algorithm of `ColorID` is actually very similar to the `UUID.V4`)

If we use `ColorID` to represent identities in social networks, we can easily generate personalized social information for users, such as avatars, NFTs, etc.

The `ColorID` is consisted by 4 colors in the RGB channel from 12 unsigned 8 bits numbers (`u8`), so the theoretical total of `ColorID` is `(2^8)^12` = `2^96` ≈ `7*10^28`, which means that even if the `ColorID` is generated for every 7.8 billion people in the world every second, it will take 300 billion years to use up all `ColorIDs`. And `ColorID` provides safety by using hardware random generator, can also be used in clusters.

Because the Four color theorem, if we need to color the regions of any avatars or NFTs so that no two adjacent regions have the same color, four colors are enough!

一款基于 4 种颜色来表示身份的 `JavaScript` 随机 ID 生成器。

在性能表现上 `ColorID` 比 `UUID`、`NanoID` 等库表现更好 (虽然 `ColorID` 的生成算法实际上和 `UUID.V4` 非常相似)。

如果我们用 `ColorID` 表示社交网络中的身份，可以轻松地为用户生成个性化的社交信息：如头像、数字藏品等。

实际上 `ColorID` 是由 4 种颜色在 RGB 通道内的 12 个 8 位无符号整型数字 (`u8`) 组成，故 `ColorID` 理论上的总数为 `(2^8)^12` = `2^96` ≈ `7*10^28`，也就是说即使每秒都为全球 78 亿人中的每个人都生成一个 `ColorID`，也要花 3000 亿年才会将所有 `ColorID` 用完。此外 `ColorID` 使用强随机函数来生成随机数，故也可在集群使用中提供安全性。

因为四色定理的原因，如果我们想要为头像或者数字藏品涂色且不会出现邻接区域颜色相同, 有四种颜色就足够了！

## Install

```shell
$ npm i colorid.js
```

## Usage

```js
import colorid from "colorid.js";

colorid(); // #5B34F9-#34F9DF-#F9DF4E-#DF4EB5
```

`#5B34F9-#34F9DF-#F9DF4E-#DF4EB5`

<img src="https://user-images.githubusercontent.com/11075892/189944569-e00bfbaf-7e6e-408d-8a60-32994f79a2a2.svg" width="300px">

## Performance

```rust
crypto.randomUUID    8,829,532 ops/sec
colorid              3,252,649 ops/sec
nanoid               2,925,204 ops/sec
uuid v4                910,855 ops/sec
```


Benchmark configuration: Ubuntu, Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz, Node.js 18.9.0

[(runs: 3045998209)](https://github.com/rustq/colorid.js/actions/runs/3045998209/jobs/4908256305)


## License

[MIT](https://opensource.org/licenses/MIT)


## ColorID in Other Languages

- [Rust](https://github.com/rustq/colorid)
