import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import auth from 'express-basic-auth';
import morgan from 'morgan';

export default server => {
    // Apply CORS
    server.use(cors());

    // Apply HTTP security headers
    server.use(helmet());

    // 
    server.use(auth({
        users: { 'admin': 'supersecret' },
        challenge: true,
    }));

    // Parse incoming requests' bodies
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));

    // Logger
    server.use(morgan('combined'));
};