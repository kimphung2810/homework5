QUnit.test('QUnit tests for DataStore', function(assert) {
    var ds = new App.DataStore();
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    ds.getAll();
    var currentValue = {
        "m@bond.com": "tea",
        "james@bond.com": "eshpressho"
    };
    assert.deepEqual(ds.getAll(), currentValue, "Passed!");
    ds.remove('james@bond.com');
    ds.getAll();
    var currentValue = {
        "m@bond.com": "tea",
    };
    assert.deepEqual(ds.getAll(), currentValue, "Passed!");
    ds.get('m@bond.com');
    assert.deepEqual(ds.get('m@bond.com'), "tea", "Passed!");
    ds.get('james@bond.com');
    assert.deepEqual(ds.get('james@bond.com'), undefined, "Passed!")
});


/*
The result of myTruck.printOrders() in QUnit is undefined because it doesn't return any value
Therefore we add one more statemen inside function myTruck.printOrders() which is return Object.values(this.db.getAll())
It will then return certains values.
*/
QUnit.test('QUnit tests for Truck', function(assert) {
    var myTruck = new App.Truck('007', new App.DataStore());
    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });
    myTruck.printOrders();
    var currentOrder = [{
            "emailAddress": "me@goldfinger.com",
            "coffee": "double mocha"
        },
        {
            "emailAddress": "dr@no.com",
            "coffee": "decaf"
        },
        {
            "emailAddress": "m@bond.com",
            "coffee": "earl grey"
        }
    ];
    assert.deepEqual(myTruck.printOrders(), currentOrder, "Passed!");
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    myTruck.printOrders();
    var currentOrder = [{
        "emailAddress": "me@goldfinger.com",
        "coffee": "double mocha"
    }, ];
    assert.deepEqual(myTruck.printOrders(), currentOrder, "Passed!");
});
