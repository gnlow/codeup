export const pipe = 
    <A>(...fs: ((a: A) => A)[]) =>
    (init: A) =>
    fs.reduce((v, f) => f(v), init)

export const pipe2 = 
    <A>(f0: ((a: A) => A), f1: ((a: A) => A)) =>
    (a: A) =>
    f1(f0(a))
export const pipe3 = 
    <A>(f0: ((a: A) => A), f1: ((a: A) => A), f2: ((a: A) => A)) =>
    (a: A) =>
    f2(f1(f0(a)))
export const pipe4 = 
    <A>(f0: ((a: A) => A), f1: ((a: A) => A), f2: ((a: A) => A), f3: ((a: A) => A)) =>
    (a: A) =>
    f3(f2(f1(f0(a))))