import requests
from bs4 import BeautifulSoup

from translate import translate

with requests.Session() as session:
    response = session.get("http://applicant-test.us-east-1.elasticbeanstalk.com/")

    headers = {
        "Cookie": response.headers["Set-Cookie"],
        "Referer": "http://applicant-test.us-east-1.elasticbeanstalk.com/",
    }

    data = BeautifulSoup(response.text, features="lxml")
    data = data.find(id="token")["value"]
    data = translate(data)
    data = {"token": data}

    response = session.post(
        "http://applicant-test.us-east-1.elasticbeanstalk.com/",
        headers=headers,
        data=data,
    )

    answer = BeautifulSoup(response.text, features="lxml")
    answer = answer.find(id="answer").text
    print(answer)
