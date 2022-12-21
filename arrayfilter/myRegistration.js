class MyAPIMAnagement
{
    constructor(enity,data)
    {
        this.enity = enity;
        this.data = data;

    }

    SendDataToAPI(d)
    {
        fetch("url"+this.enity, {
            method : "post"
        }).then(y=> y.json())
        .then(y=> {
            console.log(y);
        })
    }



}

let login = new MyAPIMAnagement("regssssqi",data);
login.SendDataToAPI("D");