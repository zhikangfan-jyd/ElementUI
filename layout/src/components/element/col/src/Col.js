export default {
    name:'ElCol',
    props:{
        tag:{
            type:String,
            default:'div'
        },
        span:{
            type:Number,
            default:24,
        },
        offset:{
            type:Number,
            default:0
        },
        push:{
            type:Number,
            default:0
        },
        pull:{
            type:Number,
            default:0
        },
        xs:[Number,Object],
        xl:[Number,Object],
        sm:[Number,Object],
        md:[Number,Object],
        lg:[Number,Object]
    },
    computed:{
        gutter () {
            let parent = this.$parent;
            while (parent && parent.$options.name !== 'ElRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        style () {
            const style  = {};
            if (this.gutter) {
                style.paddingLeft = this.gutter / 2 + 'px';
                style.paddingRight = style.paddingLeft; 
            }
            return style;
        },
        classList () {
            const classList = [];

            ['span','offset','push','pull'].forEach((prop) => {

                // 如果当前传进来的属性值默认为0的时候，就不要再添加类名了
                if (this[prop]) {
                    classList.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`)
                }
                
            });

            ['xs','xl','lg','sm','md'].forEach((size)=>{
                if (typeof this[size] == 'number') {
                    classList.push(`el-col-${size}-${this[size]}`);
                } else if (typeof this[size] == 'object') {
                    const props = this[size];
                    Object.keys(props).forEach((prop) => {
                       classList.push(prop == 'span' ? `el-col-${size}-${props[prop]}` : `el-col-${size}-${prop}-${props[prop]}`)
                    })
                }
            });
            return classList;
        }
    },
    render (h) {
        return h(this.tag,{
            class:['el-col',this.classList],
            style:this.style
        },this.$slots.default);
    }
}