import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Bill from '../components/bill/bill.vue'
import DetailBill from '../components/bill/detail_bill.vue'
import Income from '../components/echart/income.vue'
import Out from '../components/echart/out.vue'
import Piechart from '../components/echart/piechart.vue'
import Account from '../components/account/account.vue'
import Spending from '../components/account/spending.vue'
import Financial from '../components/financial/financial.vue'
import WealthProducts from '../components/financial/wealthProducts.vue'
import Buy from '../components/financial/buy.vue'
import MyFinancial from '../components/financial/myFinancial.vue'
import RecordDetails from '../components/financial/recordDetails.vue'
import ReturnsDetailed from '../components/financial/returnsDetailed.vue'
import TransactionRecords from '../components/financial/transactionRecords.vue'
import Mine from '../components/mine/mine.vue'
import Two from '../components/mine/two.vue'
import Three from '../components/mine/three.vue'
import Four from '../components/mine/four.vue'
import Five from '../components/mine/five.vue'
import Six from '../components/mine/six.vue'
import Fpreference from '../components/mine/fpreference.vue'
import Password from '../components/mine/password.vue'
import Feedback from '../components/mine/feedback.vue'
import Pers from '../components/mine/pers.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/bill/bill',
      name: 'Bill',
      component: Bill
    },
    {
      path: '/bill/detail_bill',
      name: 'DetailBill',
      component: DetailBill
    },
    {
      path: '/echart/income',
      name: 'Income',
      component: Income
    },
    {
      path: '/echart/out',
      name: 'Out',
      component: Out
    },
    {
      path: '/echart/piechart',
      name: 'Piechart',
      component: Piechart
    },
    {
      path: '/account/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/account/spending',
      name: 'Spending',
      component: Spending
    },
    {
      path: '/financial/financial',
      name: 'Financial',
      component:Financial
    },
    {
      path: '/financial/buy',
      name: 'Buy',
      component:Buy
    },
    {
      path: '/financial/wealthProducts',
      name: 'WealthProducts',
      component:WealthProducts
    },
    {
      path: '/financial/myFinancial',
      name: 'MyFinancial',
      component:MyFinancial
    },
    {
      path: '/financial/recordDetails',
      name: 'RecordDetails',
      component:RecordDetails
    },
    {
      path: '/financial/returnsDetailed',
      name: 'ReturnsDetailed',
      component:ReturnsDetailed
    },
    {
      path: '/financial/transactionRecords',
      name: 'TransactionRecords',
      component:TransactionRecords
    },
    {
      path: '/mine/mine',
      name: 'Mine',
      component:Mine
    },
    {
      path: '/mine/feedback',
      name: 'Feedback',
      component:Feedback
    },
    {
      path: '/mine/five',
      name: 'Five',
      component:Five
    },
    {
      path: '/mine/four',
      name: 'Four',
      component:Four
    },
    {
      path: '/mine/fpreference',
      name: 'Fpreference',
      component:Fpreference
    },
    {
      path: '/mine/password',
      name: 'Password',
      component:Password
    },
    {
      path: '/mine/pers',
      name: 'Pers',
      component:Pers
    },
    {
      path: '/mine/six',
      name: 'Six',
      component:Six
    },
    {
      path: '/mine/three',
      name: 'Three',
      component:Three
    },
    {
      path: '/mine/two',
      name: 'Two',
      component:Two
    }]
})
