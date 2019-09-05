
import { Movie } from './entities/Movie';
import { validate } from 'class-validator';

const m = new Movie();
const test: string = 'ssss';
validate(m).then(errors => {
    console.log(errors);
})
