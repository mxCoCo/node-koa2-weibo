const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
    msg: "你好",
    isMe: true,
  });
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

router.get("/profile/:username", function (ctx, next) {
  const { username } = ctx.params;
  ctx.body = {
    title: "profile username" + ":" + username,
  };
});

module.exports = router;
