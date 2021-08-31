MAKEFLAGS += --silent

release:
	yarn release

verify:
	yarn test
