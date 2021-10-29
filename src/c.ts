import { pipe3 as pipe } from "../util.ts"

const double = (x: number) => 2 * x

const evenGauss = pipe(double, Math.sqrt, Math.round)

export default evenGauss