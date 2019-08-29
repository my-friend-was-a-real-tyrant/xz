<template>
  <div class="service_center">

    <div class="service"><div class="logo"><img src="@/assets/img/s1.png"></div>
    <div class="list"><ul>
    <li><a href="#"><img src="@/assets/img/s2.png"></a></li>
    <li><a href="#"><img src="@/assets/img/s3.png"></a></li>

    </ul></div>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'serviceCenter',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
<style lang="scss" scoped>
/*服务中心*/
.service{width:100%; padding:30px 0;}
.service .logo{width:100%;padding:30px 0;text-align:center;}
.service .logo img{max-width:150px;}
.service .list{width:100%;text-align:center;}
.service .list li{float:left;width:50%;text-align:center;}
.service .list li img{max-width:120px;}
</style>
