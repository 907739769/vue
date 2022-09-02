import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
    {
    title: '需求编号',
    align:"center",
    dataIndex: 'xqNumber'
   },
   {
    title: '需求名称',
    align:"center",
    dataIndex: 'xqName'
   },
   {
    title: '科技需求编号',
    align:"center",
    dataIndex: 'kjxqNum'
   },
   {
    title: '科技子任务编号',
    align:"center",
    dataIndex: 'ittaskNum'
   },
   {
    title: '系统名称',
    align:"center",
    dataIndex: 'system'
   },
   {
    title: '评审阶段',
    align:"center",
    dataIndex: 'reviewStep'
   },
   {
    title: '评审人员',
    align:"center",
    dataIndex: 'reviewMembers'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
 {
    label: '需求编号',
    field: 'xqNumber',
    component: 'Input'
  },
 {
    label: '需求名称',
    field: 'xqName',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '需求编号',
    field: 'xqNumber',
    component: 'Input',
  },
  {
    label: '需求名称',
    field: 'xqName',
    component: 'Input',
  },
  {
    label: '科技需求编号',
    field: 'kjxqNum',
    component: 'Input',
  },
  {
    label: '科技子任务编号',
    field: 'ittaskNum',
    component: 'Input',
  },
  {
    label: '系统名称',
    field: 'system',
    component: 'Input',
  },
  {
    label: '评审阶段',
    field: 'reviewStep',
    component: 'Input',
  },
  {
    label: '评审人员',
    field: 'reviewMembers',
    component: 'Input',
  },
];
//子表表格配置
export const reviewPublishDetailColumns: JVxeColumn[] = [
    {
      title: '关联ID',
       key: 'refId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '问题类型',
       key: 'problemType',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '问题描述',
       key: 'problemDescription',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '对应措施',
       key: 'problemMeasure',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '责任人',
       key: 'problemResponsible',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '问题状态',
       key: 'problemStatus',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '处理日期',
       key: 'problemFixTime',
      type: JVxeTypes.datetime,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '备注',
       key: 'note',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
  ]
export const reviewPublishChecklistResultColumns: JVxeColumn[] = [
    {
      title: '关联ID',
       key: 'refId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '检查分组',
       key: 'checkGroup',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '序号',
       key: 'seqNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '确认项目',
       key: 'checkTitle',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '检查内容',
       key: 'checkContent',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '检查结果',
       key: 'problemStatus',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
    {
      title: '备注及详细说明',
       key: 'note',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
    },
  ]