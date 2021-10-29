import { pipe3 as pipe } from "../util.ts"

const half = (x: number) => Math.floor(x / 2)
const gauss = (x: number) => (x + 1) * x / 2
const double = (x: number) => x * 2

const evenGauss = pipe(half, gauss, double)

export default evenGauss