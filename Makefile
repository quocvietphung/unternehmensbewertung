.PHONY: install start build test help docker-compose-build docker-compose-up docker-compose-down

install:
	@echo "Installing dependencies..."
	npm install

start:
	@echo "Starting development server..."
	npm start

build:
	@echo "Building production version..."
	npm run build

test:
	@echo "Running tests..."
	npm test

dc-build:
	@echo "Building Docker Compose services..."
	docker-compose build

dc-up:
	@echo "Starting Docker Compose services..."
	docker-compose up -d

dc-down:
	@echo "Stopping Docker Compose services..."
	docker-compose down

help:
	@echo "Available commands:"
	@echo "  make install             - Install dependencies"
	@echo "  make start               - Start development server"
	@echo "  make build               - Build production version"
	@echo "  make test                - Run tests"
	@echo "  make docker-compose-build - Build Docker Compose services"
	@echo "  make docker-compose-up   - Start Docker Compose services"
	@echo "  make docker-compose-down - Stop Docker Compose services"
	@echo "  make help                - Show help information"
