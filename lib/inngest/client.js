import { Inngest } from "inngest";

// Create a new Inngest client with your app name
const inngest = new Inngest({ 
  id: "aspire-ai-resume",
  name: "AspireX AI",
  credentials: {
   gemimi: {
    apiKey: process.env.GEMINI_API_KEY,
   },
  }, 
});

// Make sure to export the client
export { inngest };