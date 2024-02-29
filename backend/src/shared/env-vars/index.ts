import "dotenv/config"

export const ENV_VARS = {
  port: process.env.BACKEND_PORT,
  passwordSalt: "",
  jwt: {
    accessTokenSecret: "",
    refreshTokenSecret: "",
  }
}

export const ONE_MINUTE_IN_SECONDS = 60
export const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60
export const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24

export const JWT_AUTH_TOKEN_EXPIRATION = ONE_HOUR_IN_SECONDS
export const JWT_REFRESH_TOKEN_EXPIRATION = ONE_DAY_IN_SECONDS