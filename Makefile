.PHONY: demo clean deploy

demo:
	hexo generate
	hexo server

clean:
	hexo clean

deploy: clean
	hexo deploy
