import passport from 'passport';
import type { Context, ContextReturn } from './context';
import type { Express } from 'express';
import type { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import type { AuthChecker } from 'type-graphql';

passport.serializeUser((user: unknown, done) => {
  done(null, user as User);
});

passport.deserializeUser((user, done) => {
  done(null, user as User);
});

export function registerAuth(app: Express, context: Context): void {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async function (username, password, done) {
      const user = await context({ req: {} }).prisma.user.findFirst({
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

export const authChecker: AuthChecker<ContextReturn> = ({ root, args, context, info }, roles) => {
  if (!context.req.user) {
    return false;
  }
  if (roles && Array.isArray(roles) && roles.length) {
    if (!roles.includes(context.req.user.role)) {
      return false;
    }
  }

  return true;
};
