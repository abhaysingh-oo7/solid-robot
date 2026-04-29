# Reflection

Building this persona-based chatbot helped me understand the importance of prompt engineering in real-world applications. Initially, I underestimated how much the quality of prompts affects the output. This project clearly demonstrated the concept of "Garbage In, Garbage Out" (GIGO). When I used simple prompts, the responses felt generic and lacked personality. However, after adding detailed persona descriptions, few-shot examples, and constraints, the chatbot responses became much more realistic and aligned with each personality.

One of the biggest challenges I faced was working with APIs. I initially tried using Gemini, but faced multiple issues related to model availability and API versions. This taught me the importance of choosing stable tools. I eventually switched to OpenRouter, which worked reliably and allowed me to focus more on the core task rather than debugging API errors.

Another key learning was structuring system prompts. Including few-shot examples significantly improved response quality. It helped the model understand not just what to say, but how to say it. Adding constraints ensured the responses remained consistent with each persona's tone.

From a frontend perspective, implementing persona switching and UI elements like suggestion chips and typing indicators improved user experience. Designing a visually appealing interface (Batman-style theme) made the project feel more complete and engaging.

If I had more time, I would improve the persona depth by adding more real-world references and fine-tuning responses further. I would also enhance the UI with animations and better responsiveness.

Overall, this project taught me that prompt engineering is not just about writing instructions, but about designing behavior. The quality of input directly determines the quality of output.