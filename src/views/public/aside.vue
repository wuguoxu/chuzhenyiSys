<template>
<div class="root">
    <div class="tx">
        <div class="tx-container">
        <div class="tx-icon"></div>
        <div class="tx-name">CASIT</div>
        <div class="tx-role">管理员</div>

        </div>
    </div>
    <el-menu default-active="/main/home" class="el-menu-vertical"
        style="border-right: none"
        router
        @open="handleOpen" 
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" 
        :collapse="isCollapse">

        <el-menu-item index="/main/home">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
        </el-menu-item>
        
        <el-menu-item index="/main/map">
            <i class="el-icon-location"></i>
            <span slot="title">设备分布</span>
        </el-menu-item>

        <el-submenu index="#">
            <template slot="title">
                <i class="el-icon-view"></i>
                <span slot="title">统计分析</span>
            </template>

            <el-menu-item index="#01" ><i class="el-icon-caret-right"></i>频次分析</el-menu-item>
            <!-- <el-menu-item index="#02">设备查询</el-menu-item>
            <el-menu-item index="#03">备品备件</el-menu-item> -->
        </el-submenu>

        <el-menu-item index="/main/repaire_list/">
            <i class="el-icon-edit"></i>
            <span slot="title">维修管理</span>
        </el-menu-item>

        <el-submenu index="#2">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">设备管理</span>
            </template>

            <!-- <el-menu-item index="#21" ><i class="el-icon-caret-right"></i>设备查询</el-menu-item> -->
            <el-menu-item index="/main/eqList"><i class="el-icon-caret-right"></i>设备查询</el-menu-item>
            <el-menu-item index="#23"><i class="el-icon-caret-right"></i>备品备件</el-menu-item>
            <!-- <el-menu-item index="#24"><i class="el-icon-caret-right"></i>应用知识库</el-menu-item> -->

        </el-submenu>
        
        <el-submenu index="#3">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统设置</span>
            </template>
            <el-menu-item index="/main/userSettins" ><i class="el-icon-caret-right"></i>用户设置</el-menu-item>
            <el-menu-item index="/main/pswcg"><i class="el-icon-caret-right"></i>密码修改</el-menu-item>
            <el-menu-item index="#13"><i class="el-icon-caret-right"></i>系统消息</el-menu-item>
        </el-submenu>


    </el-menu>
</div>
    
</template>

<script>
export default {
    data: function(){
        return {
            isCollapse: false,  // 是否将导航栏折叠
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
    
}
</script>

<style lang="scss" scoped>
$menu-bg-cl: #545c64;

.root{
    overflow: hidden;
    .el-menu-vertical:not(.el-menu--collapse) {
        //width: 180px;
        min-height: 400px;
    }

    .tx{
        height: 171px;
        position: relative;
        color: aliceblue;

        .tx-container{
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            .tx-icon{
                height: 70px; width: 70px;
                border-radius: 10px;
            }

        }

    
    }

.el-submenu{
    .el-menu-item{
        padding-left: 2.5rem!important;
    }
}


}

</style>
