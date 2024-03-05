<template>
  <div >
    <el-row class="tac" style=" width: 10px;">
      <el-menu default-active="2" style="position: fixed; left: 308px;width: 52px;top:68px ">
        <el-button
        @click="next"
          type="success"
          icon="el-icon-check"
          circle
        ></el-button>
      </el-menu>
    </el-row>
    <div style="position:fixed; left: 360px;top:68px;">
      <codemirror
        v-model="item"
        :options="cmOption"
        class="code-mirror"
        @ready="onCmReady3"
        @focus="onCmFocus"
        @input="onCmCodeChange"
        ref="myCmGenerate"
      ></codemirror>
    </div>
  </div>
</template>
   
  <script>
import "codemirror/lib/codemirror.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/sql-hint.js";
import "codemirror/addon/hint/show-hint.css";
// highlightSelectionMatches

// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/sql/sql.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter

// 编辑的主题文件
import "codemirror/theme/monokai.css";
import "codemirror/theme/base16-light.css";
import { codemirror } from "vue-codemirror";
// 我这里引入的是JS语言文件
export default {
  components: { codemirror },
  data() {
    return {
      item: "",
      cmOption: {
        tabSize: 2, // tab
        styleActiveLine: true, // 高亮选中行
        lineNumbers: true, // 显示行号
        styleSelectedText: true,
        line: true,
        foldGutter: true, // 块槽
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }, // 可以启用该选项来突出显示当前选中的内容的所有实例
        mode: {
          // 模式, 可查看 codemirror/mode 中的所有模式
          name: "text/x-mysql",
          json: true,
        },
        // hint.js options
        hintOptions: {
          // 当匹配只有一项的时候是否自动补全
          completeSingle: true,
        },
        // 快捷键 可提供三种模式 sublime、emacs、vim
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "eclipse", // 主题
        extraKeys: { Ctrl: "autocomplete" }, // 可以用于为编辑器指定额外的键绑定，以及keyMap定义的键绑定
      },
    };
  },
  methods: {
    onCmReady3() {
      this.$refs.myCmGenerate.codemirror.setSize("1580px", "820px");
    },
    next(){
        this.$prompt('调度名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$router.push('/step_sub')
        })
    }
  },
};
</script>
  <style>
.CodeMirror-scroll {
  overflow: scroll !important;
  margin-bottom: 0;
  margin-right: 0;
  padding-bottom: 0;
  height: 100%;
  outline: none;
  position: relative;
  border: 1px solid #dddddd;
  color: #131212;
}
</style>
  <style lang="less" scoped>
.code-mirror {
  font-size: 13px;
  line-height: 150%;
  text-align: left;
}
.CodeMirror.cm-keyword {
  color: #ff0000;
}
</style>