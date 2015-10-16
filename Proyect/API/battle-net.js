var $ = require('jquery');

var API = function () {
  this.userName=   'DHM-USER';
    this.password = 'DHM-USER01';
    this.location = 'locale=en_US';
    this.key = 'mtu95u6w5zus93b2ssxjd9bmq8hnr5sr';
    this.genericURL= 'https://us.api.battle.net/wow/';
};

API.prototype = {
    getCharacterProfile: function (callback) {
        var params = {
            characterName: 'deskoloria',
            realm: 'ragnaros',
            'function': 'character'
        };
        var urlRealms = params.function  +'/' + params.realm + '/' + params.characterName +  '?';
        var httpReq = new XMLHttpRequest();
        httpReq.open('GET',urlRealms,true,this.userName, this.password );
        httpReq.send(null);
        //we need to set a callback in order to
        httpReq.onreadystatechange = function() {
            if (httpReq.readyState == 4 && httpReq.status == 200) {
                console.log(httpReq.response);//callback
            }
        };
       return httpReq.response;
    },

    getRealm: function (callback) {
      var functionName = 'realm/status?/';
        $.ajax({
            url:this.genericURL + functionName + this.location +'&apikey=' + this.key,
            success: function(data) {
              callback(data);
            }, //success
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(url +  "Errors, trying to get realms" + errorThrown + textStatus );
            }//error
        })//jQuery.ajax
    }

} ;

module.exports = new API;
