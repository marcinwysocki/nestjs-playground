import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as morgan from 'morgan';

import { ApplicationModule } from './modules/app.module';

const expressInstance = express();

expressInstance.use(morgan('dev'));

NestFactory.create(ApplicationModule, expressInstance).then((app) => {
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');
    app.listen(3000, () =>
        console.log('Application is listening on port 3000.'),
    );
});
