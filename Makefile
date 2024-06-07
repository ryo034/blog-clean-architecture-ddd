# https://github.com/awslabs/git-secrets
.PHONY: setup-git-secrets
setup-git-secrets:
	@brew install git-secrets

.PHONY: setup
setup:
	@make setup-git-secrets
	@cd ./apps/blog/client && make setup
	@echo "Success!🎉"

.PHONY: init-blog
init-react:
	@cp ./apps/blog/client/.env.local.sample ./apps/blog/client/.env.local

