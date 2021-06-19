from pprint import pprint

import scrapy

from translate import translate


class CrawlySpider(scrapy.Spider):
    name = "crawly-spider"
    start_urls = ["http://applicant-test.us-east-1.elasticbeanstalk.com/"]

    def parse(self, response):
        token = response.css('input[name="token"]::attr(value)').extract_first()
        token = translate(token)

        yield scrapy.FormRequest.from_response(
            response, formdata={"token": token}, callback=self.parse_result
        )

    def parse_result(self, response):
        yield {"answer": response.css('span[id="answer"]::text').extract_first()}
