# zendeskapi
Please read https://developer.zendesk.com/rest_api/docs/core/  


## NOTE
It's not perfect.


## Getting Started



### Install
```
npm install zendeskapi
```

### Import module
```
var ZENDESK_API = require('zendeskapi');
```

### Client

#### How using password
```
var zenclient = new ZENDESK_API({
    url: 'https://{your_subdomain}.zendesk.com',
    user: '{email_address}',
    pass: '{password}',
});
```

#### How using token
```
var zenclient = new ZENDESK_API({
    url: 'https://{your_subdomain}.zendesk.com',
    user: '{email_address}/token',
    pass: '{token}',
});
```


### Example
* List Brands - Please see  https://developer.zendesk.com/rest_api/docs/core/brands
```
// get brands
zenclient.get('brands.json').then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});
```
