for await (const { name } of Deno.readDir("src")) {
    if (name.endsWith(".ts")) {
        const source = await Deno.readTextFile("src/" + name)
        await Deno.writeTextFile(
            "dist/" + name,
            source
            .replace(
                `import { pipe2 as pipe } from "../util.ts"`,
                `const pipe = 
                <A>(f0: ((a: A) => A), f1: ((a: A) => A)) =>
                (a: A) =>
                f1(f0(a))`
            )
            .replace(
                `import { pipe3 as pipe } from "../util.ts"`,
                `const pipe = 
                <A>(f0: ((a: A) => A), f1: ((a: A) => A), f2: ((a: A) => A)) =>
                (a: A) =>
                f2(f1(f0(a)))`
            )
            .replace(
                `import { pipe4 as pipe } from "../util.ts"`,
                `const pipe = 
                <A>(f0: ((a: A) => A), f1: ((a: A) => A), f2: ((a: A) => A), f3: ((a: A) => A)) =>
                (a: A) =>
                f3(f2(f1(f0(a))))`
            )
        )
    }
}