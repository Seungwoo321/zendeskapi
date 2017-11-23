# zendeskapi - Use zendesk Core API 


## NOTE 

Please read https://developer.zendesk.com/rest_api/docs/core/  
For example, "List Tickets" is `GET /api/v2/tickets.json` . 
You can use "tickets.json" here. But it's not perfect.


## Getting Started



### npm install 
```
npm install zendeskapi 
```

### Import module 
```
var Zendesk = require('zendeskapi');
```

### Client 

#### how using password 
```
var zenclient = new Zendesk({
    url: 'https://{youer_subdomain}.zendesk.com',
    user: '{email_address}',
    pass: '{password}',
});
```

#### how using token 
```
var zenclient = new Zendesk({
    url: 'https://{youer_subdomain}.zendesk.com',
    user: '{email_address}/token',
    pass: '{token}',
});
```


### Example 

```
// List Brands - Please see  https://developer.zendesk.com/rest_api/docs/core/brands 
zenclient.get('brands.json').then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});
```
