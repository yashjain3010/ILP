In HTTP methods you can send a response back to the client with res and you can send different types of response 

1. Simple text

res.send('Hello World');

2. JSON response

res.json({
    msg : "Send Successfully"
})

3. HTML response

const htmlcontent = '<h1>Hello from HTML content</h1>`
res.send(htmlcontent)