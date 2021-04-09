import passport from 'passport';
import type { Context } from './context';
import type { Express } from 'express';
import type { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { UseMiddleware } from 'type-graphql';
import { ResolversEnhanceMap, applyResolversEnhanceMap } from './generated/typegraphql-prisma';

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    createUser: [
      UseMiddleware(async (data, next) => {
        if (data.args.data.password) {
          data.args.data.password = await bcrypt.hash(data.args.data.password, 10);
        }
        return next();
      }),
    ],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);

passport.serializeUser((user: unknown, done) => {
  done(null, (user as User).id);
});

passport.deserializeUser((id, done) => {
  done(null, { id });
});

export default function register(app: Express, context: Context): void {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async function (username, password, done) {
      const user = await context.prisma.user.findFirst({
        where: { username },
      });

      if (user && (await bcrypt.compare(password, user.password))) {
        return done(null, user);
      }
      return done('Invalid username or password');
    }),
  );

  app.post('/login', (req, res) => {
    const base = req.headers.referer || '/';
    return passport.authenticate('local', {
      successRedirect: base,
      failureRedirect: base + 'login',
      failureFlash: false,
    })(req, res);
  });
}
