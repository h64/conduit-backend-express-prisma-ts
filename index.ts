import express from 'express';
import morgan from 'morgan'
import cors from 'cors'

import userRoutes from './routes/users';
import articleRoutes from './routes/articles';
import errorHandler from './middleware/errorHandler'

const app = express();
const port = process.env.PORT || 8000;

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan('dev'))

app.use('/api', userRoutes);
app.use('/api/articles', articleRoutes);

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
