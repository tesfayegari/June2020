Any SharePoint related Apps goes here 

MySPSiteUrl = https://tgarillc.sharepoint.com/sites/playground/

SharePoint REST API EndPoint 

Entry to SharePoint REST API MySPSiteUrl/_api/
/_api/web     - Information about the Web
/_api/web/lists   -All information about SharePoint Lists (Array of Lists)

How can we get List Title, Item Count and Whether or not it is hidden 
Choose properties (Title, Hidden, ItemCount), We use oData $select=property1,property2,property3

/_api/web/lists?$select=Title,Hidden,ItemCount

Filtering oData is to filter the data that is returning from the API
$filter=Property operator value
Example $filter=Hidden eq false
Example 2. /_api/web/lists?$select=Title,Hidden,ItemCount&$filter=Title eq 'MTM Links'

Information in one list
_api/web/lists/getbytitle('ListTitle')
Example: /_api/web/lists/getbytitle('HRLeave')

All Items in a list
_api/web/lists/getbytitle('ListTitle')/Items
Example: /_api/web/lists/getbytitle('HRLeave')/Items

Top N items in a list
_api/web/lists/getbytitle('ListTitle')/Items?$top=N
Example: /_api/web/lists/getbytitle('HRLeave')/Items?$top=9


Get only one item by its ID
/_api/web/lists/getbytitle('ListTitle')/Items(ID)
Example: /_api/web/lists/getbytitle('ListTitle')/Items(11)

Sorting: use oData $orderby=columnName ASC/DESC
Ex Sort by Title: /_api/web/lists/getbytitle('HRLeave')/Items?$top=9&$orderby=Title asc
Example most recent: /_api/web/lists/getbytitle('MTMEmployees')/items?$top=9&$orderby=Modified desc

Example: Get top 9 items filter where Department=IT
/_api/web/lists/getbytitle('MTMEmployees')/items?$filter=Department eq 'Customer Service'&$top=9&$orderby=Title
