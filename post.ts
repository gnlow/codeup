const header = (str: string) =>
`# Source(TypeScript): 
'''
${str}
'''
# Output(Python):
import math

`

for await (const { name } of Deno.readDir("dist")) {
    if (name.endsWith(".py")) {
        const source = await Deno.readTextFile("dist/" + name)
        var test
        await Deno.writeTextFile(
            "dist/" + name,
            header(
                await Deno.readTextFile("src/" + name.replace(".py", ".ts"))
            ) +
            (test = source
            .replaceAll(/var (.*) = def/g, "def $1")
            .replaceAll(/var (.*)/g, "$1")
            .replace(
                /export default (.+)/,
                "print(int($1(int(input()))))"
            )
            .replaceAll("Math.round", "round")
            .replaceAll("Math.floor", "math.floor")
            .replaceAll("Math.ceil", "math.ceil")
            .replaceAll("Math.sqrt", "math.sqrt")
            .replaceAll("Math.pow", "math.pow")
            .replaceAll(/def\((.*?)\): *\n *return (.*)/g, "lambda $1: $2")) // 왜안됨????
        )
    }
}