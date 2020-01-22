<template>
  	<section>
    	<div  class="takeda_header">
			<div class="row">
				<div class="acc_img">
					<div style="margin-left:20px;">	
						<img src="../images/acc.png" style="width:30px;height:31px;"/>
					</div>
					<div class="acc_logo">accenture</div>
				</div>
				<div class="homeHeader col-md-offset-3" >
					{{date | formatDateTime}}
					<span class="glyphicon glyphicon-user user"></span>
				</div>  
			</div>
		</div>
		<div class="takeda_body">
			<div class="takeda_left">
				<div class="left_top">
					<li class="left_title">我的任务</li>
					<li><a class="a_active" href="#">创建流程</a></li>
					<li><a href="#">草稿箱</a></li>
					<li><a href="#">已提交的申请</a></li>
					<li><a href="#">待处理的任务</a></li>
					<li><a href="#">已处理的任务</a></li>		
				</div>
				<div class="left_bottom">
					<li class="left_title">工具箱</li>
					<li><a href="#">预算管理平台</a></li>
					<li><a href="#">预算查询</a></li>
					<li><a href="#">委托代理</a></li>
					<li><a href="#">查询报表</a></li>
					<li><a href="#">操作视频</a></li>
					<li><a href="#">活动审批</a></li>
					<li><a href="#">财务工具</a></li>
					<li><a href="#">标准协议模板</a></li>
					<li><a href="#">帮助</a></li>
				</div>
				<div class="left_info">
					<li class="left_title">Support Center</li>
					<hr class="border_1"/>
					<li class="li_info">China IT Service Desk</li>
					<li class="li_info">4008428187</li>
					<li class="li_info">+85230774694</li>
					<li class="li_info">Send an e-mail</li>
					<li class="li_info">沪ICP备15043577</li>
				</div>
			</div>
			<div class="takeda_right">
				<div class="takeda_nav" >
					<div class="takeda_nav_1">
						<span class="glyphicon glyphicon-home"><a style="text-decoration: none;">首页</a>>{{}}</span>
					</div>
				</div>
				<div class="takeda_container">
					<div class="nav">
						<div class="col-md-3">
							<div class="container_row">
								<div class="c_title col-md-4">财务类</div>
								<div class="c_img"><img src="../images/caiwu.png"/></div>
								<div class="c_li">
									<li><a href="#">差旅申请流程</a></li>
									<li><a href="#">HCP相关活动申请</a></li>
									<li><a href="#">武田一般采购流程</a></li>
									<li><a href="#">夏尔一般采购流程</a></li>
									<li><a href="#">HCP/GO外部用餐流程</a></li>
									<li><a href="#">执行及付款</a></li>
								</div>
							</div>	
						</div>
						<div class="col-md-3 ">
							<div class="container_row">
								<div class="c_title col-md-4">主数据类</div>
								<div class="c_img"><img src="../images/Speaker.png"/></div>
								<div class="c_li">
									<li><a href="#">讲者审核系统</a></li>
									<li><a href="#">讲者查询</a></li>
									<li><a href="#">渠道价格申请流程</a></li>
									<li><a href="#">供应商审核流程</a></li>
									<li><a href="#">供应商查询</a></li>
									<li><a href="#">经销商客户管理系统</a></li>
								</div>
							</div>
						</div>
						<div class="col-md-3 ">
							<div class="container_row">
								<div class="c_title col-md-4">行政类</div>
								<div class="c_img"><img src="../images/HR.png"/></div>
								<div class="c_li">
									<li><a href="#">电子设备及文具</a></li>
									<li><a href="#">样品年计划</a></li>
									<li><a href="#">样品管理</a></li>
									<li><a href="#">样品TJT发货</a></li>
									<li><a href="#">样品TPCC发货</a></li>
									<li><a href="#">包装标签流程</a></li>
								</div>
							</div>	
						</div>
						<div class="col-md-3 ">
					    	<div class="container_row">
								<div class="c_title col-md-4">其他类</div>
								<div class="c_img"><img src="../images/IT.png"/></div>
								<div class="c_li">
									<li><a href="#">需求变更</a></li>
									<li><a href="#">入职流程</a></li>
									<li><a href="#">离职流程</a></li>
									<li><a href="#">AWS服务器申请流程</a></li>
									<li><a href="#">销售预测系统</a></li>
									<li><a href="#"></a></li>
								</div>
							</div>
						</div>
						<div class="nav" id="nav-1">
							<div class="nav_center_3">
								<div class="col-md-12">
									<div class="container_row">
										<div class="nav_center"><span class="glyphicon glyphicon-random">优先处理流程 </span></div>
										<table class="table table-responsive cr_table">
											<th>单号</th> <th>流程名称</th><th>申请人</th><th>时间</th><th>操作</th> 
											<tr><td></td><td></td><td></td><td></td><td></td></tr>  
										</table>
										<div class="nav_center_1"></div>
										<div class="nav_center_2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>		
			</div>
			<div class="takeda_footer"></div>
		</div>
  	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "homeHeader",
  data() {
    return {
      date: new Date()
    };
  },
  filters: {
    formatDateTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  mounted() {
    var that = this;
    this.timer = setInterval(() => {
      that.date = new Date(); //修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
    }
  },
  created() {
 
  },
  methods: {
  
  }
};

</script>

<style lang="less">
</style>