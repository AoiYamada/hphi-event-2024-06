// https://tn710617.github.io/zh-tw/pm2/
module.exports = {
  apps: [
    {
      name: "hphi-web",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/yamada/workspace/hphi/event-site-2024-06",
      exec_mode: "cluster",
      instances: 2,
      max_memory_restart: "1G",
      interpreter: "/home/yamada/.nvm/versions/node/v20.11.1/bin/node",
      time: false,
      watch: true,
      watch_delay: 10000,
      ignore_watch: ["[/\\]./", "node_modules", "volumes", "logs"],
      source_map_support: false,
      // http://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables
      instance_var: "NODE_APP_INSTANCE",
      // log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file:
        "/home/yamada/workspace/hphi/event-site-2024-06/logs/listcosearch-web",
      out_file:
        "/home/yamada/workspace/hphi/event-site-2024-06/logs/listcosearch-web",
      merge_logs: true,
      min_uptime: "10m",
      listen_timeout: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      // http://pm2.keymetrics.io/docs/usage/signals-clean-restart/
      max_restarts: 3,
      restart_delay: 3000,
      autorestart: true,
      vizion: false,
    },
  ],
};
