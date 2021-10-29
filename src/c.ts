import { pipe } from "../util.ts" // pipe3

const double = (x: number) => 2 * x

const evenGauss = pipe(double, Math.sqrt, Math.round)

export default evenGauss