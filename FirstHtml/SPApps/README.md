Any SharePoint related Apps goes here 

MySPSiteUrl = https://tgarillc.sharepoint.com/sites/playground/

SharePoint REST API EndPoint 

Entry to SharePoint REST API MySPSiteUrl/_api/
/_api/web     - Information about the Web
/_api/web/lists   -All information about SharePoint Lists (Array of Lists)

How can we get List Title, Item Count and Whether or not it is hidden 
Choose properties (Title, Hidden, ItemCount), We use oData $select=property1,property2,property3

/_api/web/lists?$select=Title,Hidden,ItemCount


