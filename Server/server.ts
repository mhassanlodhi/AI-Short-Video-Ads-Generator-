import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";
import { clerkMiddleware, clerkClient, getAuth } from '@clerk/express'


const app = express();

// Middleware
app.use(cors())
app.use(express.json());
app.use(clerkMiddleware())

const PORT = process.env.PORT || 5000;

app.get('/protected', async (req, res) => {
    // Use `getAuth()` to get the user's `userId`
    const { isAuthenticated, userId } = getAuth(req)

    if (!isAuthenticated) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    // Use the `getUser()` method to get the user's User object
    const user = await clerkClient.users.getUser(userId)

    res.json({ user })
})

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});