GET :- 

1. GET is used to retrive data from a server 
2. Data is appended in URL as query parameter.
3. Parameters are visible in the URL,which can impact security
4. Request can be cached and it is idempotent 
5. Reading a blog,searching on Google.

POST :-

1. Post is used to submit data to server.
2. Data is send in a body and large amount of data can be send with help of body.
3. Parameters are not visible in the URL
4. Request are not cached in the URL and URL cannot be bookmarked and it is not idempotent.
5. Submitting a form, signup on a website.