export default{
    template:/*html*/`
        <form @submit.prevent="add">
            <input type="text" placeholder="请输入内容" v-model="newFood"/>
            <button type="submit" style="backgroundColor:yellow" v-if="this.submitcount==0">添加</button>
            <button type="submit" style="backgroundColor:red" v-else-if="this.submitcount>0 && this.submitcount<2">再加</button>
            <button type="submit" style="backgroundColor:blue" v-else>闹麻了</button>
        </form>
    `,
    data(){
        return {
            newFood:"",
            submitcount:0,
            buttonTitle:"添加"
        }
    },
    methods: {
        add(){
            this.listChild.push({
                id:this.listChild.length+1,
                name:this.newFood,
                image:"",
                is:false,
            });
            this.newFood="";
            this.submitcount++;
        }
    },
    props:{
        listChild:Array
    }
}