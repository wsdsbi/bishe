<template>
    <div>
        <div class="block" style="display: flex; align-items: center; height: 100px;">
            <el-date-picker v-model="action.date" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期" value-format="yyyy-mm-dd hh:mm:ss">
            </el-date-picker>
            <el-select v-model="action.regin"  placeholder="数据分层">
                <el-option value="dwd" label="dwd"></el-option>
                <el-option value="dws" label="dws"></el-option>
            </el-select>
            <el-input v-model="action.table_name" placeholder="输入表名" style="width: 300px;"></el-input>
            <el-input v-model="action.indicator" placeholder="输入指标" style="width: 300px;"></el-input>
            <el-input v-model="action.account" placeholder="输入负责人" style="width: 300px;"></el-input>
            <el-button type="success" @click="Search" round>搜索</el-button>
        </div>
        <el-table :data="tableData" max-height="100%" border   style="width: 100%">
            <el-table-column prop="createtime" label="日期" width="190" align="center">
            </el-table-column>
            <el-table-column prop="active" label="数据分域" width="190" align="center">
            </el-table-column>
            <el-table-column prop="regin" label="数据分层" width="190" align="center">
            </el-table-column>
            <el-table-column prop="tablename" label="数据表名" width="190" align="center">
            </el-table-column>
            <el-table-column prop="indicator" label="指标名称" width="190" align="center">
            </el-table-column>
            <el-table-column prop="account" label="负责人" width="190" align="center">
            </el-table-column>
            <el-table-column label="操作" width="210" align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="model" style="">查看</el-button>
                    <el-button type="text" size="model">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import request from '@/utitl/axios';

export default {
    data() {
        return {
            tableData: [
                {
                    active: '',
                    regin: '',
                    tablename: '',
                    indicator: '',
                    comment: '',
                    owned: '',
                    account: '',
                    createtime:''
                }
            ],
            action: {
                date: '',
                regin: '',
                tablename: '',
                indicator: '',
                comment: '',
                owned: '',
                account: '',
                myaccount: localStorage.getItem('account')
            }

        }
    },
    methods: {
        async Search() {
            
            this.tableData=''
            const re=(await request.post('/get_indicator', this.action))
            this.tableData=re.data
            console.log(this.tableData)
        }
    }
}
</script>

<style></style>