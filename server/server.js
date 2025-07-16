import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoute.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

async function startServer() {
  try {
    await connectDB();

    // Middleware
    app.use(cors());
    app.use(express.json()); // <-- fixed: invoked as a function

    // Routes
    app.get('/', (req, res) => res.send('API is working'));
    app.use('/api/admin', adminRouter);
    app.use('/api/blog', blogRouter);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export default app;
