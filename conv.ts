const header = (str: string) =>
`# Source(TypeScript): 
'''
${str}
'''

`

for await (const { name } of Deno.readDir("dist")) {
    if (name.endsWith(".py")) {
        await Deno.writeTextFile(
            "dist/" + name,
            header(
                await Deno.readTextFile("src/" + name.replace(".py", ".ts"))
            ) +
            await Deno.readTextFile("dist/" + name)
        )
    }
}