import {Router} from "express";
const router = Router();

router.get('/', (req, res) => res.send('server up'));

export default router;
console.log('hi')