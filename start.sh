echo "Running Production Page"

npm i -g pnpm

echo "Installing Pakages......."
pnpm install 

echo "Build Application......."
pnpm build

echo "Start Application......."
pnpm start
