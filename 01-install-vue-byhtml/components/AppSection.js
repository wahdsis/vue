export default{
    template:/*html*/`
    <section v-show="uncheckis.length">
                <h1>已购物品</h1>
            <h1>{{ title }}</h1>
            <li v-for="item in uncheckis" :key="item.id">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <img :src="item.image" alt="" width="20px" height="20px">
                <input type=checkbox v-model="item.is">
                <span>{{item.is}}</span>
            </li>
        </section>
        <section>
            <h1>未购物品</h1>
            <li v-for="item in checkis" :key="item.id">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <img :src="item.image" alt="" width="20px" height="20px">
                <input type=checkbox v-model="item.is">
                <span>{{item.is}}</span>
            </li>
        </section>
    `,
        data(){
            return {
                title:"标题",
                list:[
                    {id:1,name:'鱿鱼丝',image:"../images/6ac54ccb31a09a5c1223677ba07c283f.jpeg",is:false},
                    {id:2,name:'辣条',image:"../images/wp9352781-oil-paint-4k-wallpapers.jpg",is:false}
                ]
            }
        },
        computed:{
            checkis() {
                return this.list.filter(item=>!item.is);
            },
            uncheckis(){
                return this.list.filter(item=>item.is);
            }
        }
}