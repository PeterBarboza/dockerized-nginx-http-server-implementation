import "dotenv/config"
import { ENV_SCHEMA } from "../validations"

const RAW_ENV_VARS = {
  port: Number(process.env.BACKEND_PORT),
  passwordSalt: process.env.PASSWORD_SALT,
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  }
}

export const ENV_VARS = ENV_SCHEMA.parse(RAW_ENV_VARS)

export const ONE_MINUTE_IN_SECONDS = 60
export const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60
export const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24

export const JWT_AUTH_TOKEN_EXPIRATION = ONE_HOUR_IN_SECONDS
export const JWT_REFRESH_TOKEN_EXPIRATION = ONE_DAY_IN_SECONDS