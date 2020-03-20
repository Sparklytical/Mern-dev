import express from 'express';
const router = express.Router();
//@route GET api/posts/test
router.get('/test', (req, res) => res.json({ msg: 'posts works' }));

export default router;
