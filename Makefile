.PHONY: demo clean init_workspace

demo:
	hexo generate
	hexo server

clean:
	hexo clean

init_workspace:
	npm install -g hexo-cli
	npm install
