install:
	pnpm install
	pnpm dlx shadcn@latest add card tabs

dev:
	pnpm dev

build:
	npx --no-install next build
