export default{
    template:/*html*/`
    <section v-show="true">
            <h1>{{ headline }}</h1>
            <li v-for="item in checkisChild" :key="item.id">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <img :src="item.image" alt="" width="20px" height="20px">
                <input type=checkbox v-model="item.is">
                <span>{{item.is}}</span>
            </li>
        </section>
    `,
    props:{
        headline:String,
        checkisChild: Array
    }
}