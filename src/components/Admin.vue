<template>

<el-table :data="users" style="width:100%">
    <el-table-column prop="nickName" label="别名"></el-table-column>
    <el-table-column label="用户名">
        <template v-slot="item">
            <el-popover trigger="hover" placement="top">
                <p> 上次登录ip: {{item.row.lastLoginIp}} </p>
                <p> 所属机构: {{item.row.dept.name}} </p>
                <p> 角色名: {{item.row.role.roleName}} </p>
                <div slot="reference">
                    <el-tag size="medium">{{item.row.username}}</el-tag>
                </div>
            </el-popover>
        </template>
    </el-table-column>
    <el-table-column prop="lastLoginDate" label="上次登录时间"></el-table-column> 
</el-table>

</template>

<script type="text/javascript">
    import { userList } from '../service/getData'
    export default {
        name: "Admin",
        data(){
            return {
                res: this.init(),
                name: 'Admin',
                users: null
            }
        },
        methods: {
            async init(){
                this.res = await userList()
                this.users = this.res.users
                console.log(this.users)
                return this.users
            }
        }
    }
</script>

<style type="text/css">
.list {
    list-style:none;
    margin:0;
    padding:0;
}
.mint-cell {
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}
</style>