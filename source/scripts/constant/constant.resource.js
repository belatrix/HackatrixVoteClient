(function() {
  'use strict';

  	angular.module('module.constant.resource', [])

	.constant('resourceServiceConfig',{

        remoteURL: 'https://hackatrix-vote.herokuapp.com:443/',

        idea:{
          url:'api/idea/:pk',
          params:{
            pk:'@pk'
          },
          actions:{
            'get':   {method:'GET', isArray:false}
          }
        },

        ideas:{
       		url:'api/ideas/',
       		params:{
       		},
       		actions:{
       			'get':   {method:'GET', isArray:true}
       		}
       	},

        results:{
          url:'api/results/',
          params:{
          },
          actions:{
            'get':   {method:'GET', isArray:true}
          }
        },

        vote:{
          url:'api/idea/:pk/vote/',
          params:{
            pk:'@pk'
          },
          actions:{
            'post':   {method:'POST'}
          }
        }
       
    });

})();