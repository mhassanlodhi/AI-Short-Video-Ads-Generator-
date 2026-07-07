import"./configs/instrument.mjs";
import express, { Request, Response } from 'express';
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, clerkClient, getAuth } from '@clerk/express'
import clerkWebhooks from "./controllers/clerk.js";
import * as Sentry from "@sentry/node"
import userRouter from "./routes/userRoutes.js";



const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors())

app.post('/api/clerk', express.raw({ type: 'application/json' }), clerkWebhooks)

app.use(express.json());
app.use(clerkMiddleware())



/*app.get('/protected', async (req, res) => {
    // Use `getAuth()` to get the user's `userId`
    const { isAuthenticated, userId } = getAuth(req)

    if (!isAuthenticated) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    // Use the `getUser()` method to get the user's User object
    const user = await clerkClient.users.getUser(userId)

    res.json({ user })
})*/

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

app.use('/api/user', userRouter)


// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});