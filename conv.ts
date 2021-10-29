const header = (str: string) =>
`# Source(TypeScript): 
'''
${str}
'''

`

for await (const { name } of Deno.readDir("dist")) {
    if (name.endsWith(".py")) {
        const source = await Deno.readTextFile("dist/" + name)
        await Deno.writeTextFile(
            "dist/" + name,
            header(
                await Deno.readTextFile("src/" + name.replace(".py", ".ts"))
            ) +
            source.replaceAll(/var (.*) = def/g, "def $1")
        )
    }
}