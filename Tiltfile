# Records the current time, then kicks off a server update.
# Normally, you would let Tilt do deploys automatically, but this
# shows you how to set up a custom workflow that measures it.
local_resource(
  'deploy',
  'date +%s > start-time.txt'
)

docker_build('sms-api', './api', 
    build_args={'node_env': 'development'},
    entrypoint='yarn start:dev',
    live_update=[
        sync('./api', '/app'),
        run('cd /app && yarn install', trigger=['./package.json', './yarn.lock']),
    ]
)
k8s_yaml('./api/deployment.yml')
k8s_resource('sms-api', port_forwards=3000, resource_deps=['deploy'])