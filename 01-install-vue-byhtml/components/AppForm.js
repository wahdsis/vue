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
        }
    },
    methods: {
        add(){
            this.$emit('add',this.newFood)
            this.newFood="";
            this.submitcount++;
        }
    },
   
}