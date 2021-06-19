curl:
	./crawl-curl.sh

requests:
	python crawl-requests.py
	@rm -rf __pycache__

scrapy:
	python -m scrapy runspider -o answer.json crawl-scrapy.py
	@rm -rf __pycache__