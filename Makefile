NODEBIN := ./node_modules/.bin
SRC := $(shell find templates)

build: dist

clean:
	rm -rf dist node_modules

publish: node_modules build
	@git symbolic-ref HEAD | grep master  # Assert current branch is master
	$(NODEBIN)/bump minor --commit "Release v%s" --tag "v%s" --push
	npm publish --access=public

dist: node_modules $(SRC)
	rm -rf dist
	$(NODEBIN)/rollup -c

node_modules:
	npm install

.PHONY: clean build publish
