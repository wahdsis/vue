import AppSectionsList from "./AppSectionList.js"
import AppForm from "./AppForm.js"
export default {
    components: { AppSectionsList, AppForm },
    template:/*html*/`
    <app-sections-list
    headline="已购物品"
    :checkisChild="uncheckis">
    </app-sections-list>
       
        
        <app-sections-list
        headline="未购物品" 
        :checkisChild="checkis">
        </app-sections-list>
        
        <app-form @add="fatherAdd">
        </app-form>
    `,
    data() {
        return {
            title: "标题",
            list: [
                { id: 1, name: '鱿鱼丝', image: "../images/6ac54ccb31a09a5c1223677ba07c283f.jpeg", is: false },
                { id: 2, name: '辣条', image: "../images/wp9352781-oil-paint-4k-wallpapers.jpg", is: false }
            ]
        }
    },
    methods: {
        fatherAdd(foodName){
            this.list.push({
                id:this.list.length+1,
                name:foodName,
                image:"",
                is:false,
            });
        }
    },
    computed: {
        checkis() {
            return this.list.filter(item => !item.is);
        },
        uncheckis() {
            return this.list.filter(item => item.is);
        }
    }
}