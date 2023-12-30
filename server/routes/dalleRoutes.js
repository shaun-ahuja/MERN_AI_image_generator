// import express from "express";
// import dotenv from "dotenv";
// import OpenAI, { OpenAIError } from "openai";

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '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' });


// router.route("/").post(async (req, res) => {
//     try {
//         const { prompt } = req.body;
//         const aiResponse = await openai.images.generate({
//             model: "dall-e-3",
//             prompt,
//             n: 1,
//             size: "1024x1024",
//             response_format: "b64_json",
//         });
//         const image = aiResponse.data[0].b64_json;
//         res.status(200).json({ photo: image });
//     } catch (e) {
//         if (e instanceof OpenAIError) {
//             console.error(e.message);
//             res.status(500).json({ error: "OpenAI Error" });
//         } else {
//             console.error(e);
//             res.status(500).json({ error: "Internal Server Error" });
//         }
//     }
// });

// export default router;

import express from "express";
import dotenv from "dotenv";
import OpenAI, { OpenAIError } from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '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' });


router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.images.generate(
            {
                prompt,
                n: 1,
                size: '1024x1024', 
                response_format: 'b64_json'
            })

        const image = aiResponse.data[0].b64_json

        return res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
});

export default router;
