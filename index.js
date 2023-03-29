
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-9DVpsfYS5ybHlRqrTRyHW51q",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
}

callApi()

// simple express api which calls the function above

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
