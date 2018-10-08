const router = require('koa-router')();
const users: String[] = ['Tom', 'Jack', 'Amy', 'Lena', 'Brian'];
router.get('/users', async (ctx: any, next: any) => {
    ctx.response.status = 200;
    ctx.response.body = {
        data: users
    };
});
export = router;