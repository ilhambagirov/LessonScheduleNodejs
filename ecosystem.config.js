module.exports = {
  apps: [
    {
      name: "schoolapp",
      script: "./bin/www",
      env_production: {
        NODE_ENV: "production",
        NAME: "School App"
      },
      env: {
        NODE_ENV: "development",
        NAME: "School App"
      },
    },
  ],
}
