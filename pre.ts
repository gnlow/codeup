for await (const { name } of Deno.readDir("src")) {
    if (name.endsWith(".ts")) {
        const source = await Deno.readTextFile("src/" + name)
        await Deno.writeTextFile(
            "dist/" + name,
            source.replace(
                /export default (.+)/,
                "console.log($1(input()))"
            )
        )
    }
}