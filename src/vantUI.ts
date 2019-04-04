import { Component, Vue } from 'vue-property-decorator'
// vant 组件
import { Row, Col, Icon, Cell, CellGroup, Button, Field, Tab, Tabs, Tag, Toast, Dialog, Uploader } from 'vant'
// 全局过滤器注册
import * as filters from '@/filter/index'
// 全局指令 吸顶
import VueSticky from 'vue-sticky'
// 参数校验 vee-validate
import {ErrorBag, FieldFlagsBag, Validator} from 'vee-validate'
@Component({
    // 定义全局组件 vant
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
        [Field.name]: Field,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Tag.name]: Tag,
        [Uploader.name]: Uploader,
    },
    // 定义全局filters
    filters: {
        toThousandFilter: filters.toThousandFilter, /* 金钱三位一逗号 */
        fourSpace: filters.fourSpace, /* 银行卡四位一空格 */
        telFormat: filters.telFormat, /* 电话号码过滤，188****7983 */
        cardFormat: filters.cardFormat, /* 身份证号格式化 前四位 后四位 中间变为星号 ---例如：3408*******5656 */
        timeFormat: filters.timeFormat, /* 时间格式化 yyyy-MM-dd hh:mm:ss */
    },
    // 定义全局指令 v-sticky="{ zIndex: NUMBER, stickyTop: NUMBER, disabled: [true|false]}"
    directives: {
        'sticky': VueSticky,
    }
})
export default class VantUI extends Vue{
    $toast!: Toast // 需要声明$Toast的类型
    $validator!: Validator // 声明参数校验的类型
    errors!: ErrorBag
    fields!: FieldFlagsBag
    $dialog!: Dialog
}