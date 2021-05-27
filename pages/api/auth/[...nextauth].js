import NextAuth from 'next-auth'
import { session, signin } from 'next-auth/client'
import Providers from 'next-auth/providers'
import { redirect } from 'next/dist/next-server/server/api-utils'
const axios = require('axios')


const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Credentials({
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      async authorize(credentials) {
        const user = await axios.post('http://localhost:8000/auth/login', credentials)
        if (user) {
          return Promise.resolve(user.data)
        } else {
          return Promise.reject(null)
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  
  callbacks: {
    /**
     * 
     * @param {object} token Decrypted Json Web Token
     * @param {obejct} user User object (get from authorize)
     * @return {object}     JWt that will save
     */
    async jwt(token, user){ 
      if(user){
        token.user = user.profile
        token.accessToken = user.access_token
      }
      return token
    },

    /**
     * @param {obejct} session Session object
     * @return {object}        Session object
     */
    async session(session, token){
      session.user.name   = token.user.name
      session.user.email  = token.user.email
      session.user.role   = token.user.roles[0].name
      session.accessToken = token.accessToken
      return Promise.resolve(session)
      
    }
  }
}

export default (req, res) => NextAuth(req, res, options)