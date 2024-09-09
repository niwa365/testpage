function handler(request) {
    return new Response("aaa")
}

Deno.serve(handler)