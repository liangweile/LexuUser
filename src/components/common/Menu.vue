<template>
    <div class="menu">
        <el-aside width="200px">
            <el-menu
                router
                :default-active="activePath"
                class="el-menu-vertical-demo"
                background-color="#2578b5"
                text-color="#fff"
                active-text-color="#ffd04b">
                <template v-for="(item,index) in menus">
                    <el-sub-menu :index="index + ''" :key="index"
                    v-if="!item.hidden"
                    >
                        <template #title>
                        <i :class="item.iconClass"></i>
                        <span>{{item.name}}</span>
                        </template>
                        <el-menu-item 
                        :index="child.path" 
                        v-for="(child,index) in item.children" 
                        :key="index">
                            <i :class="child.iconClass"></i>
                            {{child.name}}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const menus = router.options.routes
const activePath = router.currentRoute.value.path
console.log(menus)
</script>

<style lang="less" scoped>
.menu {
    .el-aside {
        height:100%;
        .el-menu {
            height:100%;
            .fa {
                margin-right: 10px;
            }
        }
        .el-submenu{
            min-width: 0;
            margin-top: 20px;
            span {
                font-size: large;
            }
            .el-menu-item {
                font-size: medium;
            }
        }
    }
}
</style>