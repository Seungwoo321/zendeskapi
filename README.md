# zendeskapi


* module import 

```
var Zendesk = require('zendeskapi');
```


* config set 

```
var zenclient = new Zendesk({
    /* 'https://your-host.zendesk.com' */
    url: 'url',
    /* 'your-host@email.com/token' */
    user: 'user',
    /* 'token from zendesk'*/
    pass: 'password',
});
```


* example code 

```
// get brands
zenclient.get('brands.json').then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});
```
