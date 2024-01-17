/**
 * Copyright © 2023, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const rateLimit = require('express-rate-limit');

const Utility = require("./index");

/** Middleware to control the rate at which users can send requests to the server
  */
const rateLimiter = rateLimit({
  windowMs: 60 * 1000,     // 1 minute in milliseconds
  max: 120,
  message: Utility.formatResponse(429, "You have exceeded 120 requests per minute limit!"),
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = rateLimiter;
