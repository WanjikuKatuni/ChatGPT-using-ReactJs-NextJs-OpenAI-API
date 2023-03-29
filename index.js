const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
// add  body parse and cors to express
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-9DVpsfYS5ybHlRqrTRyHW51q",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



// simple express api which calls the function above

const app = express()
app.use(bodyParser.json())
app.use(cors())



const port = 3080



app.post('/', async (req, res) => {
    const {message} = req.body
    // console.log(message, "message")

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });

    //   console.log(response.data.choices[0].text)
      res.json({
        message: response.data.choices[0].text
        // data: message,
      })
})

// app.get('/models', async (req, res) => {
//     const response = await openai.listEngines();
//     console.log(response.data.data)
//     res.json({
//         models: response.data.data
//     })
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
