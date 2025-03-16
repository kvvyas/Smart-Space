#!/usr/bin/env python
# coding: utf-8

# In[104]:


import requests
import pandas as pd
from requests.auth import HTTPBasicAuth 


# In[105]:


url = "https://opendata.concordia.ca/API/v1/facilities/buildinglist/"
user = "839"
password = "12fc213eaa1c9d9adb1d7537b7876a29"


# In[106]:


response = requests.get(url, auth=HTTPBasicAuth(user,password))
if response.status_code == 200:
    building_list = pd.DataFrame(response.json())
else:
    raise Exception(f"API request failed with status code {response.status_code}")


# In[107]:


building_list.drop(columns=["Latitude", "Longitude", "Building_Long_Name"], inplace=True)
print(building_list.head())


# In[108]:


building_list.to_csv("cleaned_building_list.csv", index=False)

