module.exports = {
  apps: [
    {
      name: 'foodShop',
      script: './initializers/server/index.js',
      cwd: '/home/deploy/foodshop/current',
      instances: 2,
      exec_mode: 'cluster',
    },
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: ['51.158.76.7'],
      ref: 'origin/master',
      repo: 'git@github.com:foxy-eyed/helloReact.git',
      'post-deploy': 'yarn install && yarn build && pm2 startOrRestart pm2.config.js --env production',
      path: '/home/deploy/foodshop',
      ssh_options: 'StrictHostKeyChecking=no',
    },
  },
};
