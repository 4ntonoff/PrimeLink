const { PrismaClient } = require('@prisma/client');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const prisma = new PrismaClient();
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: "137735957941-6epkm3irrgghufltmtrcjmhd2dprl17p.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            let user = await prisma.user.findUnique({
                where: {
                    email: profile.emails[0].value
                }
            });

            if (user) {
                user = await prisma.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        googleID: profile.id,
                        googleAccessToken: accessToken
                    }
                }); 
            } else {
                user = await prisma.user.create({
                    data: {
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        avatarUrl: profile._json.picture,
                        googleAccessToken: accessToken,
                        googleID: profile.id,
                        verified: true,
                        provider: 'google'
                    }
                });
            }

            console.log(profile)
            done(null, user);
        } catch (error) {
            console.error("Google OAuth error:", error);
            done(error, null);
        }
    }));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        done(null, user);
    } catch (error) {
        console.error("Deserialize user error:", error);
        done(error, null);
    }
});

module.exports = passport;
