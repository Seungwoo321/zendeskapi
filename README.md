# zendeskapi


= module import 

```
var Zendesk = require('zendeskapi');
```


= config set 

```
var zenclient = new Zendesk({
    url: 'https://your-host.zendesk.com',
    user: 'your emailt/token or your email',
    pass: 'token or password',
});
```


= example code 

```
// get brands
zenclient.get('brands.json').then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});
```
