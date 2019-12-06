import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function() { //页面引入的时候需要{ messageBox }

    var defaults = { //默认值
        title: '',
        contant: '',
        cancle: '',
        ok: '',
        handleCancle: null,
        handleOk: null
    };


    var myComponent = Vue.extend(MessageBox); //获取到组件到js中

    return function(opts) { //参数为配置参数，真正引用组件的页面设置--Movie页面当中
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }


        var vm = new myComponent({
            el: document.createElement('div'), //如果页面中有template标签，会进行覆盖，不会有多余标签产生
            data: {
                title: defaults.title,
                contant: defaults.contant,
                cancle: defaults.cancle,
                ok: defaults.ok
            },
            methods: {
                handleCancle() {
                    defaults.handleCancle && defaults.handleCancle.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        })

        document.body.appendChild(vm.$el); //将js组件进行添加
    }

})();