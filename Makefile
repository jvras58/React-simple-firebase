commit:
	@echo "Revisar mudanças para este commit: "
	@echo "-------------------------------------"
	@git status -s 
	@echo "-------------------------------------"
	@read -p "Commit msg: " menssagem ; \
	git add . ;\
	git commit -m "$$menssagem" ;\

update:
	@git fetch origin
	@git pull



dev:
	@echo "Iniciando servidor em modo de desenvolvimento"
	@echo "-------------------------------------"
	npm run dev
	@echo "-------------------------------------"
	@echo "Servidor iniciado com sucesso"
	@echo "-------------------------------------"