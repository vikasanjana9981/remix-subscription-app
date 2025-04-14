const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const isDev = config.watchForFileChanges
      const port = process.env.PORT ?? (isDev ? '3000' : '8811')
      
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })

      return {
        ...config,
        baseUrl: `http://localhost:${port}`,
        screenshotOnRunFailure: !process.env.CI
      }
    }
  }
})