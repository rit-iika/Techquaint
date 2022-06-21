from bs4 import BeautifulSoup
import requests as reqs
import datetime

today = datetime.date.today()

print(today)


url = 'https://www.amazon.in/OnePlus-Wireless-Earbuds-Titanium-Playback/dp/B09ZHPN8W5/ref=sr_1_2?crid=3CXV0SUZUWWU5' \
      '&pd_rd_r=77f0a902-8e2f-44e5-9e1e-e938a59cef9b&pd_rd_w=TgjpR&pd_rd_wg=wPjPE&pf_rd_p=78c9b567-1104-4e60-a4cc' \
      '-720319b5249d&pf_rd_r=Z5B2HTAGRSAK4HR2RGSZ&qid=1655373684&sprefix=b07xtfrgy7%2Bb07xw7x1x6%2Bb07xw91nx8' \
      '%2Bb07xwb82d9%2Bb07xwbj9l1%2Bb09tvv1txl%2Bb09tvvgxws%2Bb086csgv2n%2Bb086cvbd11%2Bb087vnbxp5%2Bb087xmbj6d' \
      '%2Bb092zjvb6z%2Bb09zhpn8w5%2Bb09zhpnwf7%2Caps%2C360&sr=8-2&th=1 '


headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36", "Accept-Encoding":"gzip, deflate", "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "DNT":"1","Connection":"close", "Upgrade-Insecure-Requests":"1"}
response = reqs.get(url, headers=headers)

soup = BeautifulSoup(response.content, features="lxml")

print('\n')

product_title=soup.select("#productTitle")[0].get_text().strip()
print("-- PRODUCT NAME -- ")
print(product_title)
print('\n\n')

price = soup.select('.a-price-whole')[0].get_text()
print("-- PRICE --")
print(price)
print('\n\n')

brand= soup.select('.a-span9')[0].get_text()
print("-- BRAND --")
print(brand)
print('\n\n')

model=soup.select('.a-span9')[3].get_text().strip()
print("-- MODEL --")
print(model)
print('\n\n')

color=soup.select('.a-span9')[1].get_text()
print("-- COLOR-- ")
print(color)
print('\n\n')



#prnting code
print("--ASIN CODE--")
table=soup.select('#productDetails_detailBullets_sections1')[0].get_text().strip()

print(table)
print("\n")


# code= soup.find_all("td", {"class":'a-size-base prodDetAttrValue"'})

# print(code)
