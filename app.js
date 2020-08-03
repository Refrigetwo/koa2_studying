const Koa = require('koa');
const app = new Koa();
//const getByName = require('./Db/getByName.js');
const get = require('./Db/get');
const insert = require('./Db/insert');
const remove = require('./Db/remove');
const update = require('./Db/update');
const router = require('koa-router');

const bodyParser = require('koa-bodyparser');

let searchRouter = new router();
let insertRouter = new router();
let removeRouter = new router();
let updateRouter = new router();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

/*router.get('/insert/:name/:age/:sex', async (ctx, next) => {
    let ans = 0;
    let name = ctx.params.name;
    let age = ctx.params.age;
    let sex = ctx.params.sex;
    await insert(name, age, sex).then((ret) => {
        ans = ret;
    });
    console.log(ans);
    ctx.response.type = 'json';
    ctx.response.body = ans;
});*/

insertRouter.post('/', async (ctx, next) => {
    let ans = 0;
    let
        name = ctx.request.body.name || '',
        age = ctx.request.body.age || '',
        sex = ctx.request.body.sex || '';
    console.log(`insert with name: ${name}, age: ${age}, sex: ${sex}`);
    await insert(name, age, sex).then((ret) => {
        ans = ret;
    });
    console.log(ans);
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

removeRouter.get('/name/:name', async (ctx, next) => {
    let ans = 0;
    let name = ctx.params.name;
    await remove.removeByName(name).then((ret) => {
        ans = ret;
    });
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

removeRouter.get('/sex/:sex', async (ctx, next) => {
    let ans = 0;
    let sex = ctx.params.sex;
    await remove.removeBySex(sex).then((ret) => {
        ans = ret;
    });
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

updateRouter.post('/', async (ctx, next) => {
    let ans = 0;
    let
        name = ctx.request.body.name || '',
        age = ctx.request.body.age || '',
        sex = ctx.request.body.sex || '';
    console.log(`update with name: ${name}, age: ${age}, sex: ${sex}`);
    await update(name, age, sex).then((ret) => {
        ans = ret;
    });
    console.log(ans);
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

searchRouter.get('/name/:name', async (ctx, next) => {
    let ans = 0;
    let name = ctx.params.name;
    await get.getByName(name).then((ret) => {
        ans = ret;
    });
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

searchRouter.get('/sex/:sex', async (ctx, next) => {
    let ans = 0;
    let sex = ctx.params.sex;
    await get.getBySex(sex).then((ret) => {
        ans = ret;
    });
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

searchRouter.get('/all', async (ctx, next) => {
    let ans = 0;
    let sex = ctx.params.sex;
    await get.getAll().then((ret) => {
        ans = ret;
    });
    ctx.response.type = 'json';
    ctx.response.body = ans;
});

/*app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = 'index page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    var ans = 0;
    console.log('app.js' + ans);
    await get().then((ret) => {
        ans = ret;
    });
    if (ctx.request.path === '/test') {
        ctx.response.type = 'json';
        ctx.response.body = ans;
    } else {
        await next();
    }

});*/

let Router = new router();
Router.use('/search', searchRouter.routes());
Router.use('/insert', insertRouter.routes());
Router.use('/remove', removeRouter.routes());
Router.use('/update', updateRouter.routes());


app.use(bodyParser());
app.use(Router.routes());

app.listen(3000);            //服务启动端口
console.log('启动成功');//日志打印