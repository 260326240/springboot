var app = new Vue({
    el: '#app',
    data: {

        msg: 'helloworld'
    }

})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }

})
// var app4 = new Vue({
//     el: '#app-4',
//     data: {
//       todos: [
//         { text: '学习 JavaScript' },
//         { text: '学习 Vue' },
//         { text: '整个牛项目' }
//       ]
//     }
//   })

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: '111'
            },
            {
                text: '222'
            },
            {
                text: '333'
            },
            {
                text: '4444'
            }
        ]
    }
})

// var app5 = new Vue({
//     el: '#app-5',
//     data: {
//         message: 'Hello Vue.js!'
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })
var app5 = new Vue({
    el: '#app-5',
    data: {
        message:'asd'

    },
    methods: {
        reverseMessage:function(){
            this.message=this.message.split('').reverse().join('')
        }
    }
})