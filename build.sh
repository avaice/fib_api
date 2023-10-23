git pull origin
docker image prune
sudo docker image build -t avaice/fib_api ./ --network=host
docker run -p 3002:3000 avaice/fib_api
